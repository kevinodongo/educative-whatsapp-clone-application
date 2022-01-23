import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash"
import { API, graphqlOperation } from "aws-amplify";
import { queryContactByUserId, getUser, queryConversationByUserId, queryMessageByConversationId } from "../graphql/queries"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: {},
    inbox: [],
    contacts: [],
    groupMembers: [],
    sideBarState: 'INBOX', // options = INBOX, NEW CHAT, ADD GROUP PARTICIPANTS, SETTINGS, ARCHIVED, STARRED MESSAGES
    selectedMessage: null
  },
  mutations: {
    UPDATE_SELECTEDMESSAGE(state, value) {
      state.selectedMessage = value
    },
    UPDATE_SIDEBARSTATE(state, value) {
      state.sideBarState = value
    },
    UPDATE_INBOX(state, value) {
      state.inbox = value
    },
    UPDATE_LOGGED(state, value) {
      state.logged = value
    },
    UPDATE_USER_CONTACT(state, value) {
      state.contacts = value
    },
    UPDATE_GROUP_MEMBERS(state, value) {
      state.groupMembers = value
    },
    RESET_STATE(state) {
      state.logged = {}
      state.inbox = []
      state.sideBarState = 'INBOX'
      state.selectedMessage = []
    }
  },
  actions: {
    SAVE_INBOX({ commit }, value) {
      commit("UPDATE_INBOX", value)
    },
    SAVE_SELECTEDMESSAGE({ commit }, value) {
      commit('UPDATE_SELECTEDMESSAGE', value)
    },
    SAVE_SIDEBARSTATE({ commit }, value) {
      commit("UPDATE_SIDEBARSTATE", value)
    },
    async SAVE_MESSAGE(context, value) {
      // update new message 
      const item = context.state.selectedMessage;
      const backupInbox = context.state.inbox
      const index = context.state.inbox.indexOf(item)

      // get the selected message and get the grouped messages
      const response = item.messages.filter((e) => e.date == value.createdAt.split('T')[0])

      if (response.length > 0) {
        response[0].convoMessages.push(value)
        const orderMessages = _.orderBy(_.uniqBy(response[0].convoMessages, 'id'), 'createdAt', 'asc')
        const groupedMessagesByDate = _(orderMessages).groupBy((message) => message.createdAt.split('T')[0]).map((value, key) => ({ date: key, convoMessages: value })).value()
        item.messages = groupedMessagesByDate
        backupInbox[index] = item
        context.commit("UPDATE_SELECTEDMESSAGE", item)
        context.commit("UPDATE_INBOX", backupInbox)
      } else {
        item.messages = [{
          date: value.createdAt.split('T')[0],
          convoMessages: [value]
        }]
        backupInbox[index] = item
        context.commit("UPDATE_SELECTEDMESSAGE", item)
        context.commit("UPDATE_INBOX", backupInbox)
      }
    },
    SAVE_GROUPMEMBER({ commit }, value) {
      commit("UPDATE_GROUP_MEMBERS", value)
    },

    async FETCH_USER_INFORMATION({ commit }, userId) {
      const userResponse = await API.graphql({
        query: getUser,
        variables: { id: userId },
      });
      commit("UPDATE_LOGGED", userResponse.data.getUser)
    },
    async FETCH_USER_CONTACT({ commit }, value) {
      const contactResponse = await API.graphql(
        graphqlOperation(queryContactByUserId, {
          userId: value
        })
      );
      if (!contactResponse) return
      commit("UPDATE_USER_CONTACT", contactResponse.data.queryContactByUserId.items)
    },
    async FETCH_USER_CONVERSATION({ commit }, value) {
      const convoResponse = await API.graphql(
        graphqlOperation(queryConversationByUserId, {
          userId: value
        })
      );
      if (!convoResponse) return
      const sortedResponse = convoResponse.data.queryConversationByUserId.items.map(async (convo) => {

        const convoId = convo.conversationId.split("=");
        let messages = []

        if (convoId.length == 1) {
          const groupResponse = await API.graphql(
            graphqlOperation(queryMessageByConversationId, {
              conversationId: convo.conversationId
            })
          )
          messages = groupResponse.data.queryMessageByConversationId.items
        } else {
          const sourceResponse = await API.graphql(
            graphqlOperation(queryMessageByConversationId, {
              conversationId: convo.conversationId
            })
          )

          const recipientResponse = await API.graphql(
            graphqlOperation(queryMessageByConversationId, {
              conversationId: `${convoId[1]}=${convoId[0]}`
            })
          )

          messages = [...sourceResponse.data.queryMessageByConversationId.items, ...recipientResponse.data.queryMessageByConversationId.items]

        }

        const orderMessages = _.orderBy(_.uniqBy(messages, 'id'), 'createdAt', 'asc')
        const groupedMessagesByDate = _(orderMessages).groupBy((message) => message.createdAt.split('T')[0]).map((value, key) => ({ date: key, convoMessages: value })).value()
        convo.messages = groupedMessagesByDate
        return convo
      })
      const sortedResults = await Promise.all(sortedResponse)
      commit("UPDATE_INBOX", sortedResults)
    },

    async SAVE_NEW_CHAT({ commit }, value) {
      // add an empty array
      value.messages = []
      commit('UPDATE_SELECTEDMESSAGE', value)
    }
  },
});

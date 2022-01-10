import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: {
      id: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      email: "eddie@example.com",
      username: "Eddie Murphy",
    },
    inbox: [
      {
        id: "516258f2-c563-4415-9d50-3b0cb35b7e86",
        image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "wendy@example.com",
        username: "Wendy Williams",
        conversationId: "",
        messages: [
          {
            id: "e3b79a72-a1a3-4df5-a654-d01651ade54e",
            source: "516258f2-c563-4415-9d50-3b0cb35b7e86",
            recipient: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            type: "message",
            content: "Did you get my message",
            createdAt: "2022-01-09T09:12:05+03:00"
          },
          {
            id: "9a72e3b7-a1a3-4df5-a654-d01651ade54e",
            source: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            recipient: "516258f2-c563-4415-9d50-3b0cb35b7e86",
            type: "message",
            content: "I have reserved the day we can organise a meeting",
            createdAt: "2022-01-09T09:12:05+03:00"
          },
          {
            id: "r3b79a72-a1a3-4df5-a654-d01651ade54e",
            source: "516258f2-c563-4415-9d50-3b0cb35b7e86",
            recipient: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            type: "message",
            content: "It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.",
            createdAt: "2022-01-09T09:12:05+03:00"
          },
          {
            id: "9ae3b772-a1a3-4df5-a654-d01651ade54e",
            source: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            recipient: "516258f2-c563-4415-9d50-3b0cb35b7e86",
            type: "message",
            content: "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.",
            createdAt: "2022-01-09T09:12:05+03:00"
          },
          {
            id: "72e9a3b7-a1a3-4df5-a654-d01651ade54e",
            source: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            recipient: "516258f2-c563-4415-9d50-3b0cb35b7e86",
            type: "message",
            content: "See you in the meeting",
            createdAt: "2022-01-09T09:12:05+03:00"
          },
          {
            id: "j3b79a72-a1a3-4df5-a654-d01651ade54e",
            source: "516258f2-c563-4415-9d50-3b0cb35b7e86",
            recipient: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            type: "message",
            content: "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
            createdAt: "2022-01-09T09:12:05+03:00"
          },
          {
            id: "k3b79a72-a1a3-4df5-a654-d01651ade54e",
            source: "516258f2-c563-4415-9d50-3b0cb35b7e86",
            recipient: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            type: "message",
            content: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
            createdAt: "2022-01-09T09:12:05+03:00"
          },
          {
            id: "xa72e3b7-a1a3-4df5-a654-d01651ade54e",
            source: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            recipient: "516258f2-c563-4415-9d50-3b0cb35b7e86",
            type: "message",
            content: "Great motivation",
            createdAt: "2022-01-09T09:12:05+03:00"
          },
          {
            id: "da72e3b7-a1a3-4df5-a654-d01651ade54e",
            source: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            recipient: "516258f2-c563-4415-9d50-3b0cb35b7e86",
            type: "message",
            content: "Dont forget to carry copy of the contract by the client",
            createdAt: "2022-01-09T09:12:05+03:00"
          }
        ]
      },
      {
        id: "18420f1c-adff-49b1-8d9a-24eb971ee703",
        image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        email: "patrick@example.com",
        username: "Patrick Andy",
        messages: [
          {
            id: "5e305fb8-dba9-4de2-bc2e-bb071acc0860",
            source: "18420f1c-adff-49b1-8d9a-24eb971ee703",
            recipient: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            type: "message",
            content: "How are you doing",
            createdAt: "2022-01-04T12:50:18+03:00"
          },
          {
            id: "le305fb8-dba9-4de2-bc2e-bb071acc0860",
            source: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            recipient: "18420f1c-adff-49b1-8d9a-24eb971ee703",
            type: "message",
            content: "Thing are good",
            createdAt: "2022-01-04T12:50:18+03:00"
          },
        ]
      },
      {
        id: "1e700c7f-3798-4488-8176-7226fc1bdca5",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
        email: "steve@example.com",
        username: "Steve Greg",
        messages: [
          {
            id: "2ad65834-a41b-411f-8b0e-680682306fd3",
            source: "1e700c7f-3798-4488-8176-7226fc1bdca5",
            recipient: "d8d7ecfa-cc78-4ea4-8185-21bf04057446",
            type: "message",
            content: "Hi",
            createdAt: "2016-09-09T03:17:25+03:00"
          }
        ]
      }
    ],
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
    }
  },
  actions: {
    SAVE_SELECTEDMESSAGE({ commit }, value) {
      commit('UPDATE_SELECTEDMESSAGE', value)
    },
    SAVE_SIDEBARSTATE({ commit }, value) {
      commit("UPDATE_SIDEBARSTATE", value)
    },
    SAVE_MESSAGE({ commit }, value) {
      commit("UPDATE_SELECTEDMESSAGE", value)
    }
  },
});

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      phone
      image
      username
      lastSeen
      userTyping
      updatedAt
      createdAt
      contact {
        items {
          id
          userId
          email
          username
          image
          phone
          updatedAt
          createdAt
        }
        nextToken
      }
      conversation {
        items {
          id
          userId
          username
          image
          groupIcon
          conversationId
          subject
          type
          updatedAt
          createdAt
        }
        nextToken
      }
      message {
        items {
          id
          userId
          username
          image
          conversationId
          content
          type
          updatedAt
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone
        image
        username
        lastSeen
        userTyping
        updatedAt
        createdAt
        contact {
          nextToken
        }
        conversation {
          nextToken
        }
        message {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      userId
      email
      username
      image
      phone
      updatedAt
      createdAt
      user {
        id
        email
        phone
        image
        username
        lastSeen
        userTyping
        updatedAt
        createdAt
        contact {
          nextToken
        }
        conversation {
          nextToken
        }
        message {
          nextToken
        }
      }
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        email
        username
        image
        phone
        updatedAt
        createdAt
        user {
          id
          email
          phone
          image
          username
          lastSeen
          userTyping
          updatedAt
          createdAt
        }
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      userId
      username
      image
      groupIcon
      conversationId
      subject
      type
      updatedAt
      createdAt
      user {
        id
        email
        phone
        image
        username
        lastSeen
        userTyping
        updatedAt
        createdAt
        contact {
          nextToken
        }
        conversation {
          nextToken
        }
        message {
          nextToken
        }
      }
      message {
        items {
          id
          userId
          username
          image
          conversationId
          content
          type
          updatedAt
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        username
        image
        groupIcon
        conversationId
        subject
        type
        updatedAt
        createdAt
        user {
          id
          email
          phone
          image
          username
          lastSeen
          userTyping
          updatedAt
          createdAt
        }
        message {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      userId
      username
      image
      conversationId
      content
      type
      updatedAt
      createdAt
      user {
        id
        email
        phone
        image
        username
        lastSeen
        userTyping
        updatedAt
        createdAt
        contact {
          nextToken
        }
        conversation {
          nextToken
        }
        message {
          nextToken
        }
      }
      conversation {
        id
        userId
        username
        image
        groupIcon
        conversationId
        subject
        type
        updatedAt
        createdAt
        user {
          id
          email
          phone
          image
          username
          lastSeen
          userTyping
          updatedAt
          createdAt
        }
        message {
          nextToken
        }
      }
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        username
        image
        conversationId
        content
        type
        updatedAt
        createdAt
        user {
          id
          email
          phone
          image
          username
          lastSeen
          userTyping
          updatedAt
          createdAt
        }
        conversation {
          id
          userId
          username
          image
          groupIcon
          conversationId
          subject
          type
          updatedAt
          createdAt
        }
      }
      nextToken
    }
  }
`;
export const queryContactByUserId = /* GraphQL */ `
  query QueryContactByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    queryContactByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        email
        username
        image
        phone
        updatedAt
        createdAt
        user {
          id
          email
          phone
          image
          username
          lastSeen
          userTyping
          updatedAt
          createdAt
        }
      }
      nextToken
    }
  }
`;
export const queryConversationByUserId = /* GraphQL */ `
  query QueryConversationByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    queryConversationByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        username
        image
        groupIcon
        conversationId
        subject
        type
        updatedAt
        createdAt
        user {
          id
          email
          phone
          image
          username
          lastSeen
          userTyping
          updatedAt
          createdAt
        }
        message {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const queryMessageByConversationId = /* GraphQL */ `
  query QueryMessageByConversationId(
    $conversationId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    queryMessageByConversationId(
      conversationId: $conversationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        username
        image
        conversationId
        content
        type
        updatedAt
        createdAt
        user {
          id
          email
          phone
          image
          username
          lastSeen
          userTyping
          updatedAt
          createdAt
        }
        conversation {
          id
          userId
          username
          image
          groupIcon
          conversationId
          subject
          type
          updatedAt
          createdAt
        }
      }
      nextToken
    }
  }
`;

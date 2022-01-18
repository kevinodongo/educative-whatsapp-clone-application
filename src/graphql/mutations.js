/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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

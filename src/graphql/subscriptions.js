/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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

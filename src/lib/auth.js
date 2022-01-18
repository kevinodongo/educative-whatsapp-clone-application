import { Auth } from 'aws-amplify';

// check user authentication status
export const checkUserStatus = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser()
    return user
  } catch (error) {
    throw new Error(error)
  }
}
// signin
export const signIn = async (username, password) => {
  try {
    const user = await Auth.signIn(username, password);
    return user
  } catch (error) {
    throw new Error(error)
  }
}
// signup
export const signUp = async (email, phoneNumber, password) => {
  try {
    const { user } = await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
        'custom:phoneNumber': phoneNumber
      }
    });
    return user
  } catch (error) {
    throw new Error(error)
  }
}
// confirm account
export const confirmSignUp = async (username, code) => {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    throw new Error(error)
  }
}
// resend confirmation code
export const resendConfirmationCode = async (username) => {
  try {
    await Auth.resendSignUp(username);
  } catch (error) {
    throw new Error(error)
  }
}
// signout
export const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log(error);
  }
}
// global sign out
// this will signout user from all devices
export const globalSignOut = async () => {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log(error);
  }
}

// Send confirmation code to user's email
export const sendResetCodePassword = async (username) => {
  try {
    const code = await Auth.forgotPassword(username)
    return code
  } catch (error) {
    throw new Error(error)
  }
}

// reset user password
export const resetPassword = async (username, code, new_password) => {
  try {
    await Auth.forgotPasswordSubmit(username, code, new_password)
  } catch (error) {
    throw new Error(error)
  }
}

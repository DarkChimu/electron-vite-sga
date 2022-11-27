export const AUTH_KEY = "AUTH_TOKEN";
export const USER_KEY = "AUTH_USER";
export const REFRESH_KEY = "REFRESH_TOKEN";

export const getAuthToken = () => {
  try {
    const token = localStorage.getItem(AUTH_KEY);
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const getRefreshToken = () => {
  try {
    const token = localStorage.getItem(REFRESH_KEY);
    return token;
  } catch (error) {
    console.log(error);
  }
};

/**
 * It sets the auth token in the local storage of the device
 * @param Token - The token you want to store.
 */
export const setAuthToken = (Token) => {
  try {
    localStorage.setItem(AUTH_KEY, Token);
  } catch (e) {
    // saving error
  }
};

export const setRefreshToken = (Token) => {
  try {
    localStorage.setItem(REFRESH_KEY, Token);
  } catch (e) {
    // saving error
  }
};

/**
 * It removes the auth token and user data from the device's secure storage
 */
export const removeAuthToken = () => {
  try {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(USER_KEY);
  } catch (e) {
    // saving error
  }
};

export const getAuthUser = async () => {
  try {
    const user = localStorage.getItem(USER_KEY);
    return await JSON.parse(user);
  } catch (error) {
    console.log(error);
  }
};

export const setAuthUser = (user) => {
  try {
    user = JSON.stringify(user);

    localStorage.setItem(USER_KEY, user);
  } catch (e) {
    // saving error
  }
};

export const userStringify = (user) => {
  return JSON.stringify(user);
};

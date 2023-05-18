export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: listing,
  };
};

export const deleteListing = (index) => {
  return {
    type: "DELETE_LISTING",
    value: index,
  };
};

export const login = (username, password) => {
  return {
    type: "LOGIN",
    value: {
      username,
      password,
    },
  };
};

export const logout = (username, password) => {
  return {
    type: "LOGOUT",
    value: {
      username,
      password,
    },
  };
};

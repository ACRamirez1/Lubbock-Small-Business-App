import { combineReducers } from "redux";

const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("state in reducer 02", state);

      const username = action.value.username;
      const loggedIn = true;

      state.username = username;
      state.loggedIn = loggedIn;

      return state;
    case "LOGOUT":
      console.log("LoggedOut in reducer", state);
      state.username = null;
      state.online = false;
      return state;
    default:
      return state;
  }
};

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "DELETE_LISTING":
      const listing = [...state];
      listing.splice(action.value, 1);
      return listing;
    default:
      return state;
  }
};

export default combineReducers({ user, listings });

import { combineReducers} from "redux";

const user = (state = null) => state

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_NEW_LISTING' :
            return [...state, action.value];
        case 'DELETE_LISTING' :
            const listing = [...state]
            listing.splice(action.value, 1);
            return listing;
        default :
        return state
}
}




export default combineReducers({ user, listings }) 
/** @format */

const initState = { userprofile: null };

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_PROFILE":
      return {
        ...state,
        userprofile: action.data,
      };
      
    default:
      return initState;
  }
};

export default UserReducer;

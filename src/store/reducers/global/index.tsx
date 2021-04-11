import * as actionsTypes from "../../actions/actionsTypes";

const initialState = {
  title: "Cyan Coding Exercise",
  message: "",
  pageCurrent: 1,
  subscribersPerPage: 3,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.SET_MESSAGE:
      return { ...state, message: action.payload };

    case actionsTypes.PAGE_UPDATE:
      return { ...state, pageCurrent: action.payload };

    default:
      return state;
  }
};
export default reducer;

import * as actionsTypes from "../../actions/actionsTypes";

const initialState = {
  title: "Cyan Coding Exercise",
  message: "",
  pageCurrent: 1,
  dataIsLoaded: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.SET_MESSAGE:
      return { ...state, message: action.payload };

    case actionsTypes.PAGE_UPDATE:
      return { ...state, pageCurrent: action.payload };

    case actionsTypes.DATA_IS_LOADED:
      return { ...state, dataIsLoaded: true };

    default:
      return state;
  }
};
export default reducer;

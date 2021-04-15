import * as actionsTypes from "../../actions/actionsTypes";
import { AnyAction } from "redux";

export interface GlobalState {
  title: string;
  message: string;
  pageCurrent: number;
  pageLastVisited: number;
  dataIsLoaded: boolean;
}

const initialState = {
  title: "Cyan Coding Exercise",
  message: "",
  pageCurrent: 1,
  pageLastVisited: 1,
  dataIsLoaded: false,
};

const reducer = (state: GlobalState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionsTypes.SET_MESSAGE:
      return { ...state, message: action.payload };

    case actionsTypes.PAGE_UPDATE:
      return {
        ...state,
        pageLastVisited: state.pageCurrent,
        pageCurrent: action.payload,
      };

    case actionsTypes.DATA_IS_LOADED:
      return { ...state, dataIsLoaded: true };

    default:
      return state;
  }
};
export default reducer;

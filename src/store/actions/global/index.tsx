import * as actionsTypes from "../actionsTypes";

export const setMessage = (message: string) => ({
  type: actionsTypes.SET_MESSAGE,
  payload: message,
});

export const pageUpdate = (pageCurrent: number) => ({
  type: actionsTypes.PAGE_UPDATE,
  payload: pageCurrent,
});

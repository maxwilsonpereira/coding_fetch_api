import * as actionsTypes from "../actionsTypes";

export const setMessage = (message: string) => ({
  type: actionsTypes.SET_MESSAGE,
  payload: message,
});

export const pageUpdate = (direction: number) => ({
  type: actionsTypes.PAGE_UPDATE,
  payload: direction,
});

export const dataIsLoaded = () => ({
  type: actionsTypes.DATA_IS_LOADED,
});

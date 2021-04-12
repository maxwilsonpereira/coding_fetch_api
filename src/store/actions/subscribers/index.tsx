import * as actionsTypes from "../actionsTypes";

export const storeData = (data: any) => ({
  type: actionsTypes.STORE_DATA,
  payload: data,
});

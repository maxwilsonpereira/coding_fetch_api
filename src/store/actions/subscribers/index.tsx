import * as actionsTypes from "../actionsTypes";

export const storeAllData = (data: any) => ({
  type: actionsTypes.STORE_ALL_DATA,
  payload: data,
});

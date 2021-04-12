import * as actionsTypes from "../../actions/actionsTypes";

const initialState = {
  subscribers: [
    {
      id: {},
      name: {},
      country: {},
      city: {},
      address: {},
      avatar: {},
      accounts: [],
      calls: [],
    },
  ],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.STORE_DATA:
      let updatedSubscribers = { ...state, subscribers: action.payload };
      return updatedSubscribers;

    default:
      return state;
  }
};
export default reducer;

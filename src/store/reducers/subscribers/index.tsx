import * as actionsTypes from "../../actions/actionsTypes";
import { AnyAction } from "redux";

// export interface SuscriberState {
//   id: string;
//   name: string;
//   country: string;
//   city: string;
//   address: string;
//   avatar: string;
//   accounts: [
//     {
//       id: string;
//       name: string;
//       created: string;
//       subscriberId: string;
//       balance: string;
//     }
//   ];
//   calls: [
//     {
//       id: string;
//       name: string;
//       created: string;
//       subscriberId: string;
//       balance: string;
//     }
//   ];
// }

const initialState = {
  subscribers: [
    {
      id: "",
      name: "",
      country: "",
      city: "",
      address: "",
      avatar: "",
      accounts: [
        { id: "", name: "", created: "", subscriberId: "", balance: "" },
      ],
      calls: [{ id: "", name: "", created: "", subscriberId: "", balance: "" }],
    },
  ],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionsTypes.STORE_DATA:
      let updatedSubscribers = { ...state, subscribers: action.payload };
      return updatedSubscribers;

    default:
      return state;
  }
};
export default reducer;

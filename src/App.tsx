import React, { Suspense, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./global.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import * as actionsTypes from "./store/actions/actionsIndex";
import HomePage from "./pages/home";

import { SubscriberModel } from "./models/subscriber-model";
interface Props {
  onStoreData: (data: SubscriberModel[]) => void;
  onSetMessage: (message: string) => void;
  onDataIsLoaded: () => void;
}

const App: React.FC<Props> = ({
  onStoreData,
  onSetMessage,
  onDataIsLoaded,
}) => {
  useEffect(() => {
    axios
      .get(`https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber`)
      .then(({ data }) => {
        onStoreData(data);
        onSetMessage("Data fetched successfully!");
        onDataIsLoaded();
      })
      .catch((err) => {
        onSetMessage("Connection error. Please try again later.");
      });
  }, []);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="progressCircle">
            <CircularProgress color="primary" />
          </div>
        }
      >
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onStoreData: (dataFetched: SubscriberModel[]) =>
      dispatch(actionsTypes.storeData(dataFetched)),
    onSetMessage: (message: string) =>
      dispatch(actionsTypes.setMessage(message)),
    onDataIsLoaded: () => dispatch(actionsTypes.dataIsLoaded()),
  };
};

export default connect(null, mapDispatchToProps)(App);

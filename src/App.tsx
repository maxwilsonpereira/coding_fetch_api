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
  onStoreAllData: (data: SubscriberModel[]) => void;
  onSetMessage: (message: string) => void;
}

const App: React.FC<Props> = ({ onStoreAllData, onSetMessage }) => {
  useEffect(() => {
    axios
      .get(`https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber`)
      .then(({ data }) => {
        onStoreAllData(data);
        onSetMessage("Data fetched successfully!");
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

const mapStateToProps = (state: any) => {
  return {
    pageCurrent: state.global.pageCurrent,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onStoreAllData: (dataFetched: SubscriberModel[]) =>
      dispatch(actionsTypes.storeAllData(dataFetched)),
    onSetMessage: (message: string) =>
      dispatch(actionsTypes.setMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

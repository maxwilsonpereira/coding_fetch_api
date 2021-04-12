import React from "react";
import classes from "./styles.module.scss";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions/actionsIndex";
import PageTitle from "../../components/page-title";
import Card from "../../components/card";
import CircularProgress from "@material-ui/core/CircularProgress";
import Footer from "../../components/footer";
import PaginationComponent from "../../components/pagination";

import { SubscriberModel } from "../../models/subscriber-model";

interface Props {
  dataIsLoaded: boolean;
  subscribers: SubscriberModel[];
  onPageUpdate: (direction: number) => void;
  pageCurrent: number;
}

const HomePage: React.FC<Props> = ({
  dataIsLoaded,
  subscribers,
  onPageUpdate,
  pageCurrent,
}) => {
  const subscribersPerPage = 7;
  const indexOfLastSubscriber = pageCurrent * subscribersPerPage;
  const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;
  const currentSubscribers = subscribers.slice(
    indexOfFirstSubscriber,
    indexOfLastSubscriber
  );

  const changePageHanlder = (value: number) => {
    onPageUpdate(value);
  };

  return (
    <div className={classes.root}>
      {dataIsLoaded ? (
        <>
          <PageTitle />
          <div className={classes.pageContainer}>
            <div className={classes.pagination}>
              <PaginationComponent
                subscribersPerPage={subscribersPerPage}
                totalSubscriber={subscribers.length}
                changePageHanlder={changePageHanlder}
              />
            </div>
            <div className={classes.gridHome}>
              {currentSubscribers.map((item) => (
                <div key={item.id} className={classes.cardContainer}>
                  <Card subscriber={item} />
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div className={classes.progressCircle}>
          <CircularProgress color="primary" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    subscribers: state.subscribers.subscribers,
    pageCurrent: state.global.pageCurrent,
    dataIsLoaded: state.global.dataIsLoaded,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPageUpdate: (direction: number) =>
      dispatch(actionsTypes.pageUpdate(direction)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React, { useEffect, useState } from "react";
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
  pageLastVisited: number;
}

const HomePage: React.FC<Props> = ({
  dataIsLoaded,
  subscribers,
  onPageUpdate,
  pageCurrent,
  pageLastVisited,
}) => {
  const subscribersPerPage = 7;
  const indexOfLastSubscriber = pageCurrent * subscribersPerPage;
  const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;
  const currentSubscribers: SubscriberModel[] = subscribers.slice(
    indexOfFirstSubscriber,
    indexOfLastSubscriber
  );

  useEffect(() => {
    const element = document.getElementById(`page${pageLastVisited}`);
    if (element) {
      document.getElementById(`page${pageLastVisited}`)!.style.color = "white";
      document.getElementById(`page${pageCurrent}`)!.style.color = "darkred";
    }
  }, [pageCurrent, pageLastVisited, dataIsLoaded]);

  const changePageHanlder = (value: number) => {
    onPageUpdate(value);
  };

  return (
    <div className={classes.root}>
      {dataIsLoaded ? (
        <>
          <div>
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
          </div>

          <div className={classes.footerToBottom}>
            <Footer />
          </div>
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
    dataIsLoaded: state.global.dataIsLoaded,
    pageCurrent: state.global.pageCurrent,
    pageLastVisited: state.global.pageLastVisited,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPageUpdate: (direction: number) =>
      dispatch(actionsTypes.pageUpdate(direction)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

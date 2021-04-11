import React, { useState, useEffect } from "react";
import classes from "./styles.module.scss";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions/actionsIndex";
import PageTitle from "../../components/page-title";
import Card from "../../components/card";
import CircularProgress from "@material-ui/core/CircularProgress";
import PaginationComponent from "../../components/pagination";
import Footer from "../../components/footer";

import { SubscriberModel } from "../../models/subscriber-model";

interface Props {
  subscribers: SubscriberModel[];
  onPageUpdate: (direction: number) => void;
  pageCurrent: number;
  subscribersPerPage: number;
}

const HomePage: React.FC<Props> = ({
  subscribers,
  onPageUpdate,
  pageCurrent,
  subscribersPerPage,
}) => {
  const [currentSubscribers, setCurrentSubscribers] = useState<
    SubscriberModel[]
  >([]);

  const indexOfLastSubscriber = pageCurrent * subscribersPerPage;
  const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;

  useEffect(() => {
    setCurrentSubscribers(
      subscribers.slice(indexOfFirstSubscriber, indexOfLastSubscriber)
    );
  }, [subscribers, pageCurrent]);

  const changePageHanlder = (pageNumber: number) => {
    onPageUpdate(pageNumber);
  };

  return (
    <div className={classes.root}>
      {currentSubscribers.length >= 1 ? (
        <>
          <PageTitle />
          <div className={classes.pageContainer}>
            <div className={classes.pagination}>
              <PaginationComponent
                subscribersPerPage={subscribersPerPage}
                totalSubscriber={subscribers.length}
                paginate={changePageHanlder}
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
    subscribersPerPage: state.global.subscribersPerPage,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPageUpdate: (pageCurrent: number) =>
      dispatch(actionsTypes.pageUpdate(pageCurrent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

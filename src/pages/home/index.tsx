import React, { useState, useEffect } from "react";
import classes from "./styles.module.scss";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions/actionsIndex";
import PageTitle from "../../components/page-title";
import Card from "../../components/card";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import Footer from "../../components/footer";

import { SubscriberModel } from "../../models/subscriber-model";

interface Props {
  message: string;
  subscribers: SubscriberModel[];
  onPageUpdate: (direction: number) => void;
  pageCurrent: number;
}

const HomePage: React.FC<Props> = ({
  message,
  subscribers,
  onPageUpdate,
  pageCurrent,
}) => {
  const [dataFetched, setDataFetched] = useState<SubscriberModel[]>([]);
  const [arrowLeftActivation, setArrowLeftActivation] = useState<string>(
    "inactiveArrow"
  );
  const [arrowRightActivation, setArrowRightActivation] = useState<string>(
    "active"
  );

  useEffect(() => {
    setDataFetched(subscribers);
  }, [message, subscribers]);

  const changePageHanlder = (value: number) => {
    onPageUpdate(value);
    if (pageCurrent === 1) {
      setArrowLeftActivation("active");
      setArrowRightActivation("inactiveArrow");
    } else {
      setArrowRightActivation("active");
      setArrowLeftActivation("inactiveArrow");
    }
  };

  return (
    <div className={classes.root}>
      {dataFetched.length > 1 ? (
        <>
          <PageTitle />
          <div className={classes.pageContainer}>
            <div className={classes.pagination}>
              <FaAngleDoubleLeft
                className={[
                  classes.leftArrow,
                  classes[arrowLeftActivation],
                ].join(" ")}
                size={20}
                onClick={() => changePageHanlder(-1)}
              />
              PAGE {pageCurrent}
              <FaAngleDoubleRight
                className={[
                  classes.rightArrow,
                  classes[arrowRightActivation],
                ].join(" ")}
                size={20}
                onClick={() => changePageHanlder(1)}
              />
            </div>
            <div className={classes.gridHome}>
              {dataFetched.map((item) => (
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
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPageUpdate: (direction: number) =>
      dispatch(actionsTypes.pageUpdate(direction)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

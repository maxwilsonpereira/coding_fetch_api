import React, { useState } from "react";
import classes from "./styles.module.scss";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ModalComponent from "../modal";

import { SubscriberModel } from "../../models/subscriber-model";

interface Props {
  subscriber: SubscriberModel;
}

const CardComponent: React.FC<Props> = ({ subscriber }) => {
  const [showModal, setShowModal] = useState<JSX.Element>();

  const showModalHandler = () => {
    setShowModal(
      <ModalComponent subscriber={subscriber} closeModal={closeModal} />
    );
  };

  const closeModal = () => {
    setShowModal(<></>);
  };

  return (
    <>
      {showModal}
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.cardTop}>
            <Avatar alt="" src={subscriber.avatar} />
            <h2 className={classes.name}>{subscriber.name}</h2>
          </div>
          <h4 className={classes.content}>
            <b>ID</b>: {subscriber.id}
            <br />
            <b>Country: </b>
            {subscriber.country}
            <br />
            <b>City: </b>
            {subscriber.city}
            <br />
            <b>Address: </b>
            {subscriber.address}
          </h4>
          <div className={classes.cardBottom}>
            <Button
              onClick={showModalHandler}
              variant="outlined"
              color="primary"
              fullWidth
              className={
                subscriber.accounts.length >= 1 || subscriber.calls.length >= 1
                  ? classes.active
                  : classes.inactive
              }
            >
              Show more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;

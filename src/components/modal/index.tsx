import React from "react";
import classes from "./styles.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { SubscriberModel } from "../../models/subscriber-model";

interface Props {
  subscriber: SubscriberModel;
  closeModal: () => void;
}

const ModalComponent: React.FC<Props> = ({ subscriber, closeModal }) => {
  return (
    <div className={classes.root}>
      <CloseIcon
        fontSize="large"
        className={classes.closeIcon}
        onClick={closeModal}
      />
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.cardTop}>
            <Avatar alt="" src={subscriber.avatar} className={classes.avatar} />
            <h2 className={classes.fontName}>{subscriber.name}</h2>
          </div>
        </div>
        {subscriber.accounts.map((item) => (
          <div key={item.id}>
            <Accordion className={classes.accordion}>
              <AccordionSummary
                className={classes.acconrdionSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <h2 className={classes.titleAccounts}>
                  Account ID Number {item.id}
                </h2>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <p className={classes.sutTitle}>Name:</p>
                {item.name.replace("_", " ")}
              </AccordionDetails>
              <AccordionDetails className={classes.accordionDetails}>
                <p className={classes.sutTitle}>Created:</p>
                {item.created.substring(5, 7) +
                  "/" +
                  item.created.substring(8, 10) +
                  "/" +
                  item.created.substring(0, 4)}{" "}
                at {item.created.substring(11, 16)}h
              </AccordionDetails>
              <AccordionDetails className={classes.accordionDetails}>
                <p className={classes.sutTitle}>Subscriber ID:</p>
                {item.subscriberId}
              </AccordionDetails>
              <AccordionDetails className={classes.accordionDetails}>
                <p className={classes.sutTitle}>Balance:</p>
                {item.balance}
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
        {subscriber.calls.map((item) => (
          <div key={item.id}>
            <Accordion className={classes.accordionCalls}>
              <AccordionSummary
                className={classes.acconrdionSummary}
                expandIcon={
                  <ExpandMoreIcon className={classes.expandMoreIcon} />
                }
                aria-controls="panel1a-content"
              >
                <h2 className={classes.titleCalls}>Call ID Number {item.id}</h2>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <p className={classes.sutTitle}>Name:</p>
                {item.name.replace("_", " ")}
              </AccordionDetails>
              <AccordionDetails className={classes.accordionDetails}>
                <p className={classes.sutTitle}>Created:</p>
                {item.created.substring(5, 7) +
                  "/" +
                  item.created.substring(8, 10) +
                  "/" +
                  item.created.substring(0, 4)}{" "}
                at {item.created.substring(11, 16)}h
              </AccordionDetails>
              <AccordionDetails className={classes.accordionDetails}>
                <p className={classes.sutTitle}>Subscriber ID:</p>
                {item.subscriberId}
              </AccordionDetails>
              <AccordionDetails className={classes.accordionDetails}>
                <p className={classes.sutTitle}>Balance:</p>
                {item.balance}
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalComponent;

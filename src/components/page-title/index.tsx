import React from "react";
import { connect } from "react-redux";
import classes from "./styles.module.scss";

interface Props {
  title: string;
  message: string;
}

const PageTitle: React.FC<Props> = ({ title, message }) => {
  return (
    <div className={classes.root}>
      <h2>
        {title}
        <br />
        <span className={classes.messageFont}>{message}</span>
      </h2>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    message: state.global.message,
    title: state.global.title,
  };
};

export default connect(mapStateToProps)(PageTitle);

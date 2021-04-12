import React from "react";
import classes from "./styles.module.scss";
interface Props {
  subscribersPerPage: number;
  totalSubscriber: number;
  changePageHanlder: (number: number) => void;
}

const PaginationComponent: React.FC<Props> = ({
  subscribersPerPage,
  totalSubscriber,
  changePageHanlder,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSubscriber / subscribersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.map((number) => (
        <a
          key={number}
          href={`#${number}`}
          onClick={() => changePageHanlder(number)}
          className={classes.numbers}
        >
          {number}
        </a>
      ))}
    </>
  );
};

export default PaginationComponent;

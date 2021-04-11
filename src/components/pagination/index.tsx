import React from "react";

interface Props {
  subscribersPerPage: number;
  totalSubscriber: number;
  paginate: (number: number) => void;
}

const PaginationComponent: React.FC<Props> = ({
  subscribersPerPage,
  totalSubscriber,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalSubscriber / subscribersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <a onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComponent;

import React from "react";

type SubmissionErrorProps = {
  message: string;
  onClick: () => void;
};

const SubmissionError: React.FC<SubmissionErrorProps> = (props) => {
  return (
    <section className="booking">
      <p>{props.message}</p>
      <p className="refresh" onClick={props.onClick}>
        Please try again.
      </p>
    </section>
  );
};
export default SubmissionError;

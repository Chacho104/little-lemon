import React from "react";

type IsSubmittingProps = {
  message: string;
};

const IsSubmitting: React.FC<IsSubmittingProps> = (props) => {
  return (
    <section className="booking">
      <p>{props.message}</p>
    </section>
  );
};
export default IsSubmitting;

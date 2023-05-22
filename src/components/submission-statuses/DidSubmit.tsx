import React from "react";
import Button from "../ui/Button";

type DidSubmitProps = {
  message: string;
  regards: string;
  onClick: () => void;
};

const DidSubmit: React.FC<DidSubmitProps> = (props) => {
  return (
    <section className="booking">
      <h2>Congratulations!</h2>
      <p>{props.message}</p>
      <p>{props.regards}</p>
      <div className="action">
        <Button type="button" onClick={props.onClick}>
          Close
        </Button>
      </div>
    </section>
  );
};
export default DidSubmit;

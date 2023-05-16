import React from "react";
import classes from "./ButtonAlt.module.scss";
import { MdOutlineDeliveryDining } from "react-icons/md";
import Link from "next/link";

type ButtonAltProps = {
  link?: string;
  action?: string;
};

const ButtonAlt: React.FC<ButtonAltProps> = ({ link, action }) => {
  if (link) {
    return (
      <div className={classes.delivery}>
        <div className={classes.time}>
          <MdOutlineDeliveryDining />
          <p>
            Delivery in <strong>30 minutes</strong>
          </p>
        </div>
        <Link href={link}>{action}</Link>
      </div>
    );
  } else {
    return (
      <div className={classes.delivery}>
        <div className={classes["time-only"]}>
          <MdOutlineDeliveryDining />
          <p>
            Delivery in <strong>30 minutes</strong>
          </p>
        </div>
      </div>
    );
  }
};
export default ButtonAlt;

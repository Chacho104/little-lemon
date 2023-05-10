import Link from "next/link";
import React, { useState } from "react";
import classes from "./BasketIcon.module.scss";

const BasketIcon: React.FC = () => {
  const [navIsHighlighted, setNavIsHighlighted] = useState(false);

  //   const cartCtx = useContext(CartContext);

  //   const { items } = cartCtx;

  //   const numberOfCartItems = items.reduce((currNumber, item) => {
  //     return currNumber + item.amount;
  //   }, 0);

  const navClasses = `${classes.nav} ${navIsHighlighted ? classes.bump : ""}`;

  //   useEffect(() => {
  //     if (items.length === 0) {
  //       return;
  //     }
  //     setNavIsHighlighted(true);

  //     const timer = setTimeout(() => {
  //       setNavIsHighlighted(false);
  //     }, 300);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [items]);

  return (
    <nav className={navClasses}>
      <Link href="/basket">
        <svg
          width="46"
          height="47"
          viewBox="0 0 46 47"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M39.7273 28.5378V35.095H46V39.4665H39.7273V46.0238H35.5455V39.4665H29.2727V35.095H35.5455V28.5378H39.7273ZM23 24.1663C20.7 24.1663 18.8182 26.1335 18.8182 28.5378C18.8182 30.9421 20.7 32.9093 23 32.9093C25.3 32.9093 27.1818 30.9421 27.1818 28.5378C27.1818 26.1335 25.3 24.1663 23 24.1663ZM25.8227 41.6523H9.40909C7.48545 41.6523 5.87545 40.2971 5.39455 38.4611L0.0836363 18.1992C-7.45058e-08 18.0025 0 17.8058 0 17.6091C0 16.4069 0.940909 15.4233 2.09091 15.4233H12.1064L21.2645 1.10669C21.6618 0.472827 22.3309 0.123108 23 0.123108C23.6691 0.123108 24.3382 0.472827 24.7355 1.08484L33.8936 15.4233H43.9091C45.0591 15.4233 46 16.4069 46 17.6091L45.9373 18.1992L43.9091 25.9368C42.7173 25.2592 41.3791 24.6909 39.9782 24.4067L41.1909 19.7948H4.83L9.40909 37.2808H25.0909C25.0909 38.8108 25.3627 40.2752 25.8227 41.6523ZM17.1455 15.4233H28.8545L23 6.2432L17.1455 15.4233Z" />
        </svg>
        <p className={classes.badge}>0</p>
      </Link>
    </nav>
  );
};
export default BasketIcon;

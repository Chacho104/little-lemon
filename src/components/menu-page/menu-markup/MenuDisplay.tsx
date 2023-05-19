import React, { useState } from "react";
import classes from "./MenuDisplay.module.scss";
import Breakfast from "../menu-items/Breakfast";
import Lunch from "../menu-items/Lunch";
import Mains from "../menu-items/Mains";
import Desserts from "../menu-items/Desserts";
import Beverages from "../menu-items/Beverages";
import Wines from "../menu-items/Wines";
import Juices from "../menu-items/Juices";

type MenuDisplayProps = {
  title: string;
  description: string;
  meals: {
    _id: string;
    category: string;
    title: string;
    price: number;
    isFeatured: boolean;
    description: string;
    slug: string;
    image: string;
  }[]; // an array of objects
};

const MenuDisplay: React.FC<MenuDisplayProps> = ({
  title,
  description,
  meals,
}) => {
  const [activeButton, setActiveButton] = useState<number>(1);

  const [breakfast, setBreakfast] = useState<boolean>(true);
  const [lunch, setLunch] = useState<boolean>(false);
  const [mains, setMains] = useState<boolean>(false);
  const [desserts, setDesserts] = useState<boolean>(false);
  const [beverages, setBeverages] = useState<boolean>(false);
  const [wines, setWines] = useState<boolean>(false);
  const [juices, setJuices] = useState<boolean>(false);

  const handleSetBreakFast = (buttonId: number) => {
    setBreakfast(true);
    setLunch(false);
    setMains(false);
    setDesserts(false);
    setBeverages(false);
    setWines(false);
    setJuices(false);
    setActiveButton(buttonId);
  };

  const handleSetLunch = (buttonId: number) => {
    setBreakfast(false);
    setLunch(true);
    setMains(false);
    setDesserts(false);
    setBeverages(false);
    setWines(false);
    setJuices(false);
    setActiveButton(buttonId);
  };

  const handleSetMains = (buttonId: number) => {
    setBreakfast(false);
    setLunch(false);
    setMains(true);
    setDesserts(false);
    setBeverages(false);
    setWines(false);
    setJuices(false);
    setActiveButton(buttonId);
  };

  const handleSetDesserts = (buttonId: number) => {
    setBreakfast(false);
    setLunch(false);
    setMains(false);
    setDesserts(true);
    setBeverages(false);
    setWines(false);
    setJuices(false);
    setActiveButton(buttonId);
  };

  const handleSetBeverages = (buttonId: number) => {
    setBreakfast(false);
    setLunch(false);
    setMains(false);
    setDesserts(false);
    setBeverages(true);
    setWines(false);
    setJuices(false);
    setActiveButton(buttonId);
  };

  const handleSetWines = (buttonId: number) => {
    setBreakfast(false);
    setLunch(false);
    setMains(false);
    setDesserts(false);
    setBeverages(false);
    setWines(true);
    setJuices(false);
    setActiveButton(buttonId);
  };

  const handleSetJuices = (buttonId: number) => {
    setBreakfast(false);
    setLunch(false);
    setMains(false);
    setDesserts(false);
    setBeverages(false);
    setWines(false);
    setJuices(true);
    setActiveButton(buttonId);
  };

  return (
    <>
      <section className={classes.filtermeals}>
        <h1>{title}</h1>
        <p>{description}</p>
        <nav className={classes.nav}>
          <ul>
            <li>
              <button
                type="button"
                className={activeButton === 1 ? classes.active : ""}
                onClick={() => handleSetBreakFast(1)}
              >
                Breakfast
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeButton === 2 ? classes.active : ""}
                onClick={() => handleSetLunch(2)}
              >
                Lunch
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeButton === 3 ? classes.active : ""}
                onClick={() => handleSetMains(3)}
              >
                Mains
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeButton === 4 ? classes.active : ""}
                onClick={() => handleSetDesserts(4)}
              >
                Desserts
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeButton === 5 ? classes.active : ""}
                onClick={() => handleSetBeverages(5)}
              >
                Hot Beverages
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeButton === 6 ? classes.active : ""}
                onClick={() => handleSetWines(6)}
              >
                Wines & Cocktails
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeButton === 7 ? classes.active : ""}
                onClick={() => handleSetJuices(7)}
              >
                Juices
              </button>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        {breakfast && <Breakfast meals={meals} />}
        {lunch && <Lunch meals={meals} />}
        {mains && <Mains meals={meals} />}
        {desserts && <Desserts meals={meals} />}
        {beverages && <Beverages meals={meals} />}
        {wines && <Wines meals={meals} />}
        {juices && <Juices meals={meals} />}
      </section>
    </>
  );
};
export default MenuDisplay;

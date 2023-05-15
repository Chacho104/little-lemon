import React, { useReducer, useState } from "react";
import classes from "./MenuDisplay.module.scss";
import MenuItemsList from "./MenuItemsList";

type MenuDisplayProps = {
  title: string;
  description: string;
  meals: any[];
};

const initialState = {
  breakfast: true,
  lunch: false,
  mains: false,
  desserts: false,
  beverages: false,
  wines: false,
  juices: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "set_breakfast":
      return {
        breakfast: true,
        lunch: false,
        mains: false,
        desserts: false,
        beverages: false,
        wines: false,
        juices: false,
      };

    case "set_lunch": {
      return {
        breakfast: false,
        lunch: true,
        mains: false,
        desserts: false,
        beverages: false,
        wines: false,
        juices: false,
      };
    }

    case "set_mains": {
      return {
        breakfast: false,
        lunch: false,
        mains: true,
        desserts: false,
        beverages: false,
        wines: false,
        juices: false,
      };
    }

    case "set_desserts": {
      return {
        breakfast: false,
        lunch: false,
        mains: false,
        desserts: true,
        beverages: false,
        wines: false,
        juices: false,
      };
    }

    case "set_beverages": {
      return {
        breakfast: false,
        lunch: false,
        mains: false,
        desserts: false,
        beverages: true,
        wines: false,
        juices: false,
      };
    }

    case "set_wines": {
      return {
        breakfast: false,
        lunch: false,
        mains: false,
        desserts: false,
        beverages: false,
        wines: true,
        juices: false,
      };
    }

    case "set_juices": {
      return {
        breakfast: false,
        lunch: false,
        mains: false,
        desserts: false,
        beverages: false,
        wines: false,
        juices: true,
      };
    }

    default:
      return state;
  }
};

const MenuDisplay: React.FC<MenuDisplayProps> = ({
  title,
  description,
  meals,
}) => {
  // use use reducer to manage these states

  const [state, dispatch] = useReducer(reducer, initialState);

  const [activeButton, setActiveButton] = useState(1);

  const handleSetBreakFast = (buttonId: number) => {
    dispatch({ type: "set_breakfast" });
    setActiveButton(buttonId);
  };

  const handleSetLunch = (buttonId: number) => {
    dispatch({ type: "set_lunch" });
    setActiveButton(buttonId);
  };

  const handleSetMains = (buttonId: number) => {
    dispatch({ type: "set_mains" });
    setActiveButton(buttonId);
  };

  const handleSetDesserts = (buttonId: number) => {
    dispatch({ type: "set_desserts" });
    setActiveButton(buttonId);
  };

  const handleSetBeverages = (buttonId: number) => {
    dispatch({ type: "set_beverages" });
    setActiveButton(buttonId);
  };

  const handleSetWines = (buttonId: number) => {
    dispatch({ type: "set_wines" });
    setActiveButton(buttonId);
  };

  const handleSetJuices = (buttonId: number) => {
    dispatch({ type: "set_juices" });
    setActiveButton(buttonId);
  };

  const breakfastItems = meals.filter((meal) => meal.category === "breakfast");
  const lunchItems = meals.filter((meal) => meal.category === "lunch");
  const mainItems = meals.filter((meal) => meal.category === "mains");
  const dessertItems = meals.filter((meal) => meal.category === "desserts");
  const beverageItems = meals.filter((meal) => meal.category === "beverages");
  const wineItems = meals.filter((meal) => meal.category === "wines");
  const juiceItems = meals.filter((meal) => meal.category === "juices");

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
        {state.breakfast && <MenuItemsList items={breakfastItems} />}
        {state.lunch && <MenuItemsList items={lunchItems} />}
        {state.mains && <MenuItemsList items={mainItems} />}
        {state.desserts && <MenuItemsList items={dessertItems} />}
        {state.beverages && <MenuItemsList items={beverageItems} />}
        {state.wines && <MenuItemsList items={wineItems} />}
        {state.juices && <MenuItemsList items={juiceItems} />}
      </section>
    </>
  );
};
export default MenuDisplay;

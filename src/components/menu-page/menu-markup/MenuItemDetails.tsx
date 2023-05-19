import React from "react";
import classes from "./MenuItemDetails.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
import ButtonAlt from "../../ui/ButtonAlt";
import MenuItemForm from "./MenuItemForm";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/BasketSlice";

type MenuItemDetailsProps = {
  title: string;
  description: string;
  image: string;
  id: string;
  price: number;
};

const MenuItemDetails: React.FC<MenuItemDetailsProps> = ({
  title,
  description,
  image,
  id,
  price,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const addToCartHandler = (amount: number) => {
    dispatch(
      addItem({
        item: {
          id: id,
          title: title,
          amount: amount,
          price: price,
        },
      })
    );
  };

  return (
    <section>
      <div className={classes["meal-item"]}>
        <div className={classes.image}>
          <Image
            src={"/" + image}
            alt={`Delicious ${title}`}
            width={560}
            height={288}
          />
          <button className={classes.backbtn} onClick={() => router.back()}>
            <BsArrowLeft />
          </button>
        </div>
        <div className={classes.details}>
          <h2>{title}</h2>
          <p>{description}</p>
          <ButtonAlt />
        </div>
        <div className={classes.customize}>
          <MenuItemForm id={id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </section>
  );
};
export default MenuItemDetails;

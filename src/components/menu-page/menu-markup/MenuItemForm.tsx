import { useRef } from "react";
import Button from "../../ui/Button";
import classes from "./MenuItemForm.module.scss";

type MenuItemFormProps = {
  id: string;
  onAddToCart: (amount: number) => void;
};

const MenuItemForm: React.FC<MenuItemFormProps> = ({ id, onAddToCart }) => {
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountNumber = +enteredAmount;

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.order} onSubmit={submitHandler}>
      <div className={classes.amount}>
        <div>
          <label htmlFor={`amount_ + ${id}`}>Amount</label>
        </div>
        <input
          ref={amountInputRef}
          type="number"
          id={`amount_ + ${id}`}
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <div>
        <h2>Extras</h2>
      </div>
      <div className={classes.add}>
        <div>
          <label htmlFor="feta">Add feta</label>
        </div>
        <div>
          <input type="checkbox" id="feta" name="feta" />
        </div>
      </div>
      <div className={classes.add}>
        <div>
          <label htmlFor="parmesan">Add parmesan</label>
        </div>
        <div>
          <input type="checkbox" id="parmesan" name="parmesan" />
        </div>
      </div>
      <div className={classes.add}>
        <div>
          <label htmlFor="dressing">Add dressing</label>
        </div>
        <div>
          <input type="checkbox" id="dressing" name="dressing" />
        </div>
      </div>
      <div className={classes.act}>
        <Button variant="formbtn" type="submit">
          Add to Basket
        </Button>
      </div>
    </form>
  );
};
export default MenuItemForm;

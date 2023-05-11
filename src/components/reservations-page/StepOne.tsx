import { Field, Form, Formik } from "formik";
import React, { MouseEventHandler } from "react";
import { BsPerson } from "react-icons/bs";
import { FaGlassCheers } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import classes from "./StepOne.module.scss";
import TimeOptions from "./TimeOptions";
import Button from "../ui/Button";
import Image from "next/image";

type StepOneProps = {
  next: any;
  date: string;
  noOfDiners: string;
  occasion: string;
  time: string;
  seatingArea: string;
};

const StepOne: React.FC<StepOneProps> = ({
  next,
  date,
  noOfDiners,
  occasion,
  time,
  seatingArea,
}) => {
  const bookingDetailsForm = (
    <>
      <Formik
        initialValues={{
          date,
          noOfDiners,
          occasion,
          time,
          seatingArea,
        }}
        onSubmit={(values) => {
          next(values);
        }}
      >
        <Form>
          <div className={classes["form-input"]}>
            <div className={classes.controls}>
              <div className={classes.control}>
                <label htmlFor="date">Date</label>
                <div className={classes.input}>
                  <HiOutlineCalendar />
                  <Field id="date" name="date" type="date" />
                </div>
              </div>
              <div className={classes.control}>
                <label htmlFor="diners">Number of Diners</label>
                <div className={classes.input}>
                  <BsPerson />
                  <Field id="diners" name="noOfDiners" as="select">
                    <option value="">No. of Diners</option>
                    <option value="1">1 Diner</option>
                    <option value="2">2 Diners</option>
                    <option value="3">3 Diners</option>
                    <option value="4">4 Diners</option>
                    <option value="5">5 Diners</option>
                    <option value="6">6 Diners</option>
                    <option value="7">7 Diners</option>
                    <option value="8">8 Diners</option>
                    <option value="9">9 Diners</option>
                    <option value="10">10 Diners</option>
                  </Field>
                </div>
              </div>
            </div>
            <div className={classes.controls}>
              <div className={classes.control}>
                <label htmlFor="occasion">Occasion</label>
                <div className={classes.input}>
                  <FaGlassCheers />
                  <Field id="occasion" name="occasion" as="select">
                    <option value="">Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </Field>
                </div>
              </div>
              <TimeOptions />
            </div>
            <div className={classes["radio-group"]}>
              <div id="my-radio-group" className={classes.label}>
                Seating Area
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field
                    type="radio"
                    name="seatingArea"
                    value="Indoor seating"
                  />
                  Indoor seating
                </label>
                <label>
                  <Field
                    type="radio"
                    name="seatingArea"
                    value="Outdoor seating"
                  />
                  Outdoor seating
                </label>
              </div>
            </div>
          </div>
          <div className={classes.action}>
            <div className={classes.content}>
              <div className={classes.images}>
                <div>
                  <Image
                    src="/images/restaurant.jpg"
                    width={200}
                    height={190}
                    alt="Little lemon restaurant"
                  />
                </div>
                <div>
                  <Image
                    src="/images/restaurant-chef.jpg"
                    width={200}
                    height={190}
                    alt="Little lemon chef"
                  />
                </div>
                <div>
                  <Image
                    src="/images/restauranfood.jpg"
                    width={200}
                    height={190}
                    alt="Little lemon food"
                  />
                </div>
              </div>
              <div className={classes.act}>
                <Button>Reserve a Table</Button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
  return <>{bookingDetailsForm}</>;
};
export default StepOne;

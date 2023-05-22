import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { FaGlassCheers } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import classes from "./StepOne.module.scss";
import TimeOptions from "./TimeOptions";
import Button from "../ui/Button";
import Image from "next/image";
import * as Yup from "yup";
import CustomInput from "../inputs/CustomInput";
import RadioCustomInput from "../inputs/RadioCustomInput";

type StepOneProps = {
  next: any;
  date: string;
  noOfDiners: string;
  occasion: string;
  time: string;
  seatingArea: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | number;
  userAgreement: string;
};

const StepOne: React.FC<StepOneProps> = (props) => {
  const dateLabel = (
    <div className={classes["custom-label"]}>
      <HiOutlineCalendar />
      <span>Date</span>
    </div>
  );

  const dinersLabel = (
    <div className={classes["custom-label"]}>
      <BsPerson />
      <span>Number of Diners</span>
    </div>
  );

  const occasionLabel = (
    <div className={classes["custom-label"]}>
      <FaGlassCheers />
      <span>Occasion</span>
    </div>
  );

  const bookingDetailsForm = (
    <>
      <Formik
        initialValues={{
          date: props.date,
          noOfDiners: props.noOfDiners,
          occasion: props.occasion,
          time: props.time,
          seatingArea: props.seatingArea,
          firstName: props.firstName,
          lastName: props.lastName,
          email: props.email,
          phone: props.phone,
          userAgreement: props.userAgreement,
        }}
        validationSchema={Yup.object({
          date: Yup.date()
            .min(
              new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleString("en", {
                timeZone: "EAT",
                hour12: false,
              })
            )
            .required("Please enter a valid date")
            .label("Date"),
          noOfDiners: Yup.string().required("Please select number of guests"),
          occasion: Yup.string()
            .oneOf(
              ["Birthday", "Engagement", "Anniversary", "Other"],
              "Invalid Occassion"
            )
            .required("Please select an occassion"),
          time: Yup.string().required("Please select time for the booking"),
          seatingArea: Yup.string().required("Please select seating area"),
        })}
        onSubmit={(values) => {
          props.next(values);
        }}
      >
        {() => (
          <Form>
            <div className={classes["form-input"]}>
              <h1>Reserve a table</h1>
              <div className={classes.controls}>
                <CustomInput
                  name="date"
                  label={dateLabel}
                  id="date"
                  type="date"
                />
                <CustomInput
                  label={dinersLabel}
                  name="noOfDiners"
                  id="diners"
                  as="select"
                >
                  <option value="">No. of Diners</option>
                  <option value="1 Diner">1 Diner</option>
                  <option value="2 Diners">2 Diners</option>
                  <option value="3 Diners">3 Diners</option>
                  <option value="4 Diners">4 Diners</option>
                  <option value="5 Diners">5 Diners</option>
                  <option value="6 Diners">6 Diners</option>
                  <option value="7 Diners">7 Diners</option>
                  <option value="8 Diners">8 Diners</option>
                  <option value="9 Diners">9 Diners</option>
                  <option value="10 Diners">10 Diners</option>
                </CustomInput>
              </div>
              <div className={classes.controls}>
                <CustomInput
                  label={occasionLabel}
                  name="occasion"
                  id="occasion"
                  as="select"
                >
                  <option value="">Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </CustomInput>
                <TimeOptions />
              </div>
              <div className={classes["radio-group"]}>
                <div id="my-radio-group" className={classes.label}>
                  Seating Area
                </div>
                <div role="group" aria-labelledby="my-radio-group">
                  <RadioCustomInput name="seatingArea" value="Indoor seating">
                    Indoor seating
                  </RadioCustomInput>
                  <RadioCustomInput name="seatingArea" value="Outdoor seating">
                    Outdoor seating
                  </RadioCustomInput>
                </div>
                <ErrorMessage name="seatingArea">
                  {(msg) => <div className={classes.error}>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className={classes.action}>
              <div className={classes.content}>
                <div className={classes.images}>
                  <div>
                    <Image
                      src="/images/site/restaurant.jpg"
                      width={200}
                      height={190}
                      alt="Little lemon restaurant"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/site/restaurant-chef.jpg"
                      width={200}
                      height={190}
                      alt="Little lemon chef"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/site/restauranfood.jpg"
                      width={200}
                      height={190}
                      alt="Little lemon food"
                    />
                  </div>
                </div>
                <div className={classes.act}>
                  <Button type="submit">Reserve a Table</Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
  return <>{bookingDetailsForm}</>;
};
export default StepOne;

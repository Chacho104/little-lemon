import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import classes from "./StepTwo.module.scss";
import Image from "next/image";
import Button from "../ui/Button";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { FaGlassCheers } from "react-icons/fa";
import { GiAlarmClock, GiTabletopPlayers } from "react-icons/gi";
import * as Yup from "yup";

type StepTwoProps = {
  next: any;
  prev: any;
  date: string;
  noOfDiners: string;
  occasion: string;
  time: string;
  seatingArea: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const StepTwo: React.FC<StepTwoProps> = ({
  next,
  prev,
  date,
  noOfDiners,
  occasion,
  time,
  seatingArea,
  firstName,
  lastName,
  email,
  phone,
}) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const personalDetailsForm = (
    <>
      <Formik
        initialValues={{
          firstName,
          lastName,
          email,
          phone,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Please enter your first name"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Please enter your last name"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Please enter your email address"),
          phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .min(10, "Phone number must be at least 10 digits")
            .max(10, "Phone number must be at most 10 digits")
            .required("Please enter your phone number"),
        })}
        onSubmit={(values) => {
          next(values, true);
        }}
      >
        <Form>
          <div className={classes["form-input"]}>
            <div className={classes["prev-data"]}>
              <div className={classes.data}>
                <HiOutlineCalendar />
                <p>{date}</p>
              </div>
              <div className={classes.data}>
                <BsPerson />
                <p>{noOfDiners}</p>
              </div>
            </div>
            <div className={classes["prev-data"]}>
              <div className={classes.data}>
                <FaGlassCheers />
                <p>{occasion}</p>
              </div>
              <div className={classes.data}>
                <GiAlarmClock />
                <p>{time} Hours</p>
              </div>
            </div>
            <div className={classes["prev-data"]}>
              <div className={classes.data}>
                <GiTabletopPlayers />
                <p>{seatingArea}</p>
              </div>
              <div className={classes.data}></div>
            </div>
            <div className={classes.controls}>
              <div className={classes.control}>
                <label htmlFor="first-name">First Name</label>
                <div className={classes.input}>
                  <Field
                    id="first-name"
                    name="firstName"
                    placeholder="First name"
                  />
                </div>
                <ErrorMessage name="firstName">
                  {(msg) => <div className={classes.error}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className={classes.control}>
                <label htmlFor="last-name">Last Name</label>
                <div className={classes.input}>
                  <Field
                    id="last-name"
                    name="lastName"
                    placeholder="Last name"
                  />
                </div>
                <ErrorMessage name="lastName">
                  {(msg) => <div className={classes.error}>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className={classes.controls}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <div className={classes.input}>
                  <Field
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                  />
                </div>
                <ErrorMessage name="email">
                  {(msg) => <div className={classes.error}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className={classes.control}>
                <label htmlFor="phone">Phone Number</label>
                <div className={classes.input}>
                  <Field id="phone" name="phone" placeholder="Phone number" />
                </div>
                <ErrorMessage name="phone">
                  {(msg) => <div className={classes.error}>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className={classes["radio-group"]}>
              <div id="my-radio-group" className={classes.label}>
                User Agreement
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field
                    type="radio"
                    name="seatingArea"
                    value="Indoor seating"
                  />
                  You agree to our friendly privacy policy
                </label>
              </div>
            </div>
          </div>
          <div className={classes.action}>
            <div className={classes.content}>
              <div className={classes.images}>
                <div>
                  <Image
                    src="/images/chicago2.jpg"
                    width={200}
                    height={190}
                    alt="Little lemon restaurant"
                  />
                </div>
                <div>
                  <Image
                    src="/images/owners2.jpg"
                    width={200}
                    height={190}
                    alt="Little lemon chefs"
                  />
                </div>
                <div>
                  <Image
                    src="/images/bruchetta.jpg"
                    width={200}
                    height={190}
                    alt="Little lemon food"
                  />
                </div>
              </div>
              <div className={classes.act}>
                <Button type="button" onClick={() => prev()}>
                  Edit Reservattion
                </Button>
                <Button type="submit">Confirm Reservattion</Button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
  return <>{personalDetailsForm}</>;
};
export default StepTwo;

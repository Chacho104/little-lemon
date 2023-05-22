import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import classes from "./StepTwo.module.scss";
import Image from "next/image";
import Button from "../ui/Button";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { FaGlassCheers } from "react-icons/fa";
import { GiAlarmClock, GiTabletopPlayers } from "react-icons/gi";
import * as Yup from "yup";
import TextInput from "../inputs/CustomInput";
import RadioCustomInput from "../inputs/RadioCustomInput";

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
  phone: string | number;
  userAgreement: string;
};

const StepTwo: React.FC<StepTwoProps> = (props) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const personalDetailsForm = (
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
          userAgreement: Yup.string().required("This field is required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          await props.next(values, true);
          setSubmitting(false);
        }}
      >
        {({ values }) => (
          <Form>
            <div className={classes["form-input"]}>
              {/* Data from previous step */}

              <div className={classes["order-details"]}>
                <div className={classes["prev-data"]}>
                  <div className={classes.data}>
                    <HiOutlineCalendar />
                    <p>{props.date}</p>
                  </div>
                  <div className={classes.data}>
                    <BsPerson />
                    <p>{props.noOfDiners}</p>
                  </div>
                </div>
                <div className={classes["prev-data"]}>
                  <div className={classes.data}>
                    <FaGlassCheers />
                    <p>{props.occasion}</p>
                  </div>
                  <div className={classes.data}>
                    <GiAlarmClock />
                    <p>{props.time} Hours</p>
                  </div>
                </div>
                <div className={classes["prev-data"]}>
                  <div className={classes.data}>
                    <GiTabletopPlayers />
                    <p>{props.seatingArea}</p>
                  </div>
                  <div className={classes.data}></div>
                </div>
              </div>

              {/* Form inputs start here */}

              <div className={classes.controls}>
                <TextInput
                  bgcolor="green"
                  label="First Name"
                  name="firstName"
                  id="first-name"
                  placeholder="Enter your first name"
                />
                <TextInput
                  bgcolor="green"
                  label="Last Name"
                  name="lastName"
                  id="last-name"
                  placeholder="Enter your last name"
                />
              </div>
              <div className={classes.controls}>
                <TextInput
                  bgcolor="green"
                  label="Email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <TextInput
                  bgcolor="green"
                  label="Phone Number"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className={classes["radio-group"]}>
                <div id="my-radio-group" className={classes.label}>
                  User Agreement
                </div>
                <div role="group" aria-labelledby="my-radio-group">
                  <RadioCustomInput
                    name="userAgreement"
                    children="You agree to our friendly privacy policy"
                    value="Agreed to privacy policy"
                  />
                </div>
                <ErrorMessage name="userAgreement">
                  {(msg) => <div className={classes.error}>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className={classes.action}>
              <div className={classes.content}>
                <div className={classes.images}>
                  <div>
                    <Image
                      src="/images/site/chicago2.jpg"
                      width={200}
                      height={190}
                      alt="Little lemon restaurant"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/site/owners2.jpg"
                      width={200}
                      height={190}
                      alt="Little lemon chefs"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/site/bruchetta.jpg"
                      width={200}
                      height={190}
                      alt="Little lemon food"
                    />
                  </div>
                </div>
                <div className={classes.act}>
                  <Button
                    type="button"
                    onClick={() => {
                      props.prev(values);
                    }}
                  >
                    Change Reservation
                  </Button>
                  <Button type="submit">Confirm Reservation</Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );

  return <>{personalDetailsForm}</>;
};
export default StepTwo;

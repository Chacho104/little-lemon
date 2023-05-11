import { Field, Form, Formik } from "formik";
import React, { MouseEventHandler } from "react";
import classes from "./StepTwo.module.scss";
import Image from "next/image";
import Button from "../ui/Button";

type StepTwoProps = {
  next: any;
  prev: any;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialReq: string;
};

const StepTwo: React.FC<StepTwoProps> = ({
  firstName,
  lastName,
  email,
  phone,
  specialReq,
}) => {
  const personalDetailsForm = (
    <>
      <Formik
        initialValues={{
          firstName,
          lastName,
          email,
          phone,
          specialReq,
        }}
        onSubmit={() => {}}
      >
        <Form>
          <div className={classes["form-input"]}>
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
              </div>
              <div className={classes.control}>
                <label htmlFor="phone">Phone Number</label>
                <div className={classes.input}>
                  <Field id="phone" name="phone" placeholder="Phone number" />
                </div>
              </div>
            </div>
            <div className={classes["radio-group"]}>
              <div id="my-radio-group" className={classes.label}>
                Privacy Policy
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
                <Button>Confirm Reservattion</Button>
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

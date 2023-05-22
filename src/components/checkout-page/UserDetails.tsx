import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import classes from "./UserDetails.module.scss";
import Button from "@/components/ui/Button";
import CustomInput from "../inputs/CustomInput";

type UserDetailsProps = {
  next: any;
  prev: any;
  cutlery: boolean;
  userName: string;
  phoneNumber: string;
  street: string;
  apartment: string;
};

const UserDetails: React.FC<UserDetailsProps> = (props) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <section className={classes["personal-details"]}>
      <h1>Personal Details</h1>
      <p>
        Please enter correct personal details to enable us deliver swiftly to
        your doorstep.
      </p>
      <Formik
        initialValues={{
          cutlery: props.cutlery,
          userName: props.userName,
          phoneNumber: props.phoneNumber,
          street: props.street,
          apartment: props.apartment,
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Please enter your name"),
          phoneNumber: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .min(10, "Phone number must be at least 10 digits")
            .max(10, "Phone number must be at most 10 digits")
            .required("Please enter your phone number"),
          street: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Please enter name of your street/area"),
          apartment: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Please enter name of your apartment"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          await props.next(values, true);
          setSubmitting(false);
        }}
      >
        {({ values }) => (
          <Form>
            <div className={classes.controls}>
              <CustomInput
                label="Your Name"
                name="userName"
                id="username"
                placeholder="Enter first and last name"
                type="text"
              />
              <CustomInput
                label="Phone Number"
                name="phoneNumber"
                id="phone"
                placeholder="Enter phone number"
                type="text"
              />
            </div>
            <div className={classes.controls}>
              <CustomInput
                label="Your Street"
                name="street"
                id="street"
                placeholder="Enter name of street/area"
                type="text"
              />
              <CustomInput
                label="Your Apartment"
                name="apartment"
                id="apartment"
                placeholder="Enter name of apartment"
                type="text"
              />
            </div>
            <div className={classes.actions}>
              <Button
                type="button"
                onClick={() => {
                  props.prev(values);
                }}
              >
                Edit Order
              </Button>
              <Button type="submit">Proceed</Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default UserDetails;

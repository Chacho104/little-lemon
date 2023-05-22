import React, { useState } from "react";
import Basket from "./Basket";
import UserDetails from "./UserDetails";
import DidSubmit from "../submission-statuses/DidSubmit";
import IsSubmitting from "../submission-statuses/IsSubmitting";
import SubmissionError from "../submission-statuses/SubmissionError";
import { clearBasket } from "@/store/BasketSlice";
import { useDispatch } from "react-redux";

const Checkout: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [didSubmit, setDidSubmit] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    cutlery: false,
    userName: "",
    phoneNumber: "",
    street: "",
    apartment: "",
  });

  const [currentStep, setCurrentStep] = useState<number>(0);

  const dispatch = useDispatch();

  const tryAgain = () => {
    setCurrentStep(0);
  };

  const refreshPage = () => {
    dispatch(clearBasket());
    setCurrentStep(0);
  };

  const makeRequest = async (allFormData: any) => {
    setIsSubmitting(true);
    const response = await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({ orderDetails: allFormData }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      setIsSubmitting(false);
      setError(true);
    } else {
      setError(false);
      setIsSubmitting(false);
      setDidSubmit(true);
    }
  };

  const handleNextStep = (newData: any, final: boolean = false) => {
    setFormData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const FinalStep = (
    <>
      {isSubmitting && !error && (
        <IsSubmitting message="Processing your order..." />
      )}
      {!isSubmitting && !error && didSubmit && (
        <DidSubmit
          message="You have successfully placed your order. We shall swiftly process and deliver it to your doorstep."
          regards="Thank you!"
          onClick={refreshPage}
        />
      )}
      {error && (
        <SubmissionError
          message="Sorry, we could not process your order for some reason."
          onClick={tryAgain}
        />
      )}
    </>
  );

  const steps = [
    <Basket
      key="checkout-step-one"
      next={handleNextStep}
      cutlery={formData.cutlery}
      userName={formData.userName}
      phoneNumber={formData.phoneNumber}
      street={formData.street}
      apartment={formData.apartment}
    />,
    <UserDetails
      key="checkout-step-two"
      prev={handlePrevStep}
      next={handleNextStep}
      cutlery={formData.cutlery}
      userName={formData.userName}
      phoneNumber={formData.phoneNumber}
      street={formData.street}
      apartment={formData.apartment}
    />,
    FinalStep,
  ];

  return <>{steps[currentStep]}</>;
};
export default Checkout;

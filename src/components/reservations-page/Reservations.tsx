import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import IsSubmitting from "../submission-statuses/IsSubmitting";
import DidSubmit from "../submission-statuses/DidSubmit";
import SubmissionError from "../submission-statuses/SubmissionError";

const Reservations: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [didSubmit, setDidSubmit] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    date: "",
    noOfDiners: "",
    occasion: "",
    time: "",
    seatingArea: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userAgreement: "",
  });

  const [currentStep, setCurrentStep] = useState<number>(0);

  const refreshPage = () => {
    setCurrentStep(0);
    setFormData({
      date: "",
      noOfDiners: "",
      occasion: "",
      time: "",
      seatingArea: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      userAgreement: "",
    });
  };

  const makeRequest = async (allFormData: any) => {
    setIsSubmitting(true);
    const response = await fetch("/api/reservations", {
      method: "POST",
      body: JSON.stringify({ reservationDetails: allFormData }),
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

  const StepThree = (
    <>
      {isSubmitting && !error && (
        <IsSubmitting message="Processing your table reservation request..." />
      )}
      {!isSubmitting && !error && didSubmit && (
        <DidSubmit
          message="You have successfully reserved a table. To manage your reservations (i.e
        cancel or edit), log in to your account or sign up with the name and email you've just used
        to make your reservation."
          regards="See you soon!"
          onClick={refreshPage}
        />
      )}
      {error && (
        <SubmissionError
          message="Sorry, we could not process your reservation request."
          onClick={refreshPage}
        />
      )}
    </>
  );
  const steps = [
    <StepOne
      key="reservations-step-one"
      next={handleNextStep}
      date={formData.date}
      noOfDiners={formData.noOfDiners}
      occasion={formData.occasion}
      time={formData.time}
      seatingArea={formData.seatingArea}
      firstName={formData.firstName}
      lastName={formData.lastName}
      phone={formData.phone}
      email={formData.email}
      userAgreement={formData.userAgreement}
    />,
    <StepTwo
      key="reservations-step-two"
      next={handleNextStep}
      prev={handlePrevStep}
      date={formData.date}
      noOfDiners={formData.noOfDiners}
      occasion={formData.occasion}
      time={formData.time}
      seatingArea={formData.seatingArea}
      firstName={formData.firstName}
      lastName={formData.lastName}
      phone={formData.phone}
      email={formData.email}
      userAgreement={formData.userAgreement}
    />,
    StepThree,
  ];

  return <>{steps[currentStep]}</>;
};
export default Reservations;

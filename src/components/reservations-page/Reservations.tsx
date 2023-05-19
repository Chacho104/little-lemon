import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const Reservations: React.FC = () => {
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
  });

  const [currentStep, setCurrentStep] = useState<number>(0);

  const makeRequest = (allFormData: any) => {
    console.log("Form submitted", allFormData);
  };

  const handleNextStep = (newData: any, final: boolean = false) => {
    setFormData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne
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
    />,
    <StepTwo
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
    />,
  ];

  return <>{steps[currentStep]}</>;
};
export default Reservations;

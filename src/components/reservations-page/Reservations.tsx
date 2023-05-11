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
    specialReq: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData: any) => {
    setFormData((prev) => ({ ...prev, ...newData }));
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
    />,
    <StepTwo
      next={handleNextStep}
      prev={handlePrevStep}
      firstName={formData.firstName}
      lastName={formData.lastName}
      phone={formData.phone}
      email={formData.email}
      specialReq={formData.specialReq}
    />,
  ];

  return <>{steps[currentStep]}</>;
};
export default Reservations;
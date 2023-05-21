import React, { useState } from "react";
import Basket from "./Basket";
import Payment from "./Payment";
import UserDetails from "./UserDetails";

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    cutlery: false,
    userName: "",
    phoneNumber: "",
    street: "",
    apartment: "",
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
    <Basket
      next={handleNextStep}
      cutlery={formData.cutlery}
      userName={formData.userName}
      phoneNumber={formData.phoneNumber}
      street={formData.street}
      apartment={formData.apartment}
    />,
    <UserDetails
      prev={handlePrevStep}
      next={handleNextStep}
      cutlery={formData.cutlery}
      userName={formData.userName}
      phoneNumber={formData.phoneNumber}
      street={formData.street}
      apartment={formData.apartment}
    />,
    <Payment />,
  ];

  return <>{steps[currentStep]}</>;
};
export default Checkout;

import React from "react";

type PaymentProps = {
  next: any;
  prev: any;
  cutlery: boolean;
  userName: string;
  phoneNumber: string;
  street: string;
  apartment: string;
};

const Payment: React.FC<PaymentProps> = (props) => {
  return (
    <section>
      <h1>Payment Details</h1>
      <p>
        Working on an online payment method where you will be able to pay
        through your debit or credit card. For now, you will pay upon delivery.
        We apologze for any inconvenience caused.
      </p>
    </section>
  );
};
export default Payment;

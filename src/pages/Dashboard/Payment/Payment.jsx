import { loadStripe } from "@stripe/stripe-js";
import SharedSectionTitle from "../../../components/SharedSectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_payment_api);

const Payment = () => {
  return (
    <div>
      <SharedSectionTitle
        heading={"Payment"}
        subHeading={"---please pay to eat---"}
      ></SharedSectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

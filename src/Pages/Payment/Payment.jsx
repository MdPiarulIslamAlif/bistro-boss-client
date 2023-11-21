import { Elements } from "@stripe/react-stripe-js";
import SectionTitles from "../../Components/SectionTitle/SectionTitles";
import CheckOutFrom from "./CheckOutFrom/CheckOutFrom";
import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

//TODO: add publishable key

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitles heading={"Payment"} subHeading={"Please Pay to eat"}>
      </SectionTitles>
      <div>
          <Elements stripe={stripePromise}>
             <CheckOutFrom />
          </Elements>
      </div>
    </div>
  );
};

export default Payment;

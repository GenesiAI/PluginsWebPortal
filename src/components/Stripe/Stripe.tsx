import {
  Elements,
  PaymentElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51NUpR6KxWQlpnUKorwcACPUzIMMs7g0cwptxQThG0SfisL2gBzmQ7mRCSGiKns3b4lT4DiLuChkW9k6TbCbO9xPC00vC254z4r"
);

// For generate a key use this curl command
/**
 *
 * curl https://api.stripe.com/v1/payment_intents \
 * -u {{REPLACE WITH API KEY}}: \
 * -d amount=2000 \
 * -d currency=eur \
 * -d "automatic_payment_methods[enabled]"=true
 *
 */

export const Stripe = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "pi_3NXt8iKxWQlpnUKo05Jkq8PW_secret_dMsIFjqL5CZsQaw2hfyG6fggX"
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

const CheckoutForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    console.log(stripe, elements);
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      redirect: "if_required"
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log("error", result.error);
    } else {
      console.log("isOk", result);
      navigate("../checkout/success");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  );
};

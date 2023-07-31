import { PaymentsApi } from "apis/api";
import { debugConsole } from "components/util";
import { useEffect } from "react";

export const Stripe = () => {
  useEffect(() => {
    const paymentsApi = new PaymentsApi();
    try {
      paymentsApi.apiPaymentsIntentGet().then((res) => debugConsole(res));
    } catch (err) {
      debugConsole(err);
    }
  }, []);

  return null;
};

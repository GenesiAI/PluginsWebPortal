import { PaymentsApi } from "apis/api";
import { debugConsole } from "components/util";
import { useCallback, useState } from "react";

export const useRedirectToStripe = () => {
  const [{ isLoading, error }, setHttpState] = useState({
    isLoading: false,
    error: ""
  });

  const redirectToStripe = useCallback(() => {
    setHttpState({ isLoading: true, error: "" });
    const paymentsApi = new PaymentsApi();
    try {
      paymentsApi.apiPaymentsIntentGet().then((res) => {
        window.location.href = res.data as unknown as string;
      });
    } catch (err) {
      setHttpState({
        isLoading: true,
        error: "Something went wrong, please retry."
      });
      debugConsole(err);
    }
  }, []);

  return { redirectToStripe, isLoading, error };
};

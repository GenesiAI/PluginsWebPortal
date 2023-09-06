import { PaymentsApi } from "apis/api";
import Button from "components/Button";
import Modal from "components/Modal";
import { debugConsole } from "components/util";
import { useCallback, useState } from "react";

export const useRedirectToStripe = () => {
  const [{ isLoading, error }, setHttpState] = useState({
    isLoading: false,
    error: ""
  });

  const resetState = useCallback(() => {
    setHttpState({ isLoading: false, error: "" });
  }, []);
  const redirectToStripe = useCallback(async () => {
    setHttpState({ isLoading: true, error: "" });
    const paymentsApi = new PaymentsApi();
    try {
      await paymentsApi.apiPaymentsIntentGet().then((res) => {
        window.location.href = res.data as unknown as string;
      });
      resetState();
    } catch (err) {
      setHttpState({
        isLoading: false,
        error: "Something went wrong, please retry."
      });
      debugConsole(err);
    }
  }, [resetState]);

  const modalError = (
    <Modal
      actions={
        <Button onClick={resetState} color="primary" variant="darkBg">
          CLOSE
        </Button>
      }
      open={!!error}
      handleClose={resetState}
      titleText="Generic error"
      contentText={error}
    />
  );

  return { redirectToStripe, isLoading, error, resetState, modalError };
};

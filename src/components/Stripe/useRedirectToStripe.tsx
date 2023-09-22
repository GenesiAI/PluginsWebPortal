import { PaymentsApi } from "apis/api";
import Button from "components/Button";
import Modal from "components/Modal";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { debugConsole } from "components/util";
import { useCallback, useRef, useState } from "react";

export const useRedirectToStripe = () => {
  const userInfo = useUserInfoCtx();
  const userInfoRef = useRef(userInfo);
  userInfoRef.current = userInfo;

  const [{ isLoading, error }, setHttpState] = useState({
    isLoading: false,
    error: ""
  });

  const resetState = useCallback(() => {
    setHttpState({ isLoading: false, error: "" });
  }, []);

  const redirectToStripe = useCallback(async () => {
    setHttpState({ isLoading: true, error: "" });
    try {
      // I try login, if it's premium do redirect without call stripe
      const { userInfo } = await userInfoRef.current.manualLogin(
        (userInfo) => !userInfo.isPremium
      );
      if (userInfo?.isPremium) {
        return;
      }

      const paymentsApi = new PaymentsApi();
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

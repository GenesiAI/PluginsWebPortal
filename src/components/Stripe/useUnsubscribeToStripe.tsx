import { PaymentsApi } from "apis/api";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { debugConsole } from "components/util";
import { useCallback, useState } from "react";
import { ModalUnsubscribe } from "./ModalUnsubscribe";

type InputProps = {
  onCloseModal: () => void;
};
export const useUnsubscribeToStripe = ({ onCloseModal }: InputProps) => {
  const { getUserData } = useUserInfoCtx();

  const [isAskingConfirm, setIsAskingConfirm] = useState(false);
  const [{ isLoading, isError, isUnsubscribed }, setHttpState] = useState({
    isLoading: false,
    isError: false,
    isUnsubscribed: false
  });

  const openModal = useCallback(() => setIsAskingConfirm(true), []);
  const closeModal = useCallback(() => {
    setIsAskingConfirm(false);
    onCloseModal();
  }, [onCloseModal]);

  const unsubscribe = useCallback(async () => {
    setHttpState({ isLoading: true, isError: false, isUnsubscribed: false });
    try {
      const paymentsApi = new PaymentsApi();
      await paymentsApi
        .apiPaymentsUnsubscribePost()
        .then(async (res) => {
          await getUserData();
          // unsubscribed
          setHttpState({
            isLoading: false,
            isError: false,
            isUnsubscribed: true
          });
        })
        .catch(() =>
          setHttpState({
            isLoading: false,
            isError: false,
            isUnsubscribed: false
          })
        );
    } catch (err) {
      setHttpState({
        isLoading: false,
        isError: true,
        isUnsubscribed: false
      });
      debugConsole(err);
    }
  }, []);

  const renderUnsubscribe = (
    <ModalUnsubscribe
      closeModal={closeModal}
      isError={isError}
      isLoading={isLoading}
      isUnsubscribed={isUnsubscribed}
      showModal={isAskingConfirm}
      unsubscribe={unsubscribe}
    />
  );

  return { openModal, closeModal, renderUnsubscribe };
};

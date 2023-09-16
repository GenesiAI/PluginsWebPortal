import ButtonLoading from "components/ButtonLoading";
import { useRedirectToStripe } from "components/Stripe/useRedirectToStripe";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { contacts } from "const/urls";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { CardType } from "../CardsInfo";
const CardActions = ({
  buttonText,
  action,
  isAdvised
}: Pick<CardType, "action" | "buttonText" | "isAdvised">) => {
  const navigate = useNavigate();
  const { handleLogin } = useUserInfoCtx();
  const { isLoading, modalError, redirectToStripe } = useRedirectToStripe();
  const onClick = useCallback(() => {
    if (action === "CONTACT") {
      navigate(`/${contacts}`);
    } else if (action === "LOGIN") {
      handleLogin();
    } else if (action === "BUY") {
      redirectToStripe();
    }
  }, [action, handleLogin, navigate, redirectToStripe]);

  return (
    <>
      {modalError}
      <ButtonLoading
        isLoading={isLoading}
        onClick={onClick}
        variant={isAdvised ? "darkBg" : "lightBg"}
        className={isAdvised ? "-translate-y-1/4 scale-125" : ""}
      >
        {buttonText}
      </ButtonLoading>
    </>
  );
};

export default CardActions;

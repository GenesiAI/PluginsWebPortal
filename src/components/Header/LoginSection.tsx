import Button from "components/Button";
import LoadingSpinner from "components/LoadingSpinner";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import AfterLogin from "./AfterLogin";

const RightSide = () => {
  const { handleLogin, isLoadingUser, isLogged } = useUserInfoCtx();
  if (isLoadingUser || (isLogged && isLoadingUser)) {
    return <LoadingSpinner removeText />;
  }

  return isLogged ? (
    <AfterLogin />
  ) : (
    <Button
      variant="lightBg"
      onClick={handleLogin}
      className={
        "col-span-2 w-fit -translate-y-1/2 scale-150 justify-self-end md:translate-y-0 md:scale-100"
      }
    >
      Sign up
    </Button>
  );
};

export default RightSide;

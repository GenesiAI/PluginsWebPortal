import Button from "components/Button";
import LoadingSpinner from "components/LoadingSpinner";
import AfterLogin from "./AfterLogin";
import useHeader from "./useHeader";

type InputProps = ReturnType<typeof useHeader>;
const RightSide = ({
  handleCloseNavMenu,
  handleLogin,
  handleLogout,
  isLogged,
  isLoadingUser
}: InputProps) => {
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

import Button from "components/Button";
import LoadingSpinner from "components/LoadingSpinner";
import AfterLogin from "./AfterLogin";
import useHeader from "./useHeader";

type InputProps = ReturnType<typeof useHeader>;
const RightSide = ({
  handleCloseNavMenu,
  handleLogin,
  handleLogout,
  links,
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
      className={"col-span-2 justify-self-end"}
    >
      Sign up
    </Button>
  );
};

export default RightSide;

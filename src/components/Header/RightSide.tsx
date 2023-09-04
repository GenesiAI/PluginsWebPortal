import Button from "components/Button";
import AfterLogin from "./AfterLogin";
import useHeader from "./useHeader";

type InputProps = ReturnType<typeof useHeader>;
const RightSide = ({
  handleCloseNavMenu,
  handleLogin,
  handleLogout,
  links,
  isLogged
}: InputProps) => {
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

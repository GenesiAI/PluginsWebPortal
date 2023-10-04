import Button from "components/Button";
import ButtonLoading from "components/ButtonLoading";
import Modal from "components/Modal";
import Typography from "components/Typography";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { contacts, home, pricing } from "const/urls";
import { Link, useNavigate } from "react-router-dom";

type InputProps = {
  unsubscribe: () => void;
  closeModal: () => void;
  isLoading: boolean;
  isError: boolean;
  isUnsubscribed: boolean;
  showModal: boolean;
};
export const ModalUnsubscribe = ({
  isLoading,
  unsubscribe,
  closeModal,
  isError,
  isUnsubscribed,
  showModal
}: InputProps) => {
  const { isLogged, userInfo } = useUserInfoCtx();
  const navigate = useNavigate();
  return (
    <Modal
      actions={
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-2 md:grid-rows-1">
          {isUnsubscribed ? (
            <Button
              type="button"
              color="primary"
              variant="darkBg"
              onClick={() => {
                navigate(`${home}`);
                closeModal();
              }}
              className="col-start-1 col-end-3 row-start-1"
            >
              HOME
            </Button>
          ) : (
            <ButtonLoading
              onClick={unsubscribe}
              color="primary"
              variant="darkBg"
              isLoading={isLoading}
              className="col-start-1 col-end-3 row-start-1"
            >
              {isError ? "RETRY?" : "UNSUBSCRIBE"}
            </ButtonLoading>
          )}
          <Button
            type="button"
            color="primary"
            variant="darkBg"
            onClick={() => {
              navigate(`/${contacts}`);
              closeModal();
            }}
            className="row-start-2 md:row-start-1"
          >
            CONTACT US
          </Button>
          <Button
            onClick={closeModal}
            color="primary"
            variant="darkBg"
            disabled={isLoading}
            className="row-start-2 md:row-start-1"
          >
            CLOSE
          </Button>
        </div>
      }
      open={isLogged && !!userInfo.isPremium && showModal}
      handleClose={closeModal}
      titleText={
        isUnsubscribed
          ? "Successful unsubscribed."
          : "Do you want to unsubscribe?"
      }
      contentText={
        <>
          {isUnsubscribed ? (
            <Typography component="p" className="text-white">
              Please send as a&nbsp;
              <Link to={contacts} className="font-bold" onClick={closeModal}>
                feedback
              </Link>
              &nbsp;
            </Typography>
          ) : (
            <Typography component="p" className="text-white">
              If you unsubscribe you lost all features. Click&nbsp;
              <Link to={pricing} className="font-bold" onClick={closeModal}>
                HERE
              </Link>
              &nbsp;to know what you lost
            </Typography>
          )}
          {isError && (
            <Typography
              component="p"
              className="text-bold mt-5 text-dangerLight"
            >
              Something went wrong, please retry.
            </Typography>
          )}
        </>
      }
    />
  );
};

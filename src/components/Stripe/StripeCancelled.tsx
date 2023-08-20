import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, CircularProgress, Typography } from "@mui/material";
import GoToPlugins from "./GoToPlugins";
import { useRedirectToStripe } from "./useRedirectToStripe";

const StripeCancelled = () => {
  const { error, redirectToStripe, isLoading } = useRedirectToStripe();
  return (
    <>
      {/* <BoxContainer> */}
      <Typography variant="h3" color="error" className="text-center !mt-6">
        {error || "Something went wrong, please retry."}
      </Typography>
      {/* </BoxContainer> */}
      <div className="mt-24 flex justify-center gap-4">
        <Button
          variant="contained"
          color="success"
          startIcon={
            <FontAwesomeIcon
              icon={faPlus}
              className="motion-safe:active:animate-ping"
            />
          }
          type="button"
          onClick={isLoading ? undefined : redirectToStripe}
        >
          {isLoading ? (
            <CircularProgress
              size={24}
              sx={{
                color: (theme) => theme.palette.success.contrastText
              }}
            />
          ) : (
            "Retry"
          )}
        </Button>
        <GoToPlugins />
      </div>
    </>
  );
};

export default StripeCancelled;

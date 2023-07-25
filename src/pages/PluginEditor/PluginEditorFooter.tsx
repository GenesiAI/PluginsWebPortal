import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Button, CircularProgress, Grid } from "@mui/material";
import { memo } from "react";
import { useFormState } from "react-hook-form";
import { usePluginEditorCtxStatus } from "./PluginEditorCtx";

const PluginEditorFooter = () => {
  const { deleteInProgress, setShowDeleteDialog, isNewPlugin } =
    usePluginEditorCtxStatus();
  const { isSubmitting } = useFormState();

  return (
    <Grid item xs={12} sm={12} container justifyContent="space-between">
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        disabled={isNewPlugin}
        onClick={() => setShowDeleteDialog(true)}
      >
        {deleteInProgress ? (
          <CircularProgress
            size={24}
            sx={{ color: (theme) => theme.palette.error.contrastText }}
          />
        ) : (
          "Delete"
        )}
      </Button>
      <Button
        variant="contained"
        color="success"
        startIcon={<SaveIcon />}
        type="submit"
      >
        {isSubmitting ? (
          <CircularProgress
            size={24}
            sx={{
              color: (theme) => theme.palette.success.contrastText
            }}
          />
        ) : (
          "Save"
        )}
      </Button>
    </Grid>
  );
};

export default memo(PluginEditorFooter);

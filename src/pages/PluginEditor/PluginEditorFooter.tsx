import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Grid } from "@mui/material";
import ButtonLoading from "components/ButtonLoading";
import { memo } from "react";
import { useFormState } from "react-hook-form";
import { usePluginEditorCtxStatus } from "./PluginEditorCtx";

const PluginEditorFooter = () => {
  const { deleteInProgress, setShowDeleteDialog, isNewPlugin } =
    usePluginEditorCtxStatus();
  const { isSubmitting } = useFormState();

  return (
    <Grid item xs={12} sm={12} container justifyContent="space-between">
      <ButtonLoading
        color="error"
        startIcon={<DeleteIcon />}
        type="button"
        disabled={isNewPlugin}
        isLoading={deleteInProgress}
        onClick={() => setShowDeleteDialog(true)}
      >
        Delete
      </ButtonLoading>
      <ButtonLoading
        color="success"
        startIcon={<SaveIcon />}
        type="submit"
        isLoading={isSubmitting}
      >
        Save
      </ButtonLoading>
    </Grid>
  );
};

export default memo(PluginEditorFooter);

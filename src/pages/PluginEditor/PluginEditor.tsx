import { Box } from "@mui/material";
import AlertDialog from "components/AlertDialog";
import React, { memo } from "react";
import FieldsContainer from "./Fields/FieldsContainer";
import PluginSections from "./Fields/PluginSections";
import { usePluginEditorCtxStatus } from "./PluginEditorCtx";
import PluginEditorFooter from "./PluginEditorFooter";
import PluginEditorTitle from "./PluginEditorTitle";

const PluginEditor: React.FC<{}> = () => {
  const { deletePlugin, setShowDeleteDialog, error, showDeleteDialog } =
    usePluginEditorCtxStatus();

  return (
    <div>
      <h1>{error}</h1>
      <Box
        sx={{
          margin: "16px",
          // backgroundColor: "#f7f7f7",
          padding: 3,
          borderRadius: 4,
          marginTop: 3
        }}
      >
        <PluginEditorTitle />
        <FieldsContainer>
          <PluginSections />
          <PluginEditorFooter />
        </FieldsContainer>
      </Box>
      <AlertDialog
        open={showDeleteDialog}
        setOpen={setShowDeleteDialog}
        onConfirm={deletePlugin}
      />
    </div>
  );
};

export default memo(PluginEditor);

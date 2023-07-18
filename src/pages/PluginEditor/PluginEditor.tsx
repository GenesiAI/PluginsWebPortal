import AlertDialog from "components/AlertDialog";
import React, { memo } from "react";
import { BoxContainer } from "theme";
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
      <BoxContainer>
        <PluginEditorTitle />
        <FieldsContainer>
          <PluginSections />
          <PluginEditorFooter />
        </FieldsContainer>
      </BoxContainer>
      <AlertDialog
        open={showDeleteDialog}
        setOpen={setShowDeleteDialog}
        onConfirm={deletePlugin}
      />
    </div>
  );
};

export default memo(PluginEditor);

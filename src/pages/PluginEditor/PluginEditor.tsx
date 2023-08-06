import AlertDialog from "components/AlertDialog";
import { memo } from "react";
import { BoxContainer } from "theme";
import FieldsContainer from "./Fields/FieldsContainer";
import PluginSections from "./Fields/PluginSections";
import { usePluginEditorCtxStatus } from "./PluginEditorCtx";
import PluginEditorFooter from "./PluginEditorFooter";
import PluginEditorTitle from "./PluginEditorTitle";

const PluginEditor = () => {
  const { deletePlugin, setShowDeleteDialog, error, showDeleteDialog } =
    usePluginEditorCtxStatus();

  return (
    <div>
      <BoxContainer>
        <PluginEditorTitle />
        <FieldsContainer>
          <PluginSections />
          {error && <h1 className="ml-auto">{error}</h1>}
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

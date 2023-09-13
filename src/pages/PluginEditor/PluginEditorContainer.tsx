import { memo } from "react";
import { BoxContainer } from "theme";
import AlertDialog from "./AlertDialog";
import PluginEditor from "./PluginEditor";
import { usePluginEditorCtxStatus } from "./PluginEditorCtx";
import PluginEditorTitle from "./PluginEditorTitle";

const PluginEditorContainer = () => {
  const { deletePlugin, setShowDeleteDialog, showDeleteDialog, htmlRefChat } =
    usePluginEditorCtxStatus();

  return (
    <div>
      <PluginEditorTitle />
      <div className="flex flex-col md:flex-row">
        <BoxContainer
          className="basis-2/6 sticky top-20 h-min z-10 md:mt-6"
          removePadding
          removeMargin
        >
          <div id="ChatTesting" ref={htmlRefChat}></div>
        </BoxContainer>
        <BoxContainer className="md:order-first basis-auto md:basis-4/6">
          <PluginEditor />
        </BoxContainer>
      </div>
      <AlertDialog
        open={showDeleteDialog}
        setOpen={setShowDeleteDialog}
        onConfirm={deletePlugin}
      />
    </div>
  );
};

export default memo(PluginEditorContainer);

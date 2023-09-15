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
      <div className="grid grid-cols-1 auto-cols-min md:grid-cols-6 grid-flow-row-dense md:grid-rows-6 gap-x-4">
        <BoxContainer
          className="md:col-span-2 md:row-span-3 sticky top-20 z-10 w-fit justify-self-end"
          removePadding
          removeMargin
        >
          <div id="ChatTesting" className="h-full" ref={htmlRefChat}></div>
        </BoxContainer>

        <BoxContainer
          className="md:order-first md:col-span-4 md:row-span-6"
          removeMargin
        >
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

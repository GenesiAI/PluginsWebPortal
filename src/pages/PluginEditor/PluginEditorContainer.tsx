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
      <div className="grid auto-cols-min grid-cols-1 gap-x-4 md:grid-cols-6 md:grid-rows-1">
        <BoxContainer
          className="md:max-h-2/3 sticky top-20 z-10 w-fit justify-self-end md:col-span-2 md:max-h-[70vh]"
          removePadding
          removeMargin
        >
          <div
            id="ChatTesting"
            className="h-full max-h-full"
            ref={htmlRefChat}
          ></div>
        </BoxContainer>
        <div className="md:order-first md:col-span-4">
          <BoxContainer removeMargin>
            <PluginEditor />
          </BoxContainer>
        </div>
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

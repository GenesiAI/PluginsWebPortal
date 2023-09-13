import { Button, Skeleton, Typography } from "@mui/material";
import { createContext, useContext, useMemo, useRef } from "react";
import { BoxContainer } from "theme";
import PluginEditorContainer from "./PluginEditorContainer";
import PluginEditorTitle from "./PluginEditorTitle";
import usePluginEditor from "./usePluginEditor";

type ctxTStatus = Pick<
  ReturnType<typeof usePluginEditor>,
  | "deleteInProgress"
  | "deletePlugin"
  | "error"
  | "isNewPlugin"
  | "setShowDeleteDialog"
  | "showDeleteDialog"
  | "defaultData"
  | "savePlugin"
> & {
  htmlRefChat: React.RefObject<HTMLDivElement>;
};

const initialCtxStatus: ctxTStatus = {
  deleteInProgress: false,
  deletePlugin: async () => {},
  error: "",
  isNewPlugin: true,
  setShowDeleteDialog: () => {},
  showDeleteDialog: false,
  defaultData: {},
  savePlugin: async () => {},
  htmlRefChat: { current: null }
};

const CtxStatus = createContext<ctxTStatus>(initialCtxStatus);

const PluginEditorCtx = () => {
  const {
    savePlugin,
    defaultData,
    isLoadingPlugin,
    deleteInProgress,
    deletePlugin,
    error,
    isNewPlugin,
    setShowDeleteDialog,
    showDeleteDialog,
    fetchData
  } = usePluginEditor();
  const htmlRefChat = useRef<HTMLDivElement>(null);

  const ctx = useMemo(
    () => ({
      deleteInProgress,
      deletePlugin,
      error,
      isNewPlugin,
      setShowDeleteDialog,
      showDeleteDialog,
      defaultData,
      savePlugin,
      htmlRefChat
    }),
    [
      defaultData,
      savePlugin,
      deleteInProgress,
      deletePlugin,
      error,
      isNewPlugin,
      setShowDeleteDialog,
      showDeleteDialog
    ]
  );

  if (isLoadingPlugin) {
    return (
      <>
        <PluginEditorTitle />
        <BoxContainer>
          {error ? (
            <>
              <Typography variant="h6" component="h2" color="error">
                {error}
              </Typography>
              <Button onClick={fetchData} variant="contained" color="error">
                Retry?
              </Button>
            </>
          ) : (
            <>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </>
          )}
        </BoxContainer>
      </>
    );
  }

  return (
    <CtxStatus.Provider value={ctx}>
      <PluginEditorContainer />
    </CtxStatus.Provider>
  );
};

export const usePluginEditorCtxStatus = () => useContext(CtxStatus);

export default PluginEditorCtx;

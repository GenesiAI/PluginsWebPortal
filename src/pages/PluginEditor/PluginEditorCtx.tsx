import { Skeleton } from "@mui/material";
import { createContext, useContext, useMemo } from "react";
import { FormContainer } from "react-hook-form-mui";
import PluginEditor from "./PluginEditor";
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
>;

const initialCtxStatus: ctxTStatus = {
  deleteInProgress: false,
  deletePlugin: async () => {},
  error: "",
  isNewPlugin: true,
  setShowDeleteDialog: () => {},
  showDeleteDialog: false
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
    showDeleteDialog
  } = usePluginEditor();

  const ctx = useMemo(
    () => ({
      deleteInProgress,
      deletePlugin,
      error,
      isNewPlugin,
      setShowDeleteDialog,
      showDeleteDialog
    }),
    [
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
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </>
    );
  }

  return (
    <CtxStatus.Provider value={ctx}>
      <FormContainer
        defaultValues={defaultData}
        onSuccess={savePlugin}
        mode="onBlur"
        reValidateMode="onChange"
      >
        <PluginEditor />
      </FormContainer>
    </CtxStatus.Provider>
  );
};

export const usePluginEditorCtxStatus = () => useContext(CtxStatus);

export default PluginEditorCtx;

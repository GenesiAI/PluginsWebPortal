import { Button, Skeleton, Typography } from "@mui/material";
import { createContext, useContext, useMemo } from "react";
import { FormContainer } from "react-hook-form-mui";
import { BoxContainer } from "theme";
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
    showDeleteDialog,
    fetchData
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

import { memo } from "react";
import { FormContainer } from "react-hook-form-mui";
import ChatTesting from "./ChatTesting";
import FieldsContainer from "./Fields/FieldsContainer";
import PluginSections from "./Fields/PluginSections";
import { usePluginEditorCtxStatus } from "./PluginEditorCtx";
import PluginEditorFooter from "./PluginEditorFooter";

const PluginEditor = () => {
  const { defaultData, savePlugin, error } = usePluginEditorCtxStatus();

  return (
    <FormContainer
      defaultValues={defaultData}
      onSuccess={savePlugin}
      mode="onBlur"
      reValidateMode="onChange"
    >
      <FieldsContainer>
        <PluginSections />
        {error && <h1 className="ml-auto">{error}</h1>}
        <PluginEditorFooter />
      </FieldsContainer>
      <ChatTesting />
    </FormContainer>
  );
};

export default memo(PluginEditor);

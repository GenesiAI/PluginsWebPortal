import Typography from "components/Typography";
import { memo } from "react";
import { FormContainer } from "react-hook-form-mui";
import Chat from "./Chat";
import { formValue, useChatCtx } from "./ChatCtx";
import Footer from "./Footer";

const defaultData: formValue = {
  content: ""
};

const ChatContainer = () => {
  const { clearChat, counter, messages, sendChat, maxMessagesLast24H } =
    useChatCtx();

  return (
    <FormContainer
      defaultValues={defaultData}
      onSuccess={sendChat}
      mode="onBlur"
      FormProps={{ className: "h-full pt-8 md:mt-0" }}
    >
      <div className="flex h-full flex-col justify-between gap-2">
        <Typography
          variant="t4"
          className="block flex-shrink-0 px-2 font-bold text-primary md:mx-6"
        >
          Want to test your plugin? <br />
          It's easy, try here!
        </Typography>
        <Typography
          variant="t5"
          className="me-3 block flex-shrink-0 rounded-xl px-2 pb-2 text-right text-secondaryDark shadow-xl"
        >
          {`${counter}/${maxMessagesLast24H}`}
        </Typography>
        <Chat messages={messages} />
        <Footer clearChat={clearChat} />
      </div>
    </FormContainer>
  );
};

export default memo(ChatContainer);

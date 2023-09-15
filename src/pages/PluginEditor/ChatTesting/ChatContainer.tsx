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
      FormProps={{ className: "h-full" }}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <Typography
            variant="t4"
            className="font-bold text-primary px-2 md:mx-6 sm:mt-4 block"
          >
            Want to test your plugin? <br />
            It's easy, try here!
          </Typography>
          <Typography
            variant="t5"
            className="text-secondaryDark block text-right px-2 me-3 shadow-xl rounded-xl pb-2"
          >
            {`${counter}/${maxMessagesLast24H}`}
          </Typography>
        </div>
        <div className="flex flex-col justify-between pb-4">
          <Chat messages={messages} />
          <Footer clearChat={clearChat} />
        </div>
      </div>
    </FormContainer>
  );
};

export default memo(ChatContainer);

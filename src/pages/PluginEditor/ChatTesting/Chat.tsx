import { Message } from "apis";
import { memo } from "react";
import ChatRow from "./ChatRow";

type InputProps = {
  messages: Message[];
};

const Chat = ({ messages }: InputProps) => {
  return (
    <div className="flex-grow-1 h-full overflow-y-scroll rounded-lg">
      {messages.map((message, index) => (
        <ChatRow key={index} {...message} />
      ))}
    </div>
  );
};

export default memo(Chat);

import { Message } from "apis";
import { memo } from "react";
import ChatRow from "./ChatRow";

type InputProps = {
  messages: Message[];
};

const Chat = ({ messages }: InputProps) => {
  return (
    <div className="overflow-y-scroll rounded-lg my-2">
      {messages.map((message, index) => (
        <ChatRow key={index} {...message} />
      ))}
    </div>
  );
};

export default memo(Chat);

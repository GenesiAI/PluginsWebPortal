import { Message } from "apis";
import { memo } from "react";
import ChatRow from "./ChatRow";

type InputProps = {
  messages: Message[];
};

const Chat = ({ messages }: InputProps) => {
  return (
    <div className="rounded-lg my-2 max-h-[88%] pb-8 md:max-h-[82%] overflow-y-auto">
      {messages.map((message, index) => (
        <ChatRow key={index} {...message} />
      ))}
    </div>
  );
};

export default memo(Chat);

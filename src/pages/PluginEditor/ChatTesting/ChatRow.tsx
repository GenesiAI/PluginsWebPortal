import { Message } from "apis";
import classNames from "classnames";
import Typography from "components/Typography";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import LogoFallback from "img/Logo.png";
import { memo } from "react";

type InputProps = Message;

const ChatRow = ({ content, role }: InputProps) => {
  const { user } = useUserInfoCtx();
  return (
    <div
      className={classNames(
        role === "user"
          ? " border-gray-300/50 bg-gray-800"
          : "border-gray-300/50 bg-[#444654]",
        "border-b px-3 py-1 hover:bg-secondary flex"
      )}
    >
      <div className="basis-1/6 w-8 h-8 my-1 sticky top-4">
        {role === "user" ? (
          <img
            className="aspect-square bg-no-repeat bg-contain h-full rounded-full"
            src={user?.photoURL || ""}
            srcSet={user?.photoURL || ""}
            referrerPolicy="no-referrer"
            alt=""
            loading="lazy"
            aria-hidden="true"
          ></img>
        ) : (
          <img
            className="aspect-square bg-no-repeat bg-contain h-full rounded-full"
            src={LogoFallback}
            srcSet={LogoFallback}
            referrerPolicy="no-referrer"
            alt=""
            loading="lazy"
            aria-hidden="true"
          ></img>
        )}
      </div>
      <Typography
        variant="t5"
        className="text-white basis-5/6 break-all self-center"
      >
        {content}
      </Typography>
    </div>
  );
};

export default memo(ChatRow);

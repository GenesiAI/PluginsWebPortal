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
        "flex border-b px-3 py-1 hover:bg-secondary"
      )}
    >
      <div className="sticky top-4 my-1 h-8 w-8 basis-1/6">
        {role === "user" ? (
          <img
            className="aspect-square h-full rounded-full bg-contain bg-no-repeat"
            src={user?.photoURL || ""}
            srcSet={user?.photoURL || ""}
            referrerPolicy="no-referrer"
            alt=""
            loading="lazy"
            aria-hidden="true"
          ></img>
        ) : (
          <img
            className="aspect-square h-full rounded-full bg-contain bg-no-repeat"
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
        className="basis-5/6 self-center break-words text-white"
      >
        {content}
      </Typography>
    </div>
  );
};

export default memo(ChatRow);

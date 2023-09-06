import { IMessage } from "@/types/appTypes";

const variants = {
  ["primary"]: "bg-primary",
  ["danger"]: "bg-danger",
  ["success"]: "bg-success",
};

const Message = ({ text, show, type }: IMessage) => {
  return (
    <div
      className={`z-50 fixed min-w-max transition-all ${
        show ? "top-2" : "top-[-100%]"
      } left-1/2 translate-x-[-50%] rounded px-3 py-2 ${
        variants[type || "primary"]
      }`}
    >
      <p className="text-base font-medium text-white">{text}</p>
    </div>
  );
};

export default Message;

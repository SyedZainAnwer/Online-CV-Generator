import { BtnVariants } from "@/types/appTypes";

interface propTypes {
  title: string;
  variant?: BtnVariants;
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  parentClassName?: string;
}

const btnStyles = {
  default: 'bg-primary text-white',
  outline: 'bg-white text-black',
  dark: 'bg-black text-white',
}

const Button = ({
  title,
  variant = "default",
  disabled,
  className,
  onClick,
  parentClassName,
}: propTypes) => {
  return (
    <div className={`${parentClassName}`}>
      <button
        className={`
                ${btnStyles[variant]} 
                ${disabled && "opacity-20"}
                ${className} 
                flex justify-center items-center px-4 py-2 font-xs rounded min-w-fit`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

interface propTypes {
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  title?: string;
  value?: string | number;
  name?: string;
  inputType?: React.HTMLInputTypeAttribute;
  className?: string;
  actions?: JSX.Element;
  noBorder?: boolean;
  inputClassName?: string;
  inputBorder?: boolean
}

const Input = ({
  placeholder = "",
  onChange,
  title,
  value,
  name,
  inputType,
  className,
  actions,
  noBorder,
  inputClassName,
  inputBorder = false
}: propTypes) => {
  return (
    <div className={`${className} flex flex-col gap`}>
      <div>
        {title && (
          <span className="text-black mb-2 text-sm font-medium">{title}</span>
        )}
      </div>
      <div
        className={`flex items-center ${
          noBorder ? "" : "border border-1 rounded border-light_gray p-[0.7px]"
        } w-full  flex ${inputClassName ?? ""}`}
      >
        <input
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          className={
            `${inputBorder && 
                inputBorder ? "border border-r-light_gray border-t-0 border-b-0 border-l-0" : 
                "border-none"
            } 
            w-full outline-none py-3 px-4 text-black text-sm`}
        />
        {actions && actions}
      </div>
    </div>
  );
};

export default Input;

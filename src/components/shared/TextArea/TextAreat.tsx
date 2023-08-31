interface propTypes {
    label?: string;
    rows?: number;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    className?: string;
    placeholder?: string;
    hasMaxLenght?: boolean;
    name: string
}

const wordLimit = 300;

const TextArea = ({
  label,
  rows = 5,
  value,
  onChange,
  className,
  placeholder,
  hasMaxLenght = true,
  name
}: propTypes) => {
  return (
    <div className="relative">
      <label
        htmlFor="message"
        className={`${className} block font-medium text-black mb-2`}
      >
        {label}
      </label>
      <textarea
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        maxLength={hasMaxLenght ? wordLimit : undefined}
        className="text-black block p-2.5 w-full text-sm text-gray bg-gray rounded-sm border border-light_gray focus:ring-blue-500 focus:border-blue-500 resize-none"
        placeholder={placeholder}
      />
      {hasMaxLenght && (
        <span className="absolute text-xs text-mid_grey right-6 bottom-2">
          {value && value.length > 0 ? wordLimit - value.length : 300}
        </span>
      )}
    </div>
  );
};

export default TextArea;



interface propTypes {
    placeholder?: string;
    onChange?:React.ChangeEventHandler<HTMLInputElement>;
    title?: string;
    value?: string | number;
    name?: string;
    inputType?: React.HTMLInputTypeAttribute
    className?: string;
}

const Input = ({ placeholder='', onChange, title, value, name, inputType, className }:propTypes) => {
    return(
        <div className={`${className} flex flex-col gap`}>
            <div>
                {title && <span className="text-black mb-2 font-medium">{title}</span>}
            </div>
            <input 
                type={inputType}
                placeholder={placeholder}
                onChange={onChange} 
                value={value}
                name={name}
                className="w-full outline-none border border-light_gray py-3 px-4 text-black text-sm"
            />
        </div>
    )
}

export default Input;
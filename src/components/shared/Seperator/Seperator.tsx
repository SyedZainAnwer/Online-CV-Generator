interface propTypes {
    color?: string;
    className?: string
}

const Seperator = ({ color = "bg-light_gray", className }:propTypes) => {
    return(
        <div className={`${className ? className : ''} w-full h-px ${color}`}></div>
    )
}

export default Seperator;
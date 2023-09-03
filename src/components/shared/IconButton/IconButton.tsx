import plusIcon from '@/assets/icons/plus.svg';

interface propTypes {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    title?: string
    titleClassName?: string
    parentClassName?: string
}

const IconButton = ({ onClick, title, titleClassName, parentClassName }:propTypes) => {
    return(
        <div className={`${parentClassName ?? ''}`}>
            <button className='bg-primary px-4 py-2 rounded-sm flex justify-center items-center' onClick={onClick}>
                <img src={plusIcon} alt="plusIcon" />
                {title && (
                    <p className={`${titleClassName} text-white text-sm`}></p>
                )}
            </button>
        </div>
    )
}

export default IconButton;
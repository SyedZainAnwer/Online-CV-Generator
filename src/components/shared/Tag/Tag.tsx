import cutIcon from '@/assets/icons/close.svg'

interface propsType {
    className?: string;
    title: string;
    canRemove?: boolean;
    onRemove?: () => void;
}

const Tag = ({ className, title, canRemove = true, onRemove }: propsType) => {
    return(
        <div className={`${className} py-2 px-3 bg-light_gray border-light_gray rounded gap-[5px] relative text-center`}>
            <span className="text-sm font-medium text-black">{title}</span>
            {canRemove ? (
                <img 
                    src={cutIcon} 
                    alt="close" 
                    onClick={onRemove}
                    className='absolute top-[-20%] right-[-10%]'
                />
            ) : null}
        </div>
    )
}

export default Tag;
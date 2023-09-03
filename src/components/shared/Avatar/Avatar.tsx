import userIcon from '@/assets/icons/profile.svg'

interface propTypes {
    className?: string;
    size?: number;
    src?: string;
}

const Avatar = ({ className, size, src }: propTypes) => {
    return (
        <div 
            className={`${className} rounded-full overflow-hidden bg-light_gray flex justify-center items-center flex-col`}
            style={{width: size ?? 80, height: size ?? 80}}
        >
            <img src={src ?? userIcon} alt="user icon" style={{width: src ?? 20, height: src ?? 20}} />
        </div>
    )
}

export default Avatar;
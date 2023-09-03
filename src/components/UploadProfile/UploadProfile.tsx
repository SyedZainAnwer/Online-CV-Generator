import Avatar from "../shared/Avatar";
import UploadButton from "../shared/UploadButton";

interface propTypes {
    className?: string
}

const UploadProfile = ({ className }: propTypes) => {
    return (
        <div className={`${className} w-full border border-1 border-light_gray rounded-md flex items-center flex-col gap-5 pt-6 pb-4`}>
            <Avatar />
            <UploadButton 
                title="Upload"
                // onChange={}
            />
        </div>
    )
}

export default UploadProfile;
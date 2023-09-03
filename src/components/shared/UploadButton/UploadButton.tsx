import { useRef } from "react";
import Button from "../Button";

interface propTypes {
    title: string;
    className?: string;
    onChange?: (e: React.ChangeEventHandler<HTMLInputElement>) => void
}

const UploadButton = ({ title, className, onChange }: propTypes) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if(fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return (
        <div>
            <Button 
                title={title}
                className={`${className || ''}`}
                onClick={handleButtonClick}
            />
            <input 
                type="file" 
                className="opacity-0"
                onChange={(e) => onChange && onChange}
                onClick={(e: any) => (e.target.value = null)}
            />
        </div>
    )
}

export default UploadButton;
import { useState } from "react";
import Avatar from "../shared/Avatar";
import UploadButton from "../shared/UploadButton";

interface propTypes {
  className?: string;
}

const UploadProfile = ({ className }: propTypes) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div
      className={`${className} w-full border border-1 border-light_gray rounded-md flex items-center flex-col gap-5 pt-6 pb-4`}
    >
      <Avatar src={selectedFile} />
      <UploadButton title="Upload" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadProfile;

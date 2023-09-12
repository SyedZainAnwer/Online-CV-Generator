import { useState } from "react";
import Avatar from "../shared/Avatar";
import UploadButton from "../shared/UploadButton";
import { useGlobalContext } from "@/context/AppContext";

interface propTypes {
  className?: string;
}

const UploadProfile = ({ className }: propTypes) => {
  const {personalInfo, setPersonalInfo} = useGlobalContext();
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files[0];
    if (file) {
      setPersonalInfo({...personalInfo,avatar_url:file})
    }
  };

  return (
    <div
      className={`${className} w-full border border-1 border-light_gray rounded-md flex items-center flex-col gap-5 pt-6 pb-4`}
    >
      <Avatar src={personalInfo.avatar_url} />
      <UploadButton title="Upload" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadProfile;

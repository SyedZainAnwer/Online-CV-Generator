import DropDown from "../shared/DropDown/DropDown";
import { educationLevel } from "@/utils/constants/appConstants";
import Input from "../shared/Input";
import IconButton from "../shared/IconButton";

const Education = () => {
    return (
        <div className="px-4 py-5">
            <DropDown title="Education Level" options={educationLevel}/>
            <Input title="Group" className="mt-5"/>
            <Input title="Institution Name" className="mt-5"/>
            <div className="flex flex-1 gap-1">
                <Input inputType="date" title="Start Date" className="mt-5 flex flex-1"/>
                <Input inputType="date" title="End Date" className="mt-5 flex flex-1"/>
            </div>
            <div className="mt-3 w-full flex justify-end">
                <IconButton />
            </div>
        </div>
    )
}

export default Education;
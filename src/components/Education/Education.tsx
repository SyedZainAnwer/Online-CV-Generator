import DropDown from "../shared/DropDown/DropDown";
import { educationLevel } from "@/utils/constants/appConstants";

const Education = () => {
    return (
        <div className="px-4 py-5">
            <DropDown title="Education Level" options={educationLevel}/>
        </div>
    )
}

export default Education;
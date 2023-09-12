import DropDown from "../shared/DropDown/DropDown";
import { educationLevel } from "@/utils/constants/appConstants";
import Input from "../shared/Input";
import IconButton from "../shared/IconButton";
import { EducationDetails } from "@/types/appTypes";
import Seperator from "../shared/Seperator";

interface propTypes {
  addFields?: () => void;
  educationLevelList: EducationDetails[];
  setNextDisable?: React.Dispatch<React.SetStateAction<boolean>>;
  handleEducationDetails?: (e: React.ChangeEvent<HTMLInputElement>, i) => void;
}

const Education = ({ addFields, educationLevelList, handleEducationDetails }: propTypes) => {
  return (
    <div className="py-5">
      {educationLevelList.map((educationListItem, i) => (
        <div key={i}>
          {i >= 1 && <Seperator className="bg-light_gray my-10" />}
          <div className="px-4">
            <DropDown
              name="level"
              title="Education Level"
              options={educationLevel}
              onChange={(e) => handleEducationDetails(e,i)}
            />
            <Input 
              title="Group"
              value={educationListItem.group} 
              className="mt-5" 
              onChange={(e) => handleEducationDetails(e,i)} 
              name="group"
            />
            <Input
              title="Institution Name" 
              value={educationListItem.institutionName} 
              className="mt-5" 
              onChange={(e) => handleEducationDetails(e,i)}
              name="institutionName"
            />
            <div className="flex flex-1 gap-1">
              <Input
                title="Start Date"
                inputType="date"
                value={educationListItem.startDate}
                className="mt-5 flex flex-1"
                onChange={(e) => handleEducationDetails(e,i)}
                name="startDate"
              />
              <Input
                title="End Date"
                inputType="date"
                value={educationListItem.endDate}
                className="mt-5 flex flex-1"
                onChange={(e) => handleEducationDetails(e,i)}
                name="endDate"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="mt-3 w-full flex justify-end px-4">
        <IconButton onClick={addFields} />
      </div>
    </div>
  );
};

export default Education;

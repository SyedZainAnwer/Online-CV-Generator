import DropDown from "../shared/DropDown/DropDown";
import { educationLevel } from "@/utils/constants/appConstants";
import Input from "../shared/Input";
import IconButton from "../shared/IconButton";
import { EducationDetails } from "@/types/appTypes";
import Seperator from "../shared/Seperator";

interface propTypes {
  addFields?: () => void;
  educationLevelList: EducationDetails[];
}

const Education = ({ addFields, educationLevelList }: propTypes) => {
  return (
    <div className="py-5">
      {educationLevelList.map((educationListItem, i) => (
        <div key={i}>
          {i >= 1 && <Seperator className="bg-light_gray my-10" />}
          <div className="px-4">
            <DropDown
              title={educationListItem.level}
              options={educationLevel}
            />
            <Input title={educationListItem.group} className="mt-5" />
            <Input title={educationListItem.institutionName} className="mt-5" />
            <div className="flex flex-1 gap-1">
              <Input
                inputType="date"
                title={educationListItem.startDate}
                className="mt-5 flex flex-1"
              />
              <Input
                inputType="date"
                title={educationListItem.endDate}
                className="mt-5 flex flex-1"
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

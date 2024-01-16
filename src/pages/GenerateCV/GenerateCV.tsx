import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Steps from "@/components/shared/Steps";
import PersonalInfo from "@/components/PersonalInfo";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

import { createCVSteps } from "@/utils/constants/appConstants";
import { EducationDetails, PersonalDetails } from "@/types/appTypes";
import { useGlobalContext } from "@/context/AppContext";

const PERSONALINFO = 1;
const EDUCATION = 2;
const SKILLS = 3;

const GenerateCV = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const { setMessage, personalInfo, setPersonalInfo, setEducation, setSkills } = useGlobalContext();
  const [skillList, setSkillList] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    avatar_url: null,
    name: "",
    role: "",
    email: "",
    number: "",
    location: "",
    linkedIn: "",
    description: "",
  });
  const [educationLevels, setEducationLevels] = useState<EducationDetails[]>([
    {
      level: "",
      group: "",
      institutionName: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const onAddSkills = (skills: string) => {
    if (skills.trim() !== "") {
      setSkillList((prevValues) => [...prevValues, skills.trim()]);
    }
  };

  const onRemoveSkill = (removeSkill: string | number) => {
    setSkillList((prevValues) =>
      prevValues.filter((skill) => skill !== removeSkill)
    );
  };

  const onAddInputFields = () => {
    setEducationLevels([
      ...educationLevels,
      {
        level: "",
        group: "",
        institutionName: "",
        endDate: "",
        startDate: "",
      },
    ]);
  };

  const handlePersonalInfo = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleEducationDetails = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const { name, value } = e.target;
    setEducationLevels((prevLevels) =>
      prevLevels.map((level, index) =>
        index === i ? { ...level, [name]: value } : level
      )
    );
  };

const isFormValid = () => {
  return !(
    personalDetails.description.trim() !== "" &&
    personalDetails.email.trim() !== "" &&
    personalDetails.linkedIn.trim() !== "" &&
    personalDetails.location.trim() !== "" &&
    personalDetails.role.trim() !== "" &&
    personalDetails.name.trim() !== "" &&
    personalDetails.number.trim() !== ""
  );
};

  const handleNextStep = () => {
    switch (currentStep) {
      case PERSONALINFO:
        setPersonalInfo({ avatar_url: personalDetails.avatar_url, ...personalDetails });
        break;
      case EDUCATION:
        setEducation(educationLevels);
        break;
      case SKILLS:
        setSkills(skillList);
        break;
      default:
        break;
    }

    setCurrentStep(currentStep + 1);
    setMessage({ show: true, text: "Saved", type: "success" });

    if (currentStep === SKILLS) {
      navigate('/templates');
    }
  };

  const onPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const forms: { [key: number]: JSX.Element } = {
    1: (
      <PersonalInfo
        personalDetails={personalDetails}
        handlePersonalInfo={handlePersonalInfo}
        // setNextDisable={setIsDisabled}
      />
    ),
    2: (
      <Education
        addFields={onAddInputFields}
        educationLevelList={educationLevels}
        handleEducationDetails={handleEducationDetails}
        // setNextDisable={setIsDisabled}
      />
    ),
    3: (
      <Skills
        addSkills={onAddSkills}
        skillsList={skillList}
        removeSkill={onRemoveSkill}
      />
    ),
  };

  return (
    <div className="relative">
      <Steps
        title={createCVSteps[currentStep]}
        activeStep={currentStep}
        showNext={true}
        hidePrev={currentStep === 1 ? true : false}
        onNext={handleNextStep}
        onPrev={onPreviousStep}
        disableNext={isFormValid()}
      />
      {forms[currentStep || 1]}
    </div>
  );
};

export default GenerateCV;




// const isFormValid = () => {
//   return !(
//     personalDetails.description.trim() !== "" &&
//     personalDetails.email.trim() !== "" &&
//     personalDetails.linkedIn.trim() !== "" &&
//     personalDetails.location.trim() !== "" &&
//     personalDetails.role.trim() !== "" &&
//     personalDetails.name.trim() !== "" &&
//     personalDetails.number.trim() !== ""
//   );
// };
import { useState } from "react";
import Steps from "@/components/shared/Steps";
import PersonalInfo from "@/components/PersonalInfo";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import { createCVSteps } from "@/utils/constants/appConstants";
import { EducationDetails, PersonalDetails } from "@/types/appTypes";
import { useGlobalContext } from "@/context/AppContext";

const GenerateCV = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { personalInfo, setPersonalInfo, setMessage, setEducation } =
    useGlobalContext();
  const [skillList, setSKillList] = useState<[] | Array<string>>([]);
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    avatar_url: "",
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
    if (!skills) return;
    setSKillList((prevValues) => [...prevValues, skills]);
  };

  const onRemoveSkill = (removeSkill: string | number) => {
    setSKillList((prevValues) =>
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
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
    }))
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setMessage({ text: "new", show: true, type: "danger" });
  };

  const onPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const forms: { [key: number]: JSX.Element } = {
    1: (
      <PersonalInfo
        personalDetails={personalDetails}
        handlePersonalInfo={handlePersonalInfo}
      />
    ),
    2: (
      <Education
        addFields={onAddInputFields}
        educationLevelList={educationLevels}
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
      />
      {forms[currentStep || 1]}
    </div>
  );
};

export default GenerateCV;

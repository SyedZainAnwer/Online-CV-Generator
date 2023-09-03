import { useState } from 'react';
import Steps from "@/components/shared/Steps";
import PersonalInfo from '@/components/PersonalInfo';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import { createCVSteps } from '@/utils/constants/appConstants';

const GenerateCV = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [skillList, setSKillList] = useState<[] | Array<string>>([]);

    const onAddSkills = (skills: string) => {
        if(!skills) return
        setSKillList((prevValues) => [...prevValues, skills])
    }

    const onRemoveSkill = (removeSkill: string | number) => {
        setSKillList((prevValues) => prevValues.filter((skill) => skill !== removeSkill))
    }

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const onPreviousStep = () => {
        setCurrentStep(currentStep - 1);
    }

    const forms: {[ key: number ]: JSX.Element} = {
        1: <PersonalInfo />,
        2: <Education />,
        3: <Skills 
            addSkills={onAddSkills}
            skillsList={skillList}
            removeSkill={onRemoveSkill}
            />
    }

    return(
        <div className='relative'>
            <Steps
                title={createCVSteps[currentStep]}
                activeStep={currentStep}
                showNext={currentStep === 3 ? true : false}
                hidePrev={currentStep === 1 ? true : false}
                onSave={handleNextStep}
                onPrev={onPreviousStep}
            />
            {forms[currentStep || 1]}
        </div>
    )
}

export default GenerateCV;
import { useState } from 'react';
import Steps from "@/components/shared/Steps";
// import PersonalInfo from '@/components/PersonalInfo';
import Education from '@/components/Education';

const GenerateCV = () => {
    const [currentStep, setCurrentStep] = useState(1);
    return(
        <div className='relative'>
            <Steps
                title="Education"
                activeStep={currentStep}
            />

            {/* <PersonalInfo /> */}
            <Education />
        </div>
    )
}

export default GenerateCV;
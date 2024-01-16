import { EducationDetails, IMessage, PersonalDetails } from "./appTypes"
import { Dispatch, SetStateAction } from 'react'

export interface ContextProps {
    personalInfo: PersonalDetails;
    education: EducationDetails;
    skills: string[] | [];
    message: IMessage | Record<string, unknown>;
    setPersonalInfo: Dispatch<SetStateAction<PersonalDetails>>;
    setEducation: Dispatch<SetStateAction<EducationDetails[]>>;
    setSkills: Dispatch<SetStateAction<string[]>>;
    setMessage: Dispatch<SetStateAction<IMessage>>;
}

export type State = {
    personalInfo: PersonalDetails;
    education: EducationDetails;
    skills: string[];
    message: IMessage
}
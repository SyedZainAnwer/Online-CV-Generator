import { State } from "@/types/Context";
import { Action } from "./Action";

export const contextValue = {
    personalInfo: {},
    setPersonalInfo: () => {},
    education: {},
    setEducation: () => {},
    skills: [],
    setSkills: () => {},
    message: {},
    setMessage: () => {},
};

export const initialState: State = {
    personalInfo: {},
    education: {},
    skills: [],
    message: { show: false, text: '' }
}

export const reducer = (state: State, action: Action): State => {
    switch(action.type){
        case 'PERSONAL_INFO':
            return { ...state, personalInfo: action.payload }
        case 'EDUCATION' :
            return { ...state, education: action.payload }
        case 'SKILLS' :
            return { ...state, skills: action.payload }
        case 'SHOW_MESSAGE' :
            return { ...state, message: action.payload }
        default:
            return state
    }
}
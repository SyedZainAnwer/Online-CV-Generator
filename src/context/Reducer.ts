import { ContextProps, State } from "@/types/Context";
import { Action } from "./Action";

export const contextValue: ContextProps = {
    personalInfo: {
        avatar_url: null,
        name: '',
        role: '',
        email: '',
        description: '',
        linkedIn: '',
        location: '',
        number: ''
    },
    setPersonalInfo: () => {},
    education: {endDate: '', group: '', institutionName: '', level: '', startDate: ''},
    setEducation: () => {},
    skills: [],
    setSkills: () => {},
    message: {
      // ... initialize message if it's an object
    },
    setMessage: () => {},
};

export const initialState: State = {
    personalInfo: {
        avatar_url: null,
        description: '',
        email: '',
        linkedIn: '',
        location: '',
        name: '',
        number: '',
        role: ''
    },
    education: {
        endDate: '',
        group: '',
        institutionName: '',
        level: '',
        startDate: ''
    },
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
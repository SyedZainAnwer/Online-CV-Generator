import { Dispatch, SetStateAction } from 'react';
import { ContextProps, State } from "@/types/Context";
import { EducationDetails, IMessage, PersonalDetails } from "@/types/appTypes";

export type Action =
  | { type: "PERSONAL_INFO"; payload: PersonalDetails }
  | { type: "EDUCATION"; payload: EducationDetails }
  | { type: "SKILLS"; payload: string[] }
  | { type: "SHOW_MESSAGE", payload: IMessage }

  export const setPersonalInfo = (
    state: State,
    dispatch: Dispatch<Action>,
    data: SetStateAction<PersonalDetails>
  ) => {
    dispatch({ type: 'PERSONAL_INFO', payload: { ...state.personalInfo, ...data } });
  };
  
  export const setEducation = (
    state: State,
    dispatch: Dispatch<Action>,
    data: SetStateAction<EducationDetails[]>
  ) => {
    dispatch({ type: 'EDUCATION', payload: { ...state.education, ...data } });
  };
  
  export const setSkills = (
    state: State,
    dispatch: Dispatch<Action>,
    data: string[] | SetStateAction<string[]>
  ) => {
    if (typeof data === 'function') {
      dispatch({ type: 'SKILLS', payload: data(state.skills) });
    } else {
      dispatch({ type: 'SKILLS', payload: data });
    }
  };

  export const setMessage = (
    state: State,
    dispatch: Dispatch<Action>,
    data: IMessage | SetStateAction<IMessage>
  ) => {
    if (typeof data === 'function') {
      dispatch({ type: 'SHOW_MESSAGE', payload: data(state.message) });
    } else {
      dispatch({ type: 'SHOW_MESSAGE', payload: data });
      setTimeout(() => {
        dispatch({ type: 'SHOW_MESSAGE', payload: { show: false, text: '' } });
      }, 2000);
    }
  }; 
  
  export const getContextValue = (state: State, dispatch: Dispatch<Action>): ContextProps => {
    return {
      personalInfo: state.personalInfo,
      setPersonalInfo: (data) => setPersonalInfo(state, dispatch, data),
      education: state.education,
      setEducation: (data) => setEducation(state, dispatch, data),
      skills: state.skills,
      setSkills: (data) => setSkills(state, dispatch, data),
      message: state.message,
      setMessage: (data) => setMessage(state, dispatch, data)
    };
  };
  
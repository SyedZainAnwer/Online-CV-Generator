import { Dispatch } from 'react';
import { State } from "@/types/Context";
import { EducationDetails, IMessage, PersonalDetails } from "@/types/appTypes";

export type Action =
  | { type: "PERSONAL_INFO"; payload: PersonalDetails }
  | { type: "EDUCATION"; payload: EducationDetails }
  | { type: "SKILLS"; payload: string[] }
  | { type: "SHOW_MESSAGE", payload: IMessage }

export const setPersonalInfo = (
  state: State,
  dispatch: Dispatch<Action>,
  data: PersonalDetails
) => {
  dispatch({ type: 'PERSONAL_INFO', payload: data })
}

export const setEducation = (
  state: State,
  dispatch: Dispatch<Action>,
  data: EducationDetails
) => {
  dispatch({ type: 'EDUCATION', payload: data })
}

export const setSkills = (
  state: State,
  dispatch: Dispatch<Action>,
  data: string[]
) => {
  dispatch({ type: 'SKILLS', payload: data })
}

export const setMessage = (
  state: State,
  dispatch: Dispatch<Action>,
  data: IMessage
) => {
  dispatch({ type: 'SHOW_MESSAGE', payload: data });
  setTimeout(() => {
    dispatch({ type: 'SHOW_MESSAGE', payload: {show: false, text: ''} })
  }, 2000)
}

export const getContextValue = (state: State, dispatch: Dispatch<Action>) => {
  return {
    personalInfo: state.personalInfo,
    setPersonalInfo: (data: any) => setPersonalInfo(state, dispatch, data),
    education: state.education,
    setEducation: (data: any) => setEducation(state, dispatch, data),
    skills: state.skills,
    setSkills: (data: any) => setSkills(state, dispatch, data),
    message: state.message,
    setMessage: (data: any) => setMessage(state, dispatch, data)
  }
}
import { ICreateCV } from "@/types/appTypes";

export const stepList = [1 ,2 ,3];

export const educationLevel = [
    {
        value: "Matrticulation",
        label: "Matrticulation"
    },
    {
        value: "Intermediate",
        label: "Intermediate"
    },
    {
        value: "Bachelors",
        label: "Bachelors"
    },
    {
        value: "Masters",
        label: "Masters"
    },
    {
        value: "PhD",
        label: "PhD"
    }
];

export interface PersonalDetails {
    name: string;
    role: string;
    email: string;
    number: string;
    location: string;
    linkedIn: string;
    description: string
}

export const createCVSteps: {[key: number]: ICreateCV} = {
    1: 'Personal Info',
    2: 'Education',
    3: 'Skills'
}
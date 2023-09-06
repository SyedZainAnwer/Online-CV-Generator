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

export const createCVSteps: {[key: number]: ICreateCV} = {
    1: 'Personal',
    2: 'Education',
    3: 'Skills'
}
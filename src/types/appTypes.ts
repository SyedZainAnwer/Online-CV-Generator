export type BtnVariants = 'default' | 'outline' | 'dark';

export type ICreateCV = 'Personal' | 'Education' | 'Skills'

export interface PersonalDetails {
    avatar_url: File;
    name: string;
    role: string;
    email: string;
    number: string;
    location: string;
    linkedIn: string;
    description: string;
}

export interface EducationDetails {
    level: string;
    group: string;
    institutionName: string;
    startDate: string;
    endDate: string;
}

export interface IMessage {
    text: string;
    show: boolean;
    type?: 'primary' | 'success' | 'danger'
}
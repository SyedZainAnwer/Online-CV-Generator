import { useState } from 'react'
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import { PersonalDetails } from '@/utils/constants/appConstants';

interface propTypes {
  className?: string;
}

const PersonalInfo = ({ className }: propTypes) => {
    const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
        name: '',
        role: '',
        email: '',
        number: '',
        location: '',
        linkedIn: '',
        description: ''
    });

    const handlePersonalInfo = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPersonalDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }))
    }
  return (
    <div className={`${className} px-4 py-5`}>
      <Input 
        title="Name" 
        value={personalDetails.name}
        onChange={handlePersonalInfo}
        name='name'
    />
      <Input 
        title="Role" 
        className="mt-5" 
        value={personalDetails.role}
        onChange={handlePersonalInfo}
        name='role'
    />
      <Input 
        title="Email" 
        inputType="email" 
        className="mt-5"
        value={personalDetails.email}
        onChange={handlePersonalInfo}
        name='email'
    />
      <Input 
        title="Number" 
        inputType="tel" 
        className="mt-5"
        value={personalDetails.number}
        onChange={handlePersonalInfo}
        name='number' 
    />
      <Input 
        title="Location" 
        className="mt-5"
        value={personalDetails.location}
        onChange={handlePersonalInfo}
        name='location' 
    />
      <Input 
        title="LinkedIn" 
        className="mt-5 mb-5" 
        value={personalDetails.linkedIn}
        onChange={handlePersonalInfo}
        name='linkedIn'
    />
      <TextArea
        name="description"
        label="Describe Yourself"
        placeholder="Describe yourself in 100 words or more..."
        hasMaxLenght={true}
        onChange={handlePersonalInfo}
        value={personalDetails.description}
      />
    </div>
  );
};

export default PersonalInfo;

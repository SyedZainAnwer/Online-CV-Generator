import Tag from "@/components/shared/Tag";
import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button'
import { useState } from "react";

interface propTypes {
    skillsList?: string[] | [];
    addSkills?: (value: string) => void;
    removeSkill?: (id: string | number) => void;
}

const Skills = ({ skillsList, addSkills, removeSkill }:propTypes) => {

  const [ skills, setSkills ] = useState('');

  const handleAddSkills = (skills: string) => {
    addSkills(skills);
    setSkills('');
  }

  return (
    <div className="px-4 py-5">
        {/* <h3 className="font-bold text-black text-lg mb-1">Display Your Skils Here</h3> */}
        <Input 
            actions={<Button 
                        title="Add" 
                        variant="outline" 
                        parentClassName="h-full"
                        className="w-full h-full"
                        onClick={() => handleAddSkills(skills)} 
                    />}
            inputBorder={true}
            onChange={(e) => setSkills(e.target.value)}
            value={skills}
        />
      <div className="flex flex-wrap gap-3 mt-7">
        {skillsList.length > 0 && skillsList.map((skill, index) => (
          <Tag 
            title={skill} 
            className="mt-5" 
            key={index} 
            onRemove={() => removeSkill(skill)}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

import { useGlobalContext } from "@/context/AppContext";
import userIcon from "@/assets/icons/profile.svg";

const BasicTemplate = () => {

  const {personalInfo, education, skills} = useGlobalContext();
  console.log(personalInfo, "templates")

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center">
        <img 
          className="w-16 h-16 rounded-full mr-4" 
          src={personalInfo.avatar_url ? URL.createObjectURL(personalInfo.avatar_url) : userIcon} 
          alt="Avatar" 
        />
        <div>
          <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
          <p className="text-gray-600">{personalInfo.role}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Contact</h2>
        <ul className="list-disc pl-4 mt-2">
          <li>Email: {personalInfo.email}</li>
          <li>Phone: {personalInfo.number}</li>
          <li>Location: {personalInfo.location}</li>
          <li>LinkedIn: <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer">{personalInfo.linkedIn}</a></li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">About Me</h2>
        <p className="mt-2">{personalInfo.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Skills</h2>
        <ul className="list-disc pl-4 mt-2">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BasicTemplate;

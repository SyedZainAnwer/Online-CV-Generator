import Seperator from "@/components/shared/Seperator";
import { useGlobalContext } from "@/context/AppContext";

const BasicTemplate = () => {
    const {personalInfo, education} = useGlobalContext();
    console.log(education)
  return (
    <div>
        {/* Personal Info Section Start */}
      <div className="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-700">
          {personalInfo.name}
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="col-span-1">
            <img
              src={URL.createObjectURL(personalInfo.avatar_url)}
              alt="Profile"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <div className="col-span-1">
            <p className="text-xl font-semibold">{personalInfo.name}</p>
            <p className="text-gray-600">{personalInfo.role}</p>
            <p className="text-gray-600">{personalInfo.email}</p>
            <p className="text-gray-600">{personalInfo.number}</p>
            <p className="text-gray-600">{personalInfo.location}</p>
            <p className="text-indigo-700">
              LinkedIn:{personalInfo.linkedIn}
                {/* <a href="https://www.linkedin.com/in/your-linkedin-profile/">
                    Your LinkedIn
                </a> */}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-indigo-700">About Me</h3>
          <p className="mt-4 text-gray-600">
                {personalInfo.description}
          </p>
        </div>
      </div>
      {/* Personal Info Section End */}

        <Seperator className="my-10"/>

      {/* Education Section Start */}
      <div>
      <h2 className="text-3xl font-bold text-indigo-700">Education</h2>
      <div className="mt-6">
        <p className="text-xl font-semibold">{education.level}</p>
        <p className="text-gray-600">{education.group}</p>
        <p className="text-gray-600">{education.institutionName}</p>
        <p className="text-gray-600">{education.startDate}</p>
      </div>
    </div>
    {/* Education Section End */}
    </div>
  );
};

export default BasicTemplate;

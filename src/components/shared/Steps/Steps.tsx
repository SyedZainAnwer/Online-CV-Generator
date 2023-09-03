import { createCVSteps, stepList } from "@/utils/constants/appConstants";
import backIcon from "@/assets/icons/arrow-right.svg";
import Button from "../Button";

interface propTypes {
  className?: string;
  title: string;
  activeStep?: number;
  hidePrev?: boolean;
  showNext?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  onSave?: () => void;
}

const Steps = ({
  className,
  title,
  activeStep = 1,
  onPrev,
  hidePrev,
  showNext,
  onNext,
  onSave,
}: propTypes) => {
  return (
    <div className="sticky bg-white pt-5 md:mt-[-20px] mt[-50px]- md:top-0 top-[0px] pl-2 pr-4">
      <div className={`${className ?? ""} flex justify-between items-center`}>
        <img
          src={backIcon}
          alt="back"
          onClick={onPrev ? onPrev : undefined}
          role="button"
          className={`${hidePrev ? "opacity-0" : "opacity-1"}`}
        />
        {showNext ? (
          <Button title="Next" variant="dark" onClick={onNext} />
        ) : (
          <Button title="Save" variant="default" onClick={onSave} />
        )}
      </div>

      <div className="flex gap-[3.1rem] mt-4 w-full">
        {Object.keys(createCVSteps).map((key) => (
          <h3 key={key} className="text-black text-center font-semibold mt-2">
            {createCVSteps[Number(key)]}
          </h3>
        ))}
      </div>

      <div className="flex gap-1 mt-2">
        {stepList.map((step) => (
          <div
            key={step}
            className={`w-full h-1 ${
              step > activeStep ? "bg-light_gray" : "bg-black"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Steps;

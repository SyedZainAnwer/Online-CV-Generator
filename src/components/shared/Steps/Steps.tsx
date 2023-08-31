import { stepList } from "@/utils/constants/appConstants"

interface propTypes {
    className?: string
    title: string
    activeStep?: number;
}

const Steps = ({ className, title, activeStep = 1 }: propTypes) => {
    return (
        <div className="sticky bg-white w-full px-2">
            <div className={`${className ?? ''} flex justify-between items-center`}>
                <h3 className="text-black font-semibold">{title}</h3>
            </div>
            <div className="flex gap-1 mt-2">
                {stepList.map((step) => (
                    <div
                        key={step}
                        className={`w-full h-1 ${step > activeStep ? 'bg-light_gray' : 'bg-black'}`}
                    >

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Steps;
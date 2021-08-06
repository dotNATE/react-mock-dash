import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import { useEffect, useState, Children } from "react";

type WizardMainProps = {
  currentStep: number;
  onSubmit: any;
  children: JSX.Element | JSX.Element[];
  stepSetter: any;
  isSubmitting?: boolean;
};

const WizardMain = ({
  currentStep,
  onSubmit,
  children,
  stepSetter,
  isSubmitting,
}: WizardMainProps): JSX.Element => {
  const [maxStep, setMaxStep] = useState(1);

  let bgClass = "w-full bg-cover bg-top bg-model-wiz-main";

  useEffect(() => {
    const countChildren = Children.toArray(children).length;
    setMaxStep(countChildren);
  }, [children]);

  const incrementCurrentStep = (): void => {
    if (currentStep < maxStep) stepSetter(currentStep + 1);
  };

  const decrementCurrentStep = (): void => {
    if (currentStep > 1) stepSetter(currentStep - 1);
  };

  return (
    <div
      className={`w-full ${bgClass} selection:bg-pink-600 selection:text-white relative`}
    >
      <div
        className="absolute h-2 bg-pink-600 bg-opacity-60 transition-all"
        style={{
          width: (100 / maxStep) * currentStep + "%",
        }}
      ></div>
      <form
        onSubmit={onSubmit}
        className={`h-full bg-gray-200 bg-opacity-40 backdrop-filter focus-within:backdrop-blur-sm focus-within:backdrop-grayscale transition duration-700 relative`}
      >
        {children}
        <div className="absolute right-8 bottom-8">
          <div className="flex">
            <div
              onClick={decrementCurrentStep}
              className="flex justify-center items-center bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white font-medium shadow-md h-10 w-10 cursor-pointer rounded-l-md"
            >
              <ArrowUpIcon className="h-6 w-6" />
            </div>
            <div className="flex justify-center items-center bg-white text-pink-600 font-medium shadow-md h-10 w-10 select-none">
              {currentStep}
            </div>
            <div
              onClick={incrementCurrentStep}
              className="flex justify-center items-center bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white font-medium shadow-md h-10 w-10 cursor-pointer rounded-r-md"
            >
              <ArrowDownIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WizardMain;

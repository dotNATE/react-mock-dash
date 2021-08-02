import { useEffect, useState, Children } from "react";

type WizardMainProps = {
  currentStep: number;
  onSubmit: any;
  children: JSX.Element | JSX.Element[];
  stepSetter: any;
};

const WizardMain = ({
  currentStep,
  onSubmit,
  children,
  stepSetter,
}: WizardMainProps): JSX.Element => {
  const [maxStep, setMaxStep] = useState(1);

  let bgClass = "w-full bg-cover bg-top ";

  if (currentStep === 1) {
    bgClass += "bg-model-wiz-1";
  }
  if (currentStep === 2) {
    bgClass += "bg-model-wiz-2";
  }
  if (currentStep === 3) {
    bgClass += "bg-model-wiz-3";
  }

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
    <div className={bgClass}>
      <form
        onSubmit={onSubmit}
        className="h-full bg-black bg-opacity-40 backdrop-filter focus-within:backdrop-blur-sm focus-within:backdrop-grayscale transition duration-700 relative"
      >
        {children}
        <div className="flex justify-around items-center absolute bottom-10 w-full">
          <div
            onClick={decrementCurrentStep}
            className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 w-20 rounded-md text-white font-medium shadow-md h-10 cursor-pointer"
          >
            Back
          </div>
          <input
            type="submit"
            className="h-14 w-28 rounded-md shadow-md cursor-pointer font-medium bg-white hover:bg-gray-200 active:bg-gray-300"
            value={`${currentStep} / ${maxStep}`}
          />
          <div
            onClick={incrementCurrentStep}
            className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 w-20 rounded-md text-white font-medium shadow-md h-10 cursor-pointer"
          >
            Next
          </div>
        </div>
      </form>
    </div>
  );
};

export default WizardMain;

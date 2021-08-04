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
      className={`w-full ${bgClass} selection:bg-pink-600 selection:text-white`}
    >
      <form
        onSubmit={onSubmit}
        className={`h-full bg-gray-200 bg-opacity-40 backdrop-filter focus-within:backdrop-blur-sm focus-within:backdrop-grayscale transition duration-700 relative`}
      >
        {children}
        <div className="flex justify-around items-center absolute bottom-10 w-full">
          <div
            onClick={decrementCurrentStep}
            className="flex justify-center items-center bg-pink-600 hover:bg-pink-700 active:bg-pink-800 w-20 rounded-md text-white font-medium shadow-md h-10 cursor-pointer"
          >
            Back
          </div>
          <input
            type="submit"
            className="h-14 w-28 rounded-md shadow-md cursor-pointer font-medium bg-white hover:bg-gray-200 active:bg-gray-300"
            value={`${currentStep} / ${maxStep}`}
            disabled={isSubmitting}
          />
          <div
            onClick={incrementCurrentStep}
            className="flex justify-center items-center bg-pink-600 hover:bg-pink-700 active:bg-pink-800 w-20 rounded-md text-white font-medium shadow-md h-10 cursor-pointer"
          >
            Next
          </div>
        </div>
      </form>
    </div>
  );
};

export default WizardMain;

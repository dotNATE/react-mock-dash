import { ChangeEvent, FormEvent, useState } from "react";

import DashboardLayout from "../../Atoms/DashboardLayout";

import FormMain from "../../Organisms/FormMain";
import ModelDealWizard from "../../Organisms/FormMain/ModelDealWizard";
import ModelDealStep1 from "../../Organisms/FormMain/ModelDealStep1";
import ModelDealStep2 from "../../Organisms/FormMain/ModelDealStep2";
import ModelDealStep3 from "../../Organisms/FormMain/ModelDealStep3";
import { useEffect } from "react";

const initialUserInputState: { [index: string]: string } = {
  company: "",
};

const initialMetricInputState: { [index: string]: number } = {
  purchasePrice: 0,
  acquisitionCosts: 0,
  buildCost: 0,
  disposalCosts: 0,
  existingInternalArea: 0,
  exitStrategy: 0,
  gDVCommercial: 0,
  gDVResidential: 0,
  localAuthorityCosts: 0,
  mobAndBuildPeriod: 0,
  professionalFees: 0,
  residentialGrossInternalArea: 0,
  residentialUnits: 0,
  salePeriod: 0,
};

const errors: string[] = [];

const ModelDeal = (): JSX.Element => {
  const [userInput, setUserInput] = useState(initialUserInputState);
  const [userMetricInput, setUserMetricInput] = useState(
    initialMetricInputState
  );
  const [userInputErrors, setUserInputErrors] = useState(errors);
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStep, setMaxStep] = useState(currentStep + 1);
  const [submitButtonValue, setSubmitButtonValue] = useState("");

  useEffect(() => {
    setSubmitButtonValue(`${currentStep}/${maxStep}`);
  }, [currentStep, maxStep]);

  const handleUserInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleMetricInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserMetricInput({
      ...userMetricInput,
      [e.target.name]: +e.target.value,
    });
  };

  const handleSumbit = (
    e: FormEvent<HTMLFormElement | HTMLInputElement>
  ): void => {
    if (userInput.company.length < 0) {
      setUserInputErrors([...userInputErrors, "company"]);
    }
    e.preventDefault();
  };

  const handleMouseEnter = (e: any): void => {
    setSubmitButtonValue("Calculate");
  };

  const handleMouseLeave = (): void => {
    setSubmitButtonValue(`${currentStep}/${maxStep}`);
  };

  const incrementCurrentStep = (): void => {
    if (currentStep < maxStep) setCurrentStep(currentStep + 1);
  };

  const decrementCurrentStep = (): void => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <DashboardLayout>
      <FormMain currentStep={currentStep}>
        <section className="h-screen w-full grid grid-cols-1 grid-rows-1 relative">
          <ModelDealWizard submitHandler={handleSumbit} setMaxStep={setMaxStep}>
            <ModelDealStep1
              formState={userInput}
              errors={userInputErrors}
              changeHandler={handleUserInputChange}
              currentStep={currentStep}
            />
            <ModelDealStep2
              formState={userMetricInput}
              errors={userInputErrors}
              changeHandler={handleMetricInputChange}
              currentStep={currentStep}
            />
            <ModelDealStep3
              formState={userMetricInput}
              errors={userInputErrors}
              changeHandler={handleMetricInputChange}
              currentStep={currentStep}
            />
            <div className="flex justify-around items-center absolute bottom-10 w-full">
              <div
                onClick={decrementCurrentStep}
                className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 w-20 rounded-md text-white font-medium shadow-md h-10 cursor-pointer"
              >
                Back
              </div>
              <input
                type="submit"
                value={submitButtonValue}
                onSubmit={handleSumbit}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="h-14 w-28 rounded-md shadow-md cursor-pointer font-medium bg-white hover:bg-gray-200 active:bg-gray-300"
              />
              <div
                onClick={incrementCurrentStep}
                className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 w-20 rounded-md text-white font-medium shadow-md h-10 cursor-pointer"
              >
                Next
              </div>
            </div>
          </ModelDealWizard>
        </section>
      </FormMain>
    </DashboardLayout>
  );
};

export default ModelDeal;

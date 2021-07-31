import DashboardLayout from "../../Atoms/DashboardLayout";
import FormMain from "../../Organisms/FormMain";
import Nav from "../../Organisms/Nav";
import { ChangeEvent, FormEvent, useState } from "react";
import CompanyNameInput from "../../Atoms/FormElements/CompanyNameInput";
import ModelDealStep2 from "../../Organisms/FormMain/ModelDealStep2";

const ModelDeal = (): JSX.Element => {
  const [userInput, setUserInput] = useState({
    company: "",
    purchasePrice: 0,
    acquisitionCosts: 0,
    buildCost: 0,
    professionalFees: 0,
    localAuthorityCosts: 0,
    disposalCosts: 0,
    gDVResidential: 0,
    gDVCommercial: 0,
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const updatedUserInput = {
      ...userInput,
      [e.target.name]: e.target.value,
    };
    setUserInput(updatedUserInput);
  };

  const handleSumbit = (
    e: FormEvent<HTMLFormElement | HTMLInputElement>
  ): void => {
    e.preventDefault();
    console.log(userInput);
  };

  const incrementCurrentStep = (): void => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const decrementCurrentStep = (): void => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <DashboardLayout>
      <Nav />
      <FormMain currentStep={currentStep}>
        <section className="h-screen w-full grid grid-cols-1 grid-rows-1 relative">
          <form
            action="/"
            onSubmit={handleSumbit}
            className="grid grid-cols-7 grid-rows-6 items-center backdrop-filter focus-within:backdrop-blur-sm focus-within:backdrop-grayscale transition duration-700"
          >
            <CompanyNameInput
              formState={userInput}
              changeHandler={handleChange}
              currentStep={currentStep}
            />
            <ModelDealStep2
              formState={userInput}
              changeHandler={handleChange}
              currentStep={currentStep}
            />
          </form>
          <div className="flex justify-around items-center absolute bottom-10 w-full">
            <button
              onClick={decrementCurrentStep}
              className="bg-blue-600 w-20 rounded-md text-white font-medium shadow-md h-10 cursor-pointer"
            >
              Back
            </button>
            <input
              type="submit"
              value="Submit"
              onSubmit={handleSumbit}
              className="h-14 w-28 rounded-md shadow-md cursor-pointer font-medium"
            />
            <button
              onClick={incrementCurrentStep}
              className="bg-blue-600 w-20 rounded-md text-white font-medium shadow-md h-10 cursor-pointer"
            >
              Next
            </button>
          </div>
        </section>
      </FormMain>
    </DashboardLayout>
  );
};

export default ModelDeal;

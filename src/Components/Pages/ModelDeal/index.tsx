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
        <section className="h-screen w-full p-4 grid grid-cols-1 grid-rows-1 backdrop-filter backdrop-blur-sm focus-within:backdrop-blur transition duration-500">
          <form
            action="/"
            onSubmit={handleSumbit}
            className="grid grid-cols-5 grid-rows-4 items-center "
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
            <div className="col-start-3 row-start-4">
              <button onClick={decrementCurrentStep}>back</button>
              <input type="submit" value="Submit" onSubmit={handleSumbit} />
              <button onClick={incrementCurrentStep}>next</button>
            </div>
          </form>
        </section>
      </FormMain>
    </DashboardLayout>
  );
};

export default ModelDeal;

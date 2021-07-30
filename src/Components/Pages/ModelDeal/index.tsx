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
    let temp = {
      ...userInput,
      [e.target.name]: e.target.value,
    };
    setUserInput(temp);
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>): void => {
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
      <FormMain>
        <form action="/" onSubmit={handleSumbit}>
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
          <input type="submit" value="Submit" />
        </form>
        <button onClick={decrementCurrentStep}>back</button>
        <button onClick={incrementCurrentStep}>next</button>
      </FormMain>
    </DashboardLayout>
  );
};

export default ModelDeal;

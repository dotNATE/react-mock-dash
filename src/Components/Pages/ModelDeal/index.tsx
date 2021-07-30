import DashboardLayout from "../../Atoms/DashboardLayout";
import FormMain from "../../Organisms/FormMain";
import Nav from "../../Organisms/Nav";
import { ChangeEvent, FormEvent, useState } from "react";
import CompanyNameInput from "../../Atoms/FormElements/CompanyNameInput";

const ModelDeal = (): JSX.Element => {
  const [userInput, setUserInput] = useState({
    company: "",
    test: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleStep1Change = (e: ChangeEvent<HTMLInputElement>): void => {
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
    setCurrentStep(currentStep + 1);
  };

  const decrementCurrentStep = (): void => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <DashboardLayout>
      <Nav />
      <FormMain>
        <form action="/" onSubmit={handleSumbit}>
          <CompanyNameInput
            formState={userInput}
            changeHandler={handleStep1Change}
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

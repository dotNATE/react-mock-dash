type userInput = {
  company: string;
  purchasePrice: number;
};

type CompanyNameInputProps = {
  formState: userInput;
  changeHandler: any;
  currentStep: number;
};

const CompanyNameInput = ({
  formState,
  changeHandler,
  currentStep,
}: CompanyNameInputProps): any => {
  if (currentStep !== 1) {
    return null;
  }

  return (
    <label htmlFor="company">
      Company Name
      <input
        type="text"
        id="company"
        name="company"
        onChange={changeHandler}
        value={formState.company}
      />
    </label>
  );
};

export default CompanyNameInput;

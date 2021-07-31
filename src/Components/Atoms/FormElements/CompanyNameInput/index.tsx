type userInput = {
  company: string;
  purchasePrice: number;
  acquisitionCosts: number;
  buildCost: number;
  professionalFees: number;
  localAuthorityCosts: number;
  disposalCosts: number;
  gDVResidential: number;
  gDVCommercial: number;
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
    <label
      htmlFor="company"
      className="col-start-2 col-span-5 row-start-3 row-span-2 h-24 grid grid-col-3 grid-row-3 text-gray-50 opacity-80 font-medium"
    >
      Company Name
      <input
        type="text"
        id="company"
        name="company"
        onChange={changeHandler}
        value={formState.company}
        className="bg-transparent border-b-4 border-gray-50 p-4 rounded-md"
      />
    </label>
  );
};

export default CompanyNameInput;

import Step2NumberInput from "./Step2NumberInput";

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

const ModelDealStep2 = ({
  formState,
  changeHandler,
  currentStep,
}: CompanyNameInputProps): any => {
  if (currentStep !== 2) {
    return null;
  }
  return (
    <div className="col-start-1 col-span-7 row-start-2 row-span-4 h-full grid grid-cols-6 grid-rows-4 py-4">
      <div className="flex flex-col justify-between col-start-2 col-span-2 row-span-4">
        <Step2NumberInput
          name="purchasePrice"
          label="Purchase Price"
          changeHandler={changeHandler}
          formState={formState}
        />

        <Step2NumberInput
          name="acquisitionCosts"
          label="Acquisition Costs"
          changeHandler={changeHandler}
          formState={formState}
        />
        <Step2NumberInput
          name="buildCost"
          label="Build Cost"
          changeHandler={changeHandler}
          formState={formState}
        />

        <Step2NumberInput
          name="professionalFees"
          label="Professional Fees"
          changeHandler={changeHandler}
          formState={formState}
        />
      </div>
      <div className="flex flex-col justify-between col-start-4 col-span-2 row-span-4">
        <Step2NumberInput
          name="localAuthorityCosts"
          label="Local Authority Costs"
          changeHandler={changeHandler}
          formState={formState}
        />
        <Step2NumberInput
          name="disposalCosts"
          label="Disposal Costs"
          changeHandler={changeHandler}
          formState={formState}
        />
        <Step2NumberInput
          name="gDVResidential"
          label="GDV Residential"
          changeHandler={changeHandler}
          formState={formState}
        />
        <Step2NumberInput
          name="gDVCommercial"
          label="GDV Commercial"
          changeHandler={changeHandler}
          formState={formState}
        />
      </div>
    </div>
  );
};

export default ModelDealStep2;

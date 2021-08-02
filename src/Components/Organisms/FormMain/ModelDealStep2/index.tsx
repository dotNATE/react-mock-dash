import ModelDealStep from "../ModelDealStep";
import NumberInput from "./NumberInput";

type userInput = {
  [index: string]: string | number;
};

type ModelDealStep2Props = {
  formState: userInput;
  errors: string[];
  changeHandler: any;
  currentStep: number;
};

const ModelDealStep2 = ({
  formState,
  errors,
  changeHandler,
  currentStep,
}: ModelDealStep2Props): any => {
  return (
    <ModelDealStep currentStep={currentStep} targetStep={2}>
      <div className="flex flex-col justify-between col-start-2 col-span-3 row-start-2 row-span-4">
        <NumberInput
          name="purchasePrice"
          label="Purchase Price"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
        <NumberInput
          name="acquisitionCosts"
          label="Acquisition Costs"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
        <NumberInput
          name="buildCost"
          label="Build Cost"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
        <NumberInput
          name="professionalFees"
          label="Professional Fees"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
      </div>
      <div className="flex flex-col justify-between col-start-5 col-span-3 row-start-2 row-span-4">
        <NumberInput
          name="localAuthorityCosts"
          label="Local Authority Costs"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
        <NumberInput
          name="disposalCosts"
          label="Disposal Costs"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
        <NumberInput
          name="gDVResidential"
          label="GDV Residential"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
        <NumberInput
          name="gDVCommercial"
          label="GDV Commercial"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
      </div>
    </ModelDealStep>
  );
};

export default ModelDealStep2;

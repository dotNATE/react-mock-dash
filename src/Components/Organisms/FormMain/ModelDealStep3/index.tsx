import ModelDealStep from "../ModelDealStep";
import NumberInput from "../ModelDealStep2/NumberInput";
import SelectInput from "../ModelDealStep2/SelectInput";
import OptionsInputArray from "../ModelDealStep2/SelectInput/OptionsInputArray";

type userInput = {
  [index: string]: string | number;
};

type ModelDealStep3Props = {
  formState: userInput;
  errors: string[];
  changeHandler: any;
  currentStep: number;
};

const ModelDealStep3 = ({
  formState,
  errors,
  changeHandler,
  currentStep,
}: ModelDealStep3Props): any => {
  const dates = [
    { value: 1, label: "3 Months" },
    { value: 2, label: "6 Months" },
    { value: 3, label: "9 Months" },
    { value: 4, label: "12 Months" },
    { value: 5, label: "15 Months" },
    { value: 6, label: "18 Months" },
    { value: 7, label: "21 Months" },
    { value: 8, label: "24 Months" },
  ];
  return (
    <ModelDealStep currentStep={currentStep} targetStep={3}>
      <div className="col-start-2 col-span-6 row-start-2 grid grid-cols-3">
        <SelectInput
          name="mobAndBuildPeriod"
          label="Mobilisation And Build Period"
          changeHandler={changeHandler}
          formState={formState}
        >
          <OptionsInputArray data={dates} />
        </SelectInput>
        <SelectInput
          name="salePeriod"
          label="Sale Period"
          changeHandler={changeHandler}
          formState={formState}
        >
          <OptionsInputArray data={dates} />
        </SelectInput>
        <SelectInput
          name="exitStrategy"
          label="Exit Strategy"
          changeHandler={changeHandler}
          formState={formState}
        >
          <OptionsInputArray
            data={[
              { value: 1, label: "Sell" },
              { value: 2, label: "Refinance" },
            ]}
          />
        </SelectInput>
      </div>
      <div className="col-start-2 col-span-6 row-start-4 grid grid-cols-3">
        <NumberInput
          name="residentialUnits"
          label="Residential Units"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
        <NumberInput
          name="existingInternalArea"
          label="Existing Internal Area (sqft)"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
        <NumberInput
          name="residentialGrossInternalArea"
          label="Residential Gross Internal Area (sqft)"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
      </div>
    </ModelDealStep>
  );
};

export default ModelDealStep3;

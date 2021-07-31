import ModelDealStep from "../ModelDealStep";
import NumberInput from "../ModelDealStep2/NumberInput";
import SelectInput from "../ModelDealStep2/SelectInput";
import OptionsInputArray from "../ModelDealStep2/SelectInput/OptionsInputArray";

type userInput = {
  [index: string]: string | number;
};

type ModelDealStep3Props = {
  formState: userInput;
  changeHandler: any;
  currentStep: number;
};

const ModelDealStep3 = ({
  formState,
  changeHandler,
  currentStep,
}: ModelDealStep3Props): any => {
  const dates = [
    { label: "3 Months" },
    { label: "6 Months" },
    { label: "9 Months" },
    { label: "12 Months" },
    { label: "15 Months" },
    { label: "18 Months" },
    { label: "21 Months" },
    { label: "24 Months" },
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
            data={[{ label: "Sell" }, { label: "Refinance" }]}
          />
        </SelectInput>
      </div>
      <div className="col-start-2 col-span-6 row-start-4 grid grid-cols-3">
        <NumberInput
          name="residentialUnits"
          label="Residential Units"
          changeHandler={changeHandler}
          formState={formState}
        />
        <NumberInput
          name="existingInternalArea"
          label="Existing Internal Area (sqft)"
          changeHandler={changeHandler}
          formState={formState}
        />
        <NumberInput
          name="residentialGrossInternalArea"
          label="Residential Gross Internal Area (sqft)"
          changeHandler={changeHandler}
          formState={formState}
        />
      </div>
    </ModelDealStep>
  );
};

export default ModelDealStep3;

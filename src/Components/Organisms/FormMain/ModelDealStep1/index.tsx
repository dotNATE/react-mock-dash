import ModelDealStep from "../ModelDealStep";
import TextInput from "../ModelDealStep2/TextInput";

type userInput = {
  [index: string]: string | number;
};

type ModelDealStep1Props = {
  formState: userInput;
  errors: string[];
  changeHandler: any;
  currentStep: number;
};

const ModelDealStep1 = ({
  formState,
  errors,
  changeHandler,
  currentStep,
}: ModelDealStep1Props): any => {
  return (
    <ModelDealStep currentStep={currentStep} targetStep={1}>
      <div className="col-start-2 col-span-6 row-start-3 row-span-2 flex items-center relative">
        <TextInput
          name="company"
          label="Company Name"
          changeHandler={changeHandler}
          formState={formState}
          errors={errors}
        />
      </div>
    </ModelDealStep>
  );
};

export default ModelDealStep1;

type userInput = {
  [index: string]: string | number;
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

type Step2NumberInputProps = {
  name: string;
  label: string;
  changeHandler: any;
  formState: userInput;
};

const Step2NumberInput = ({
  name,
  changeHandler,
  formState,
  label,
}: Step2NumberInputProps): JSX.Element => {
  return (
    <label
      htmlFor={name}
      className="w-5/6 mx-auto grid grid-col-3 grid-row-3 text-gray-50 opacity-80 font-medium"
    >
      {label}
      <input
        type="number"
        id={name}
        name={name}
        onChange={changeHandler}
        value={formState[name]}
        className="bg-transparent border-b-4 border-gray-50 p-4 rounded-md"
      />
    </label>
  );
};

export default Step2NumberInput;

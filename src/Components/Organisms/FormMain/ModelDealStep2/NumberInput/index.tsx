type userInput = {
  [index: string]: string | number;
};

type NumberInputProps = {
  name: string;
  label: string;
  changeHandler: any;
  formState: userInput;
};

const NumberInput = ({
  name,
  changeHandler,
  formState,
  label,
}: NumberInputProps): JSX.Element => {
  return (
    <label
      htmlFor={name}
      className="w-5/6 mx-auto grid grid-col-3 grid-row-3 text-gray-50 opacity-60 font-medium focus-within:opacity-90 transition duration-300"
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

export default NumberInput;

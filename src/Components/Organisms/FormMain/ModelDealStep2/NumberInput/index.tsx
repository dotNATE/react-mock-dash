type userInput = {
  [index: string]: string | number;
};

type NumberInputProps = {
  name: string;
  label: string;
  changeHandler: any;
  formState: userInput;
  errors: string[];
};

const NumberInput = ({
  name,
  changeHandler,
  formState,
  errors,
  label,
}: NumberInputProps): JSX.Element => {
  return (
    <label
      htmlFor={name}
      className="w-5/6 mx-auto grid grid-col-3 grid-row-3 text-gray-50 opacity-60 font-medium focus-within:opacity-90 hover:opacity-90 transition duration-300"
    >
      {errors.includes(name) ? (
        <div className="text-red-500 font-bold">This Field is Required</div>
      ) : (
        <div>{label}</div>
      )}
      <input
        type="number"
        id={name}
        name={name}
        onChange={changeHandler}
        value={formState[name] !== 0 ? formState[name] : undefined}
        className="bg-transparent border-b-4 border-gray-50 p-4 rounded-md"
      />
    </label>
  );
};

export default NumberInput;

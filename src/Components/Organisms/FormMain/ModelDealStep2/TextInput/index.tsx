type userInput = {
  [index: string]: string | number;
};

type TextInputProps = {
  name: string;
  label: string;
  changeHandler: any;
  formState: userInput;
};

const TextInput = ({
  name,
  changeHandler,
  formState,
  label,
}: TextInputProps): JSX.Element => {
  return (
    <label
      htmlFor={name}
      className="w-5/6 mx-auto grid grid-col-3 grid-row-3 text-gray-50 opacity-60 font-medium focus-within:opacity-90 transition duration-300"
    >
      {label}
      <input
        type="text"
        id={name}
        name={name}
        onChange={changeHandler}
        value={formState[name]}
        className="bg-transparent border-b-4 border-gray-50 p-4 rounded-md"
      />
    </label>
  );
};

export default TextInput;

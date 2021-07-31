type userInput = {
  [index: string]: string | number;
};

type SelectInputProps = {
  name: string;
  label: string;
  changeHandler: any;
  formState: userInput;
  children: JSX.Element | JSX.Element[];
};

const SelectInput = ({
  name,
  changeHandler,
  formState,
  label,
  children,
}: SelectInputProps): JSX.Element => {
  return (
    <label
      htmlFor={name}
      className="w-5/6 mx-auto grid grid-col-3 grid-row-3 text-gray-50 opacity-60 font-medium focus-within:opacity-90 transition duration-300"
    >
      {label}
      <select
        name={name}
        id={name}
        onChange={changeHandler}
        value={formState[name]}
        className="bg-transparent"
      >
        {children}
      </select>
    </label>
  );
};

export default SelectInput;

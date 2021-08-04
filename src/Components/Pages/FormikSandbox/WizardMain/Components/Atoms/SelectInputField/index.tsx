import { ExclamationIcon } from "@heroicons/react/outline";

type SelectInputFieldProps = {
  name: string;
  label: string;
  children: JSX.Element | JSX.Element[];
  value?: string | undefined;
  onChange?: any;
  onBlur?: any;
  error?: string | undefined;
  touched?: boolean | undefined;
};

const SelectInputField = ({
  name,
  label,
  value,
  error,
  touched,
  onChange,
  onBlur,
  children,
}: SelectInputFieldProps): JSX.Element => {
  const errorBorder = error && touched ? " border-red-600" : "";

  return (
    <div>
      <div className="opacity-40 hover:opacity-100 focus-within:opacity-100 relative flex flex-col text-black font-medium transition duration-300">
        <select
          id={name}
          name={name}
          className={
            "peer h-14 bg-transparent border-b-4 border-black p-4 outline-none placeholder-transparent z-50" +
            errorBorder
          }
          placeholder={label}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        >
          <option value={0}>Please select an option</option>
          {children}
        </select>
        <label
          className="absolute -top-3 text-sm pl-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3.5 transition-all peer-focus:font-medium peer-focus:text-black peer-focus:-top-3 peer-focus:text-sm"
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      {error && touched ? (
        <div className="text-red-600 font-medium flex pl-3 pt-2 h-6">
          <ExclamationIcon className="h-6 w-6 mr-3" />
          {error}
        </div>
      ) : (
        <div className="h-6"></div>
      )}
    </div>
  );
};

export default SelectInputField;

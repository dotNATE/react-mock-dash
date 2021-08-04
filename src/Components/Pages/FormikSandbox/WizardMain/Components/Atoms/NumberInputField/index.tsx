type NumberInputFieldProps = {
  name: string;
  label: string;
  value?: number | undefined;
  onChange?: any;
  onBlur?: any;
  error?: string | undefined;
  touched?: boolean | undefined;
  children?: JSX.Element | JSX.Element[];
};

const NumberInputField = ({
  name,
  label,
  value,
  error,
  touched,
  onChange,
  onBlur,
  children,
}: NumberInputFieldProps): JSX.Element => {
  const errorBorder = error && touched ? " border-red-600" : "";

  return (
    <div className="relative">
      <div className="opacity-60 hover:opacity-100 focus-within:opacity-100 relative flex flex-col text-black font-medium transition duration-300">
        <input
          id={name}
          name={name}
          type="number"
          className={
            "peer h-14 bg-transparent border-b-4 border-black p-4 outline-none placeholder-transparent z-50" +
            errorBorder
          }
          placeholder={label}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        <label
          className="absolute -top-3 text-sm pl-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:font-normal peer-placeholder-shown:top-3.5 transition-all peer-focus:font-medium peer-focus:text-black peer-focus:-top-3 peer-focus:text-sm"
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      {children}
    </div>
  );
};

export default NumberInputField;

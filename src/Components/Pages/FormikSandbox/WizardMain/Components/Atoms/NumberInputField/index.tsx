type NumberInputFieldProps = {
  name: string;
  label: string;
  value: number | undefined;
  onChange: any;
  onBlur: any;
};

const NumberInputField = ({
  name,
  label,
  value,
  onChange,
  onBlur,
}: NumberInputFieldProps): JSX.Element => {
  return (
    <div className="opacity-40 hover:opacity-100 focus-within:opacity-100 relative flex flex-col text-gray-100 font-medium transition duration-300">
      <input
        id={name}
        name={name}
        type="number"
        className="peer h-14 bg-transparent border-b-4 p-4 outline-none placeholder-transparent z-50"
        placeholder={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <label
        className="absolute -top-3 text-sm pl-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3.5 transition-all peer-focus:font-medium peer-focus:text-gray-100 peer-focus:-top-3 peer-focus:text-sm"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default NumberInputField;

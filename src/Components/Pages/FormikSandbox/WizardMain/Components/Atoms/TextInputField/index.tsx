type TextInputFieldProps = {
  name: string;
  label: string;
};

const TextInputField = ({ name, label }: TextInputFieldProps): JSX.Element => {
  return (
    <div className="opacity-40 hover:opacity-100 focus-within:opacity-100 relative flex flex-col text-gray-100 font-medium transition duration-300">
      <input
        id={name}
        name={name}
        type="text"
        className="peer h-14 bg-transparent border-b-4 p-4 outline-none placeholder-transparent z-50"
        placeholder={label}
      />
      <label
        className="absolute -top-3 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal peer-placeholder-shown:pl-4 peer-placeholder-shown:top-3.5 transition-all"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInputField;

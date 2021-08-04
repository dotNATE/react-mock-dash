type RadioOptionProps = {
  name: string;
  value: string;
  parentValue: string;
  label?: string;
  onChange: any;
  onBlur: any;
};

export const RadioOption = ({
  name,
  label,
  value,
  parentValue,
  onBlur,
  onChange,
}: RadioOptionProps): JSX.Element => {
  return (
    <label
      htmlFor={value}
      className="flex items-center group cursor-pointer opacity-60 hover:opacity-90 transition-all duration-300 focus-within:opacity-100"
    >
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="absolute opacity-0 peer cursor-pointer"
        checked={parentValue === value}
      />
      <div className="h-5 w-5 rounded-full border-pink-700 border-2 group-hover:bg-pink-300 inline-block mr-2 peer-checked:bg-pink-500 peer-active:bg-pink-600 cursor-pointer"></div>
      {label}
    </label>
  );
};

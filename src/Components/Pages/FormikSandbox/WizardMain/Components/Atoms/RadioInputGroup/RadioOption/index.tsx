import { CheckCircleIcon } from "@heroicons/react/outline";

type RadioOptionProps = {
  name: string;
  value: string;
  parentValue: string | undefined;
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
    <label htmlFor={value} className="group cursor-pointer relative">
      {parentValue === value && (
        <CheckCircleIcon className="w-8 h-8 text-pink-500 absolute z-50" />
      )}
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="hidden peer"
        checked={parentValue === value}
      />
      <div className="h-full flex justify-center items-center bg-pink-600 peer-checked:bg-transparent peer-checked:text-pink-600 peer-checked:ring-pink-700 peer-checked:ring-2 transition-all">
        {label}
      </div>
    </label>
  );
};

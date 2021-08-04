import { RadioOption } from "./RadioOption";

type optionType = {
  name: string;
  label: string;
  value: string;
};

type RadioInputGroupProps = {
  name: string;
  label?: string;
  children: JSX.Element | JSX.Element[];
  error?: string | undefined;
  touched?: boolean | undefined;
  onChange: any;
  onBlur: any;
  options: optionType[];
  value: string;
};

export const RadioInputGroup = ({
  name,
  error,
  touched,
  options,
  onChange,
  onBlur,
  value,
  children,
}: RadioInputGroupProps): JSX.Element => {
  const errorBorder = error && touched ? " border-red-600" : "";

  return (
    <div className="relative">
      <div
        className={`transition-all duration-300 grid grid-cols-1 px-8 py-4 gap-3 border-black border-4 border-opacity-50 hover:border-opacity-100 transition-all font-medium ${errorBorder}`}
      >
        {Array.isArray(options) &&
          options.map((option) => (
            <RadioOption
              name={name}
              label={option.label}
              value={option.value}
              onBlur={onBlur}
              onChange={onChange}
              parentValue={value}
            />
          ))}
      </div>
      {children}
    </div>
  );
};

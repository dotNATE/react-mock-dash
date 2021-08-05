import { ExclamationIcon } from "@heroicons/react/outline";

type NumberInputFieldProps = {
  name: string;
  label: string;
  value?: number | undefined;
  onChange?: any;
  onBlur?: any;
  error?: string | undefined;
  touched?: boolean | undefined;
};

const NumberInputField = ({
  name,
  label,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: NumberInputFieldProps): JSX.Element => {
  const errorBorder =
    error && touched
      ? " border-opacity-100 border-red-600"
      : " border-opacity-20";

  return (
    <div className="relative">
      <div className="text-xl">
        <div
          className={
            "relative flex flex-col border-b-4 border-black focus-within:border-opacity-100 transition-all" +
            errorBorder
          }
        >
          <input
            id={name}
            name={name}
            type="number"
            className="peer py-4 placeholder-transparent bg-transparent outline-none z-50"
            placeholder={label}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
          <label
            className="absolute -top-4 text-sm peer-placeholder-shown:text-xl peer-placeholder-shown:font-normal peer-placeholder-shown:opacity-80 peer-placeholder-shown:top-4 transition-all"
            htmlFor={name}
          >
            {label}
          </label>
        </div>
      </div>
      {error && touched && (
        <div className="absolute text-red-600 flex font-medium pt-2 h-6 ">
          <ExclamationIcon className="h-6 w-6 mr-3" />
          {error}
        </div>
      )}
    </div>
  );
};

export default NumberInputField;

type OptionProps = {
  value: number;
  label: string;
};

const Option = ({ value, label }: OptionProps): JSX.Element => (
  <option value={value} className="text-black">
    {label}
  </option>
);

export default Option;

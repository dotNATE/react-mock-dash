import Option from "../OptionInput";

type optionType = {
  value: number;
  label: string;
};

type OptionsInputArrayProps = {
  data: optionType[];
};

const OptionsInputArray = ({ data }: OptionsInputArrayProps): any => {
  return (
    <>
      {Array.isArray(data)
        ? data.map(({ label, value }) => <Option label={label} value={value} />)
        : null}
    </>
  );
};

export default OptionsInputArray;

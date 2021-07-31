import Option from "../OptionInput";

type optionType = {
  label: string;
};

type OptionsInputArrayProps = {
  data: optionType[];
};

const OptionsInputArray = ({ data }: OptionsInputArrayProps): any => {
  return (
    <>
      {Array.isArray(data)
        ? data.map((option) => (
            <Option label={option.label} value={option.label} />
          ))
        : null}
    </>
  );
};

export default OptionsInputArray;

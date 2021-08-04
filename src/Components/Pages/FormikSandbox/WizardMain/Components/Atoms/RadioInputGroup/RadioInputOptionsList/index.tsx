import { RadioOption } from "../RadioOption";

type RadioInputData = {
  name: string;
  label: string;
  value: string;
};

type RadioInputOptionsListProps = {
  options: RadioInputData | RadioInputData[];
};

export const RadioInputOptionsList = ({
  options,
}: RadioInputOptionsListProps): JSX.Element | null => {
  return <></>;
};

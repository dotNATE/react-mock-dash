import DealTableRow from "../DealTableRow";

type DealTableRowsProps = {
  data: Array<DealData>;
};

type DealData = {
  address: String;
  status: String;
  profit: Number;
};

const DealTableRows = ({ data }: DealTableRowsProps): JSX.Element => <></>;

export default DealTableRows;

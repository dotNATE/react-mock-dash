import TableData from "../../Atoms/TableElements/TableData";
import TableDataProfitCounter from "../../Atoms/TableElements/TableDataProfitCounter";
import TableRow from "../../Atoms/TableElements/TableRow";

type DealTableRowProps = {
  name: String;
  status: String;
  profit: Number;
};

const DealTableRow = ({
  name,
  status,
  profit,
}: DealTableRowProps): JSX.Element => {
  return (
    <TableRow>
      <TableData content={name} />
      <TableData content={status} />
      <TableDataProfitCounter profit={profit} />
    </TableRow>
  );
};

export default DealTableRow;

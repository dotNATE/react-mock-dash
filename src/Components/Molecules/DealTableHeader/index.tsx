import TableHeader from "../../Atoms/TableElements/TableHeader";
import TableRow from "../../Atoms/TableElements/TableRow";

const DealTableHeader = (): JSX.Element => {
  return (
    <TableRow>
      <TableHeader content="Name" />
      <TableHeader content="Status" />
      <TableHeader content="Profit" />
    </TableRow>
  );
};

export default DealTableHeader;

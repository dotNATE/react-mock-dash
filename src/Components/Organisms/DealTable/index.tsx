import Table from "../../Atoms/TableElements/Table";
import DealTableHeader from "../../Molecules/DealTableHeader";
import DealTableRow from "../../Molecules/DealTableRow";
import DealTableRows from "../../Molecules/DealTableRows";

type DealTableProps = {
  data: Array<DealData>;
};

type DealData = {
  name: String;
  status: String;
  profit: Number;
};

const DealTable = ({ data }: DealTableProps): JSX.Element => {
  return (
    <Table>
      <DealTableHeader />
      <DealTableRows data={data} />
    </Table>
  );
};

export default DealTable;

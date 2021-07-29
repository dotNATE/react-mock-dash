import TableHeader from "../../Atoms/TableElements/TableHeader";
import TableRow from "../../Atoms/TableElements/TableRow";

const DealTableHeader = (): JSX.Element => {
  return (
    <thead className="text-white bg-black h-16 rounded-t-lg">
      <TableRow>
        <TableHeader content="Name" className="w-16" />
        <TableHeader content="Status" className="w-2" />
        <TableHeader content="Profit" className="w-2" />
      </TableRow>
    </thead>
  );
};

export default DealTableHeader;

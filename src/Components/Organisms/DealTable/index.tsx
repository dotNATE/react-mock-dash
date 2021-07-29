import DealTableRow from "./../../Molecules/DealTableRow/index";

type DealTableProps = {
  data: DealData[];
  col: number;
  row: number;
};

type DealData = {
  address: String;
  type: String;
  profit: Number;
  features: String[];
};

const DealTable = ({ data, col, row }: DealTableProps): JSX.Element => (
  <ul
    className={`border-solid border-black border rounded-lg bg-white col-start-${col} col-span-8 row-start-${row} row-span-2 overflow-y-auto`}
  >
    {Array.isArray(data)
      ? data.map((deal) => (
          <DealTableRow
            address={deal.address}
            type={deal.type}
            profit={deal.profit}
            features={deal.features}
          />
        ))
      : null}
  </ul>
);

export default DealTable;

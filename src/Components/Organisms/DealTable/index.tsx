import DealTableRow from "./../../Molecules/DealTableRow/index";

type DealTableProps = {
  data: DealData[];
  col: number;
  row: number;
  clicker: ({
    address,
    type,
    profit,
    features,
    description,
    imageUrl,
  }: DealData) => void;
};

type DealData = {
  address: string;
  type: string;
  profit: number;
  features: string[];
  description: string;
  imageUrl: string;
};

const DealTable = ({
  data,
  col,
  row,
  clicker,
}: DealTableProps): JSX.Element => (
  <ul
    className={`border-solid border-black border rounded-lg bg-white col-start-${col} col-span-8 row-start-${row} row-span-3 overflow-y-auto`}
  >
    {Array.isArray(data)
      ? data.map((deal) => (
          <DealTableRow
            address={deal.address}
            type={deal.type}
            profit={deal.profit}
            features={deal.features}
            description={deal.description}
            imageUrl={deal.imageUrl}
            clicker={clicker}
          />
        ))
      : null}
  </ul>
);

export default DealTable;

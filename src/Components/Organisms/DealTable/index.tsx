import DealTableRow from "./../../Molecules/DealTableRow/index";

type DealTableProps = {
  data: DealData[];
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

const DealTable = ({ data, clicker }: DealTableProps): JSX.Element => (
  <ul className="">
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

import DealTableRow from "../DealTableRow";

type DealTableRowsProps = {
  data: Array<DealData>;
};

type DealData = {
  name: String;
  status: String;
  profit: Number;
};

const DealTableRows = ({ data }: DealTableRowsProps): JSX.Element => (
  <>
    {Array.isArray(data)
      ? data.map((deal) => (
          <DealTableRow
            name={deal.name}
            status={deal.status}
            profit={deal.profit}
          />
        ))
      : null}
  </>
);

export default DealTableRows;

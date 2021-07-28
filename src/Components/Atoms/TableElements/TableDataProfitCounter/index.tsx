type TableDataProfitCounterProps = {
  profit: Number;
};

const TableDataProfitCounter = ({
  profit,
}: TableDataProfitCounterProps): JSX.Element => {
  return (
    <td className={profit > 0 ? "text-green-400" : "text-red-400"}>{profit}</td>
  );
};

export default TableDataProfitCounter;

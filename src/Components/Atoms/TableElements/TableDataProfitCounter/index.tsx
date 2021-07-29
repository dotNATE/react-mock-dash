type TableDataProfitCounterProps = {
  profit: Number;
};

const TableDataProfitCounter = ({
  profit,
}: TableDataProfitCounterProps): JSX.Element => {
  return (
    <p className={(profit > 0 ? "text-green-400" : "text-red-400") + ""}>
      {profit}
    </p>
  );
};

export default TableDataProfitCounter;

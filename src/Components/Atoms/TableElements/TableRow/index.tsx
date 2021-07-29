type TableRowProps = {
  children: JSX.Element | JSX.Element[];
};

const TableRow = ({ children }: TableRowProps): JSX.Element => (
  <tr>{children}</tr>
);

export default TableRow;

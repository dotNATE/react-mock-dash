type TableDataProps = {
  content: String;
};

const TableData = ({ content }: TableDataProps): JSX.Element => (
  <td>{content}</td>
);

export default TableData;

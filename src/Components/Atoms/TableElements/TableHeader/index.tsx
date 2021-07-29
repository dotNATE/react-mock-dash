type TableHeaderProps = {
  content: String;
  className?: string;
};

const TableHeader = ({ content, className }: TableHeaderProps): JSX.Element => {
  return <th className={className}>{content}</th>;
};

export default TableHeader;

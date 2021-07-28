type TableHeaderProps = {
    content: String
}

const TableHeader = ({ content }:TableHeaderProps):JSX.Element => {
    return (
        <th>{ content }</th>
    )
}

export default TableHeader;
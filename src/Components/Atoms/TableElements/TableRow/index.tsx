type TableRowProps = {
    children: JSX.Element | JSX.Element[]
}

const TableRow = ({ children }:TableRowProps):JSX.Element => {
    return (
        <tr>
            { children }
        </tr>
    )
}

export default TableRow;
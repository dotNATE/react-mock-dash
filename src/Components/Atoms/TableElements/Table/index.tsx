type TableProps = {
    children: JSX.Element | JSX.Element[]
}

const Table = ({ children }:TableProps):JSX.Element => {
    return (
        <table>
            { children }
        </table>
    )
}

export default Table;
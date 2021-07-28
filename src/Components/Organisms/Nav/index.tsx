type NavProps = {
    children: JSX.Element | JSX.Element[]
}

const Nav = ({ children }:NavProps):JSX.Element => {
    return (
        <nav className="w-64 bg-blue-100">
            { children }
        </nav>
    )
}

export default Nav;
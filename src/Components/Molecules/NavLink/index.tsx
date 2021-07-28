import H2 from './../../Atoms/H2/index';

type NavLinkProps = {
    label: String
    children?: JSX.Element
}

const NavLink = ({ label, children }:NavLinkProps):JSX.Element => {
    return (
        <div className="grid grid-cols-2">
            <H2 content={ label } />
            { children }
        </div>
    )
}

export default NavLink;
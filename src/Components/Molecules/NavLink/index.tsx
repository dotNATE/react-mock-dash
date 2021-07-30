import { NavLink } from "react-router-dom";

type NavBarLinkProps = {
  children?: JSX.Element | JSX.Element[];
  to: string;
};

const NavBarLink = ({ children, to }: NavBarLinkProps): JSX.Element => {
  return (
    <NavLink to={to}>
      <li className="flex items-center px-2 py-2 font-medium rounded-md justify-between h-10 mb-2 hover:text-yellow-900 hover:bg-yellow-300 active:bg-yellow-400 cursor-pointer select-none group transition">
        {children}
      </li>
    </NavLink>
  );
};

export default NavBarLink;

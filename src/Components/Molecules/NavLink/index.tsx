type NavLinkProps = {
  children?: JSX.Element | JSX.Element[];
};

const NavLink = ({ children }: NavLinkProps): JSX.Element => {
  return (
    <div className="flex items-center px-2 py-2 font-medium rounded-md justify-between h-10 mb-2 hover:bg-yellow-300 cursor-pointer">
      {children}
    </div>
  );
};

export default NavLink;

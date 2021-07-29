type NavLinkProps = {
  label: String;
  children?: JSX.Element;
};

const NavLink = ({ label, children }: NavLinkProps): JSX.Element => {
  return (
    <div className="grid grid-cols-4 pl-4 h-16 hover:bg-gray-200 cursor-pointer">
      <h2 className="col-start-1 col-end-4 text-2xl py-3">{label}</h2>
      {children}
    </div>
  );
};

export default NavLink;

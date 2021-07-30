import SqftLogo from "../../Atoms/SqftLogo";

type NavProps = {
  children: JSX.Element | JSX.Element[];
};

const Nav = ({ children }: NavProps): JSX.Element => {
  return (
    <nav className="flex flex-col w-80 border-black border-r-2">
      <div className="h-16 flex justify-center items-center">
        <SqftLogo />
      </div>
      <div className="flex flex-col justify-between p-3 h-full">{children}</div>
    </nav>
  );
};

export default Nav;

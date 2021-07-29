import SqftLogo from "../../Atoms/SqftLogo";

type NavProps = {
  children: JSX.Element | JSX.Element[];
};

const Nav = ({ children }: NavProps): JSX.Element => {
  return (
    <nav className="flex flex-col w-64 bg-gray-400 border-r-2 border-black">
      <div className=" h-16 flex justify-center items-center">
        <SqftLogo />
      </div>
      <div className="flex flex-col justify-between h-full">{children}</div>
    </nav>
  );
};

export default Nav;

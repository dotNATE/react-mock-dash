import SqftLogo from "../../Atoms/SqftLogo";

const DashboardHeader = (): JSX.Element => {
  return (
    <header className="h-16 pl-4 flex justify-start items-center bg-gray-300 border-b-2 border-black">
      <SqftLogo />
    </header>
  );
};

export default DashboardHeader;

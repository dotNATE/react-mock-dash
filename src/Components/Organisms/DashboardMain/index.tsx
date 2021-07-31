import { SearchIcon } from "@heroicons/react/outline";

type DashboardMainProps = {
  children: JSX.Element | JSX.Element[];
};

const DashboardMain = ({ children }: DashboardMainProps): JSX.Element => {
  return (
    <div className="max-h-full w-full flex flex-col overflow-y-auto">
      <div className="flex flex-row h-14">
        <SearchIcon className="h-6 w-6 mr-3 my-auto ml-4" />
        <input
          className="h-full w-full p-4"
          type="text"
          placeholder="Search..."
        />
      </div>
      <section className="grid grid-cols-8 grid-rows-6 gap-5 bg-gray-200 p-4 h-full w-full">
        {children}
      </section>
    </div>
  );
};

export default DashboardMain;

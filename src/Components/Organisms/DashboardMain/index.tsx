type DashboardMainProps = {
  children: JSX.Element | JSX.Element[];
};

const DashboardMain = ({ children }: DashboardMainProps): JSX.Element => {
  return (
    <main className="h-screen w-full grid grid-cols-8 grid-rows-6 gap-5 bg-gray-600 p-4">
      {children}
    </main>
  );
};

export default DashboardMain;

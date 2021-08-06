import Nav from "../../Organisms/Nav";

type DashboardLayoutProps = {
  children: JSX.Element | JSX.Element[];
  onKeyDown?: any;
  onWheel?: any;
};

const DashboardLayout = ({
  children,
  onKeyDown: handleKeyDown,
  onWheel: handleWheel,
}: DashboardLayoutProps): JSX.Element => {
  return (
    <main
      className="flex flex-row h-screen"
      onKeyDown={handleKeyDown}
      onWheel={handleWheel}
    >
      <Nav />
      {children}
    </main>
  );
};

export default DashboardLayout;

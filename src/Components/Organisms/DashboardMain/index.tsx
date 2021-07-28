import "./DashboardMain.css";

type DashboardMainProps = {
  children: JSX.Element | JSX.Element[];
};

const DashboardMain = ({ children }: DashboardMainProps): JSX.Element => {
  return <main className="dashMain p-4">{children}</main>;
};

export default DashboardMain;

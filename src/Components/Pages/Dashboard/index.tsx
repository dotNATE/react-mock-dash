import DashboardLayout from "../../Atoms/DashboardLayout";
import NavNotificationCounter from "../../Atoms/NavNotificationCounter";
import DashboardHeader from "../../Molecules/DashboardHeader";
import DealTable from "../../Organisms/DealTable";
import NavLink from "../../Molecules/NavLink";
import DashboardMain from "../../Organisms/DashboardMain";
import Nav from "../../Organisms/Nav";
import NavDealCounter from "./../../Atoms/NavDealCounter/index";

type DealData = {
  name: String;
  status: String;
  profit: Number;
};

const deals: Array<DealData> = [
  { name: "Royal Albert Hall", status: "Complete", profit: 28 },
  { name: "Royal College of Music", status: "Pending", profit: -14 },
  { name: "Natural History Museum", status: "Review", profit: 8.9 },
];

const Dashboard = (): JSX.Element => {
  return (
    <div>
      <DashboardHeader />
      <DashboardLayout>
        <Nav>
          <NavLink label="My Deals">
            <NavDealCounter count={2} />
          </NavLink>
          <NavLink label="Notifications">
            <NavNotificationCounter count={4} />
          </NavLink>
          <NavLink label="Account" />
          <NavLink label="Log Out" />
        </Nav>
        <DashboardMain>
          <DealTable data={deals} />
        </DashboardMain>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;

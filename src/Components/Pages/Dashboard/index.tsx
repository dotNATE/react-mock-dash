import DashboardLayout from "../../Atoms/DashboardLayout";
import NavNotificationCounter from "../../Atoms/NavNotificationCounter";
import DealTable from "../../Organisms/DealTable";
import NavLink from "../../Molecules/NavLink";
import DashboardMain from "../../Organisms/DashboardMain";
import Nav from "../../Organisms/Nav";
import NavDealCounter from "./../../Atoms/NavDealCounter/index";
import MapFilterButton from "../../Atoms/MapFilterButton";

type DealData = {
  address: String;
  type: String;
  profit: Number;
  features: String[];
};

const deals: DealData[] = [
  {
    address:
      "Royal Albert Hall, Kensington Gore, South Kensington, London SW7 2AP",
    type: "Renovation",
    profit: 28,
    features: ["38 Bedrooms", "Garden"],
  },
  {
    address:
      "Royal College of Music, Prince Consort Road, South Kensington, London SW7 2BS",
    type: "Residential Flat Conversion",
    profit: -14,
    features: ["En-suite", "Colonial-era Ampitheatre"],
  },
  {
    address:
      "Natural History Museum, Cromwell Rd, South Kensington, London SW7 5BD",
    type: "Commercial Flat Conversion",
    profit: 8.9,
    features: ["Spacious", "Train Station"],
  },
  {
    address: "The Shard, 32 London Bridge St, London SE1 9SG",
    type: "Commercial Flat Conversion",
    profit: 43.2,
    features: ["Spacious", "Somewhat Decent Views"],
  },
];

const Dashboard = (): JSX.Element => {
  return (
    <DashboardLayout>
      <Nav>
        <section>
          <NavLink label="My Deals">
            <NavDealCounter count={deals.length} />
          </NavLink>
          <NavLink label="Notifications">
            <NavNotificationCounter count={4} />
          </NavLink>
        </section>
        <section>
          <NavLink label="Account" />
          <NavLink label="Log Out" />
        </section>
      </Nav>

      <DashboardMain>
        {/* Map Window */}
        <section className="col-start-1 col-span-8 row-start-1 row-span-3">
          <div className="h-full flex flex-col bg-white border-solid border-black border rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6705936157623!2d-0.17955468474452566!3d51.500912118999324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876055b21867ad1%3A0x5efe9cee35da2fd9!2sRoyal%20Albert%20Hall!5e0!3m2!1sen!2suk!4v1627552975374!5m2!1sen!2suk"
              loading="lazy"
              title="map"
            ></iframe>
            <div className="flex mt-2 h-6 absolute top-64">
              <MapFilterButton content="Complete" />
              <MapFilterButton content="Pending" />
              <MapFilterButton content="All Time" />
            </div>
          </div>
        </section>

        <DealTable data={deals} col={1} row={4} />
      </DashboardMain>
    </DashboardLayout>
  );
};

export default Dashboard;

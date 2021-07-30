import { useState } from "react";
import DashboardLayout from "../../Atoms/DashboardLayout";
import NavNotificationCounter from "../../Atoms/NavNotificationCounter";
import DealTable from "../../Organisms/DealTable";
import NavLink from "../../Molecules/NavLink";
import DashboardMain from "../../Organisms/DashboardMain";
import Nav from "../../Organisms/Nav";
import NavDealCounter from "./../../Atoms/NavDealCounter/index";
import MapFilterButton from "../../Atoms/MapFilterButton";
import SidebarTest from "./../../Atoms/SidebarTest/index";
import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  FolderIcon,
  InboxIcon,
  LogoutIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/outline";

type DealData = {
  address: string;
  type: string;
  profit: number;
  features: string[];
  description: string;
  imageUrl: string;
};

const deals: DealData[] = [
  {
    address:
      "Royal Albert Hall, Kensington Gore, South Kensington, London SW7 2AP",
    type: "Renovation",
    profit: 28,
    features: ["38 Bedrooms", "Garden"],
    description:
      "The Royal Albert Hall is a concert hall on the northern edge of South Kensington, London. One of the United Kingdom's most treasured and distinctive buildings, it is held in trust for the nation and managed by a registered charity. It can seat 5,272.",
    imageUrl: "images/deal_pics/royal_albert.jpg",
  },
  {
    address:
      "Royal College of Music, Prince Consort Road, South Kensington, London SW7 2BS",
    type: "Residential Flat Conversion",
    profit: -14,
    features: ["En-suite", "Colonial-era Ampitheatre"],
    description:
      "The Royal College of Music is a conservatoire established by royal charter in 1882, located in South Kensington, London, UK. It offers training from the undergraduate to the doctoral level in all aspects of Western Music including performance, composition, conducting, music theory and history.",
    imageUrl: "images/deal_pics/royal_college.jpg",
  },
  {
    address:
      "Natural History Museum, Cromwell Rd, South Kensington, London SW7 5BD",
    type: "Commercial Flat Conversion",
    profit: 8.9,
    features: ["Spacious", "Train Station"],
    description:
      "The Natural History Museum in London is a natural history museum that exhibits a vast range of specimens from various segments of natural history. It is one of three major museums on Exhibition Road in South Kensington, the others being the Science Museum and the Victoria and Albert Museum.",
    imageUrl: "images/deal_pics/natural-history-museum-london_adobe-stock.jpg",
  },
  {
    address: "The Shard, 32 London Bridge St, London SE1 9SG",
    type: "Commercial Flat Conversion",
    profit: 43.2,
    features: ["Spacious", "Somewhat Decent Views"],
    description:
      "The Shard, also referred to as the Shard of Glass, Shard London Bridge and formerly London Bridge Tower, is a 72-storey skyscraper, designed by the Italian architect Renzo Piano, in Southwark, London, that forms part of the Shard Quarter development.",
    imageUrl: "images/deal_pics/The-Shard-London.jpg",
  },
  {
    address: "2 Lincoln Memorial Cir NW, Washington, DC 20002, United States",
    type: "Renovation",
    profit: -14.7,
    features: ["Imposing", "Sprawling Front Garden"],
    description:
      "The Lincoln Memorial is a US national memorial built to honor the 16th president of the United States, Abraham Lincoln. It is on the western end of the National Mall in Washington, D.C., across from the Washington Monument, and is in the form of a neoclassical temple. The memorial's architect was Henry Bacon.",
    imageUrl: "images/deal_pics/90E5EB32-BB00-EA88-B133ACDDF7398F4C.jpg",
  },
  {
    address:
      "Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brazil",
    type: "Renovation",
    profit: 43.2,
    features: ["Monumental", "Religious Icon", "Somewhat Decent Views"],
    description:
      "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face.",
    imageUrl: "images/deal_pics/rio_christ_vr_01_big.jpg",
  },
];

const Dashboard = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState({
    address: "",
    type: "",
    profit: 0,
    features: [""],
    description: "",
    imageUrl: "",
  });

  const clickHandler = ({
    address,
    type,
    features,
    profit,
    description,
    imageUrl,
  }: DealData): void => {
    setSelectedDeal({ address, type, features, profit, description, imageUrl });
    setOpen(true);
  };

  return (
    <DashboardLayout>
      <Nav>
        <section>
          <NavLink>
            <div className="flex">
              <StarIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">My Deals</h2>
            </div>
            <NavDealCounter count={deals.length} />
          </NavLink>
          <NavLink>
            <div className="flex">
              <SparklesIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Notifications</h2>
            </div>
            <NavNotificationCounter count={4} />
          </NavLink>
          <NavLink>
            <div className="flex">
              <FolderIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Projects</h2>
            </div>
          </NavLink>
          <NavLink>
            <div className="flex">
              <CalendarIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Calendar</h2>
            </div>
          </NavLink>
          <NavLink>
            <div className="flex">
              <InboxIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Documents</h2>
            </div>
          </NavLink>
          <NavLink>
            <div className="flex">
              <ChartBarIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Reports</h2>
            </div>
          </NavLink>
        </section>
        <section>
          <NavLink>
            <div className="flex">
              <CogIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Account</h2>
            </div>
          </NavLink>
          <NavLink>
            <div className="flex">
              <LogoutIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Log Out</h2>
            </div>
          </NavLink>
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

        <DealTable data={deals} col={1} row={4} clicker={clickHandler} />
      </DashboardMain>
      <SidebarTest open={open} setOpen={setOpen} deal={selectedDeal} />
    </DashboardLayout>
  );
};

export default Dashboard;

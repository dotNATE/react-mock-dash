import { useState } from "react";
import DashboardLayout from "../../Atoms/DashboardLayout";
import DealTable from "../../Organisms/DealTable";
import DashboardMain from "../../Organisms/DashboardMain";
import SidebarTest from "./../../Atoms/SidebarTest/index";
import { ExclamationIcon, PlusIcon } from "@heroicons/react/outline";
import DashboardWidgetWrapper from "../../Atoms/DashboardWidgetWrapper";
import MapWidget from "../../Molecules/DashboardWidgets/MapWidget";
import DashboardWidgetHeader from "../../Atoms/DashboardWidgetHeader";
import { NavLink } from "react-router-dom";

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

const notifications: string[] = ["1", "Kingpin"];

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
      <DashboardMain>
        <div className="col-start-1 col-span-6 row-start-1 row-span-3">
          <DashboardWidgetWrapper>
            <MapWidget />
          </DashboardWidgetWrapper>
        </div>

        <div className="col-start-7 col-span-2 row-start-1 row-span-3">
          <DashboardWidgetWrapper>
            <div className="h-full relative ">
              <DashboardWidgetHeader content="Notifications" />

              <div className="pt-12">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div className="grid grid-cols-4 items-center w-full h-12 pl-4 bg-red-50">
                      <ExclamationIcon className="h-6 w-6 mr-3 text-red-600 col-start-1" />
                      <div className="">{notification}</div>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center items-center h-full bg-blue-50 rounded-lg">
                    <div className="w-3/5 text-center text-gray-600">
                      You have no new notifications
                    </div>
                  </div>
                )}
              </div>
            </div>
          </DashboardWidgetWrapper>
        </div>

        <div className="col-start-1 col-span-2 row-start-4 row-span-3">
          <DashboardWidgetWrapper>
            <div className="h-full relative">
              <DashboardWidgetHeader content="Model a new deal" />
              <NavLink to="model">
                <div className="cursor-pointer h-full flex justify-center items-center pt-12">
                  <PlusIcon className="text-gray-600 h-16 w-16" />
                </div>
              </NavLink>
            </div>
          </DashboardWidgetWrapper>
        </div>

        <div className="col-start-3 col-span-6 row-start-4 row-span-3">
          <DashboardWidgetWrapper overflow>
            <DealTable data={deals} clicker={clickHandler} />
          </DashboardWidgetWrapper>
        </div>
      </DashboardMain>

      <SidebarTest open={open} setOpen={setOpen} deal={selectedDeal} />
    </DashboardLayout>
  );
};

export default Dashboard;

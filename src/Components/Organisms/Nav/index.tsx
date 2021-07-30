import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  ExclamationIcon,
  FolderIcon,
  InboxIcon,
  LogoutIcon,
  PlusIcon,
  StarIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import ProIcon from "../../Atoms/ProIcon";
import SqftLogo from "../../Atoms/SqftLogo";
import NavBarLink from "../../Molecules/NavLink";

const Nav = (): JSX.Element => {
  return (
    <nav className="flex flex-col w-80 border-black border-r-2">
      <div className="h-16 flex justify-center items-center">
        <SqftLogo />
      </div>
      <div className="flex flex-col justify-between p-3 h-full">
        <ul>
          <NavBarLink to="/">
            <div className="flex">
              <ViewGridIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Dashboard</h2>
            </div>
          </NavBarLink>
          <NavBarLink to="/model">
            <div className="flex">
              <PlusIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">New Deal Model</h2>
            </div>
          </NavBarLink>
          <NavBarLink to="/">
            <div className="flex">
              <StarIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">My Deals</h2>
            </div>
          </NavBarLink>
          <NavBarLink to="/">
            <div className="flex">
              <ExclamationIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Notifications</h2>
            </div>
          </NavBarLink>
          <NavBarLink to="/">
            <div className="flex">
              <FolderIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Projects</h2>
            </div>
          </NavBarLink>
          <NavBarLink to="/">
            <div className="flex">
              <CalendarIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Calendar</h2>
            </div>
          </NavBarLink>
          <NavBarLink to="/">
            <div className="flex">
              <InboxIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Documents</h2>
            </div>
          </NavBarLink>
          <NavBarLink to="/">
            <div className="flex">
              <ChartBarIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Reports</h2>
            </div>
            <ProIcon />
          </NavBarLink>
        </ul>
        <ul className="border-t-2 border-gray-200 pt-4">
          <NavBarLink to="/">
            <div className="flex">
              <CogIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Account</h2>
            </div>
          </NavBarLink>
          <NavBarLink to="/">
            <div className="flex">
              <LogoutIcon className="h-6 w-6 mr-3" />
              <h2 className="col-start-1 col-end-4">Log Out</h2>
            </div>
          </NavBarLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

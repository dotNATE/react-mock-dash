import { PlusIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import DashboardWidgetHeader from "./../../../Atoms/DashboardWidgetHeader/index";

const NewModelWidget = (): JSX.Element => {
  return (
    <>
      <DashboardWidgetHeader content="Model a new deal" />
      <NavLink to="model">
        <div className="grid grid-cols-1 grid-rows-1 justify-center bg-blue-50 rounded-lg cursor-pointer">
          <PlusIcon className="h-16 w-16 text-gray-600" />
        </div>
      </NavLink>
    </>
  );
};

export default NewModelWidget;

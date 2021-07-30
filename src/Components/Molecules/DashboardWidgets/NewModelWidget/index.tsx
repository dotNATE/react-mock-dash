import { PlusIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import DashboardWidgetHeader from "./../../../Atoms/DashboardWidgetHeader/index";

const NewModelWidget = (): JSX.Element => {
  return (
    <>
      <DashboardWidgetHeader content="Model a new deal" />
      <NavLink to="model">
        <div className="flex justify-center items-center h-full bg-blue-50 rounded-lg cursor-pointer">
          <PlusIcon className="h-16 w-16 text-gray-600" />
        </div>
      </NavLink>
    </>
  );
};

export default NewModelWidget;

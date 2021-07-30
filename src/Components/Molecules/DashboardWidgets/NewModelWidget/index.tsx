import { PlusIcon } from "@heroicons/react/outline";
import DashboardWidgetHeader from "./../../../Atoms/DashboardWidgetHeader/index";

const NewModelWidget = (): JSX.Element => {
  return (
    <>
      <DashboardWidgetHeader content="Model a new deal" />
      <div className="flex justify-center items-center h-full bg-blue-50 rounded-lg cursor-pointer">
        <PlusIcon className="h-16 w-16 text-gray-600" />
      </div>
    </>
  );
};

export default NewModelWidget;

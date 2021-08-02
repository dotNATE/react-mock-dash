type DashboardWidgetHeaderProps = {
  content: string;
};

const DashboardWidgetHeader = ({
  content,
}: DashboardWidgetHeaderProps): JSX.Element => (
  <h2 className="absolute w-full bg-black text-white justify-center rounded-t-lg h-12 font-medium flex items-center">
    {content}
  </h2>
);

export default DashboardWidgetHeader;

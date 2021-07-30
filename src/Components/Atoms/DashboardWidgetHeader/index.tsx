type DashboardWidgetHeaderProps = {
  content: string;
};

const DashboardWidgetHeader = ({
  content,
}: DashboardWidgetHeaderProps): JSX.Element => (
  <h2 className="absolute  w-full flex bg-black text-white rounded-t-lg h-12 justify-center items-center font-medium">
    {content}
  </h2>
);

export default DashboardWidgetHeader;

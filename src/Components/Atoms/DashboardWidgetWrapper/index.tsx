type DashboardWidgetWrapperProps = {
  overflow?: boolean;
  children: JSX.Element | JSX.Element[];
};

const DashboardWidgetWrapper = ({
  children,
  overflow,
}: DashboardWidgetWrapperProps): JSX.Element => {
  return (
    <div
      className={`h-full w-full shadow-md rounded-lg bg-white ${
        overflow ? "overflow-y-auto" : null
      }`}
    >
      {children}
    </div>
  );
};

export default DashboardWidgetWrapper;

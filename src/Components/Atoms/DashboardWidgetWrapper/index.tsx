type DashboardWidgetWrapperProps = {
  colStart: number;
  colSpan: number;
  rowStart: number;
  rowSpan: number;
  overflow?: boolean;
  children: JSX.Element | JSX.Element[];
};

const DashboardWidgetWrapper = ({
  colStart,
  colSpan,
  rowStart,
  rowSpan,
  children,
  overflow,
}: DashboardWidgetWrapperProps): JSX.Element => {
  return (
    <div
      className={`relative shadow-md rounded-lg bg-white col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} ${
        overflow ? "overflow-y-auto" : null
      }`}
    >
      {children}
    </div>
  );
};

export default DashboardWidgetWrapper;

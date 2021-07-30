type NavNotificationCounterProps = {
  count: Number;
};

const NavNotificationCounter = ({
  count,
}: NavNotificationCounterProps): JSX.Element => (
  <div className="flex justify-center">
    <div className="flex justify-center bg-red-600 rounded-full text-white w-6 h-6 text-center">
      <div className="text-center">{count}</div>
    </div>
  </div>
);

export default NavNotificationCounter;

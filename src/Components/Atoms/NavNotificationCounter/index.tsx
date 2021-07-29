type NavNotificationCounterProps = {
  count: Number;
};

const NavNotificationCounter = ({
  count,
}: NavNotificationCounterProps): JSX.Element => (
  <div className="flex justify-center items-center">
    <div className="flex w-4/5 h-4/5 justify-center items-center text-2xl bg-red-600 rounded-full place-content-center text-white">
      {count}
    </div>
  </div>
);

export default NavNotificationCounter;

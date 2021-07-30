type NavDealCounterProps = {
  count: Number;
};

const NavDealCounter = ({ count }: NavDealCounterProps): JSX.Element => (
  <div className="text-center w-6 h-6 leading-snug border-2 border-gray-400">
    {count}
  </div>
);

export default NavDealCounter;

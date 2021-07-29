type NavDealCounterProps = {
  count: Number;
};

const NavDealCounter = ({ count }: NavDealCounterProps): JSX.Element => (
  <div className="flex justify-center items-center">
    <div className="text-2xl py-3 text-center">{count}</div>
  </div>
);

export default NavDealCounter;

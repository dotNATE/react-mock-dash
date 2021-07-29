type MapFilterButtonProps = {
  content: string;
};

const MapFilterButton = ({ content }: MapFilterButtonProps): JSX.Element => (
  <div className="ml-2 flex-shrink-0 flex justify-center items-center">
    <button className="flex justify-center items-center h-8 w-24 border-2 border-black px-2 text-s leading-5 font-semibold rounded-full bg-white">
      {content}
    </button>
  </div>
);

export default MapFilterButton;

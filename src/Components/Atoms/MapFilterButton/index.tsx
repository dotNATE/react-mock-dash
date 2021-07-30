type MapFilterButtonProps = {
  content: string;
};

const MapFilterButton = ({ content }: MapFilterButtonProps): JSX.Element => (
  <div className="flex-shrink-0 flex justify-center items-center">
    <button className="flex justify-center items-center h-8 w-24 border border-black p-2 text-s leading-5 font-medium rounded-md bg-white hover:bg-gray-200 active:bg-gray-300">
      {content}
    </button>
  </div>
);

export default MapFilterButton;

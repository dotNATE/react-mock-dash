type props = {
  handleClick?: any;
  handleKeyDown?: any;
};

export const NextSlideButton = ({ handleClick, handleKeyDown }: props): any => {
  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center bg-pink-600 hover:bg-pink-700 active:bg-pink-800 w-20 text-white font-medium shadow-md h-10 cursor-pointer mt-6"
    >
      Next
    </div>
  );
};

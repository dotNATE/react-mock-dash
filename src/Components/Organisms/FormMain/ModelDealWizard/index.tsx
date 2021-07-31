import { useEffect, Children } from "react";

type ModelDealWizardProps = {
  children: JSX.Element | JSX.Element[];
  submitHandler: any;
  setMaxStep: any;
};

const ModelDealWizard = ({
  children,
  submitHandler,
  setMaxStep,
}: ModelDealWizardProps): JSX.Element => {
  useEffect(() => {
    const countChildren = Children.toArray(children).length;
    setMaxStep(countChildren);
  });

  return (
    <form
      action="/"
      onSubmit={submitHandler}
      className="grid grid-cols-1 grid-rows-1 items-center backdrop-filter focus-within:backdrop-blur-sm focus-within:backdrop-grayscale transition duration-700"
    >
      {children}
    </form>
  );
};

export default ModelDealWizard;

type ModelDealStepProps = {
  currentStep: number;
  targetStep: number;
  children: JSX.Element | JSX.Element[];
};

const ModelDealStep = ({
  children,
  currentStep,
  targetStep,
}: ModelDealStepProps): any => {
  if (currentStep !== targetStep) {
    return null;
  }
  return (
    <div className="h-full grid grid-cols-8 grid-rows-6 py-4">{children}</div>
  );
};

export default ModelDealStep;

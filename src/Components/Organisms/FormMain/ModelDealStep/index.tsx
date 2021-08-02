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
  return <div className="h-full p-20">{children}</div>;
};

export default ModelDealStep;

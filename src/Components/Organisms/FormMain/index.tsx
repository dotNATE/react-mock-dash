type FormMainProps = {
  children: JSX.Element | JSX.Element[];
  currentStep: number;
};

const FormMain = ({ children, currentStep }: FormMainProps): JSX.Element => {
  let bgUrl;

  if (currentStep === 1) bgUrl = "bg-model-wiz-1 bg-cover";

  return (
    <div className={"h-full w-full " + bgUrl}>
      <div className="bg-black bg-opacity-40">{children}</div>
    </div>
  );
};

export default FormMain;

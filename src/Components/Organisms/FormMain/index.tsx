type FormMainProps = {
  children: JSX.Element | JSX.Element[];
  currentStep: number;
};

const FormMain = ({ children, currentStep }: FormMainProps): JSX.Element => (
  <div className={`h-full w-full bg-cover bg-top bg-model-wiz-${currentStep}`}>
    <div className="bg-black bg-opacity-40">{children}</div>
  </div>
);

export default FormMain;

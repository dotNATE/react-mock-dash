import { useState } from "react";

import { Formik } from "formik";

import DashboardLayout from "../../Atoms/DashboardLayout";
import WizardMain from "./WizardMain";
import ModelDealStep from "../../Organisms/FormMain/ModelDealStep";

const FormikSandbox = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <DashboardLayout>
      <Formik initialValues={{ company: "" }} onSubmit={handleSubmit}>
        <WizardMain
          currentStep={currentStep}
          onSubmit={handleSubmit}
          stepSetter={setCurrentStep}
        >
          <ModelDealStep currentStep={currentStep} targetStep={1}>
            <div>
              <input
                id="purchasePrice"
                name="purchasePrice"
                type="text"
                className="peer"
                placeholder="Purchase Price"
              />
              <label
                htmlFor="purchasePrice"
                className="peer-placeholder-shown:text-red-500"
              >
                Purchase Price
              </label>
            </div>
          </ModelDealStep>
          <ModelDealStep currentStep={currentStep} targetStep={2}>
            <div>test step 2</div>
          </ModelDealStep>
          <ModelDealStep currentStep={currentStep} targetStep={3}>
            <div>test step 3</div>
          </ModelDealStep>
        </WizardMain>
      </Formik>
    </DashboardLayout>
  );
};

export default FormikSandbox;

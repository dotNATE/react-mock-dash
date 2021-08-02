import { useState } from "react";

import { useFormik, FormikErrors } from "formik";

import DashboardLayout from "../../Atoms/DashboardLayout";
import WizardMain from "./WizardMain";
import ModelDealStep from "../../Organisms/FormMain/ModelDealStep";
import NumberInputField from "./WizardMain/Components/Atoms/NumberInputField/index";

type FormValues = {
  purchasePrice: number | undefined;
};

const FormikSandbox = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);

  const validate = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.purchasePrice) {
      errors.purchasePrice = "Required";
    } else if (values.purchasePrice < 50000) {
      errors.purchasePrice = "Must be at least £50k";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      purchasePrice: undefined,
    },
    validate,
    onSubmit: (e: any) => {
      e.preventDefault();
    },
  });

  return (
    <DashboardLayout>
      <WizardMain
        currentStep={currentStep}
        onSubmit={formik.handleSubmit}
        stepSetter={setCurrentStep}
      >
        <ModelDealStep currentStep={currentStep} targetStep={1}>
          <div className="h-full flex flex-col justify-center">
            <div className="text-white font-medium tracking-wider mb-4">
              <div className="py-4 text-2xl">
                <h1>Great, let's get started with the Purchase Price</h1>
              </div>
              <div className="py-4 text-lg">
                <p>This is includes anything Lorem Ipsum.</p>
              </div>
            </div>
            <div className="w-4/5 mx-auto mt-4">
              <NumberInputField
                name="purchasePrice"
                label="Purchase Price (GBP)"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.purchasePrice}
                error={formik.errors.purchasePrice}
                touched={formik.touched.purchasePrice}
              />
            </div>
          </div>
        </ModelDealStep>

        <ModelDealStep currentStep={currentStep} targetStep={2}>
          <div>test step 2</div>
        </ModelDealStep>

        <ModelDealStep currentStep={currentStep} targetStep={3}>
          <div>test step 3</div>
        </ModelDealStep>
      </WizardMain>
    </DashboardLayout>
  );
};

export default FormikSandbox;

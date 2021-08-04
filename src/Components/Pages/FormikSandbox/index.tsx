import { useState } from "react";

import { Formik, Field, FormikErrors } from "formik";

import DashboardLayout from "../../Atoms/DashboardLayout";
import WizardMain from "./WizardMain";
import ModelDealStep from "../../Organisms/FormMain/ModelDealStep";
import NumberInputField from "./WizardMain/Components/Atoms/NumberInputField/index";
import TextInputField from "./WizardMain/Components/Atoms/TextInputField";
import SelectInputField from "./WizardMain/Components/Atoms/SelectInputField/index";
import OptionsInputArray from "../../Organisms/FormMain/ModelDealStep2/SelectInput/OptionsInputArray";
import { RadioInputGroup } from "./WizardMain/Components/Atoms/RadioInputGroup/index";

type FormValues = {
  purchasePrice: number | undefined;
  gdvCommercial: number | undefined;
  gdvResidential: number | undefined;
  company: string | undefined;
  mobAndBuildPeriod: number | undefined;
  exitStrategy: string | undefined;
};

const step4Options = [
  { label: "3 Months", value: 3 },
  { label: "6 Months", value: 6 },
  { label: "9 Months", value: 9 },
  { label: "12 Months", value: 12 },
  { label: "15 Months", value: 15 },
  { label: "18 Months", value: 18 },
  { label: "21 Months", value: 21 },
  { label: "24 Months", value: 24 },
];

const step5Options = [
  {
    value: "sell",
    label: "Sell",
  },
  {
    value: "refinance",
    label: "Refinance",
  },
  {
    value: "testField",
    label: "Test Field",
  },
  {
    value: "testField2",
    label: "Test Field 2",
  },
];

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const FormikSandbox = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);

  const validate = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    if (!values.company) {
      errors.company = "Required";
    } else if (values.company.length < 3) {
      errors.company = "What business' name is that short? Try again, Nate.";
    }

    if (!values.purchasePrice) {
      errors.purchasePrice = "Required";
    } else if (values.purchasePrice < 50000) {
      errors.purchasePrice = "Must be at least £50k";
    }

    if (!values.gdvCommercial) {
      errors.gdvCommercial = "Required";
    } else if (values.gdvCommercial > 50000) {
      errors.gdvCommercial = "Cannot be more than £50k";
    }

    if (!values.gdvResidential) {
      errors.gdvResidential = "Required";
    } else if (values.gdvResidential < 115000) {
      errors.gdvResidential = "Must be at least £115k";
    }

    if (!values.mobAndBuildPeriod) {
      errors.mobAndBuildPeriod = "Required";
    } else if (values.mobAndBuildPeriod <= 0) {
      errors.mobAndBuildPeriod = "Please select an option";
    }

    return errors;
  };

  return (
    <DashboardLayout>
      <Formik
        initialValues={{
          purchasePrice: undefined,
          gdvCommercial: undefined,
          gdvResidential: undefined,
          company: undefined,
          mobAndBuildPeriod: undefined,
          exitStrategy: undefined,
        }}
        onSubmit={(data, { setSubmitting }) => {
          console.log(data);
        }}
        validate={validate}
      >
        {({ values, errors, touched, isSubmitting, handleSubmit }) => (
          <WizardMain
            currentStep={currentStep}
            onSubmit={handleSubmit}
            stepSetter={setCurrentStep}
            isSubmitting={isSubmitting}
          >
            <ModelDealStep currentStep={currentStep} targetStep={1}>
              <div className="h-full flex flex-col justify-center">
                <div className="text-black font-medium tracking-wider mb-4">
                  <div className="py-4 text-2xl">
                    <h1>What company are you joining us from today?</h1>
                  </div>
                </div>
                <div className="w-4/5 mx-auto mt-4">
                  <Field
                    name="company"
                    label="Company Name"
                    as={TextInputField}
                    error={errors.company}
                    touched={touched.company}
                  />
                </div>
              </div>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={2}>
              <div className="h-full flex flex-col justify-center">
                <div className="text-black font-medium tracking-wider mb-4">
                  <div className="py-4 text-2xl">
                    <h1>{`Fantastic! It's great to have ${values.company} on board with SQFT`}</h1>
                  </div>
                  <div className="py-4 text-lg">
                    <p>Let's get started with the property Purchase Price.</p>
                  </div>
                </div>
                <div className="w-4/5 mx-auto mt-4">
                  <Field
                    name="purchasePrice"
                    as={NumberInputField}
                    label="Purchase Price (GBP)"
                    error={errors.purchasePrice}
                    touched={touched.purchasePrice}
                  />
                </div>
              </div>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={3}>
              <div className="h-4/5 mx-auto flex flex-col justify-between">
                <div className="text-black font-medium tracking-wider mb-4">
                  <div className="py-4 text-2xl">
                    <h1>
                      {`Holy Moly! You shelled out ${formatter.format(
                        Number(values.purchasePrice)
                      )},
                  that's great!`}
                    </h1>
                  </div>
                  <div className="py-4 text-lg">
                    <p>What about any Gross Domestic Value costs?</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 grid-rows-2 gap-5">
                  <div className="w-4/5 mx-auto col-start-1 col-span-3 row-start-1">
                    <Field
                      name="gdvCommercial"
                      as={NumberInputField}
                      label="GDV Commercial (GBP)"
                      error={errors.gdvCommercial}
                      touched={touched.gdvCommercial}
                    />
                  </div>
                  <div className="w-4/5 mx-auto col-start-2 col-span-3 row-start-2">
                    <Field
                      name="gdvResidential"
                      as={NumberInputField}
                      label="GDV Residential (GBP)"
                      error={errors.gdvResidential}
                      touched={touched.gdvResidential}
                    />
                  </div>
                </div>
              </div>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={4}>
              <div className="h-full flex flex-col mt-6">
                <div className="text-black font-medium tracking-wider mb-4">
                  <div className="py-4 text-2xl">
                    <h1>{`So, ${values.company}, just how long is this going to take?`}</h1>
                  </div>
                </div>
                <div className="w-4/5 mx-auto mt-4">
                  <Field
                    name="mobAndBuildPeriod"
                    label="Mobilisation and Build Period"
                    as={SelectInputField}
                    error={errors.mobAndBuildPeriod}
                    touched={touched.mobAndBuildPeriod}
                  >
                    <OptionsInputArray data={step4Options} />
                  </Field>
                </div>
              </div>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={5}>
              <div className="h-full flex flex-col mt-6">
                <div className="text-black font-medium tracking-wider mb-4">
                  <div className="py-4 text-2xl">
                    <h1>{`Wow, ${values.mobAndBuildPeriod} months? This is starting to shape up!`}</h1>
                  </div>
                  <h2>
                    Do you have an exit strategy in mind? -{values.exitStrategy}
                  </h2>
                </div>
                <div className="w-3/5 mx-auto mt-4">
                  <Field
                    name="exitStrategy"
                    as={RadioInputGroup}
                    error={errors.exitStrategy}
                    touched={touched.exitStrategy}
                    options={step5Options}
                  />
                </div>
              </div>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={6}>
              <Field name="company" as={TextInputField} label="Company Name" />
              <Field
                name="purchasePrice"
                as={NumberInputField}
                label="Purchase Price"
              />
              <Field
                name="gdvCommercial"
                as={NumberInputField}
                label="GDV Commercial"
              />
              <Field
                name="gdvResidential"
                as={NumberInputField}
                label="GDV Residential"
              />
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </ModelDealStep>
          </WizardMain>
        )}
      </Formik>
    </DashboardLayout>
  );
};

export default FormikSandbox;

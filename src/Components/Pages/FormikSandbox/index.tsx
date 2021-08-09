import { useState } from "react";

import { Formik, Field, FormikErrors } from "formik";

import DashboardLayout from "../../Atoms/DashboardLayout";
import WizardMain from "./WizardMain";
import ModelDealStep from "../../Organisms/FormMain/ModelDealStep";
import TextInputField from "./WizardMain/Components/Atoms/TextInputField";
import { RadioInputGroup } from "./WizardMain/Components/Atoms/RadioInputGroup/index";
import { ExclamationIcon } from "@heroicons/react/outline";
import { NextSlideButton } from "./WizardMain/Components/Atoms/NextSlideButton";
import { RadioOption } from "./WizardMain/Components/Atoms/RadioInputGroup/RadioOption";

type FormValues = {
  purchasePrice: number | undefined;
  gdvCommercial: number | undefined;
  gdvResidential: number | undefined;
  company: string | undefined;
  mobAndBuildPeriod: number | undefined;
  exitStrategy: string | undefined;
  startDate: number | undefined;
  endDate: number | undefined;
};

// const step4Options = [
//   { label: "3 Months", value: 3 },
//   { label: "6 Months", value: 6 },
//   { label: "9 Months", value: 9 },
//   { label: "12 Months", value: 12 },
//   { label: "15 Months", value: 15 },
//   { label: "18 Months", value: 18 },
//   { label: "21 Months", value: 21 },
//   { label: "24 Months", value: 24 },
// ];

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
    value: "hold",
    label: "Hold",
  },
  {
    value: "other",
    label: "Other",
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

  const incrementCurrentStep = (): void => {
    if (currentStep < 7) setCurrentStep(currentStep + 1);
  };

  const decrementCurrentStep = (): void => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleKeyDown = (e: any): void => {
    if (e.key === "Enter") incrementCurrentStep();
  };

  const handleWheel = (e: any): void => {
    if (e.deltaY < 0) decrementCurrentStep();
    if (e.deltaY > 0) incrementCurrentStep();
  };

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

    if (!values.exitStrategy) {
      errors.exitStrategy = "Required";
    }

    if (!values.startDate) {
      errors.startDate = "Required";
    } else if (new Date(values.startDate).getTime() < new Date().getTime()) {
      errors.startDate = "Your project has to start in the future!";
    } else if (!values.endDate) {
      errors.endDate = "Required";
    } else {
      const startDate = new Date(values.startDate).getTime();
      const endDate = new Date(values.endDate).getTime();
      if (startDate === endDate) {
        errors.endDate = "They can't be on the same day!";
      } else if (startDate > endDate) {
        errors.endDate = "Your end date cannot be before the start date.";
      }
    }

    return errors;
  };

  return (
    <DashboardLayout onKeyDown={handleKeyDown} onWheel={handleWheel}>
      <Formik
        initialValues={{
          purchasePrice: undefined,
          gdvCommercial: undefined,
          gdvResidential: undefined,
          company: undefined,
          mobAndBuildPeriod: undefined,
          exitStrategy: undefined,
          startDate: undefined,
          endDate: undefined,
        }}
        onSubmit={(data, { setSubmitting }) => {
          console.log(data);
        }}
        validate={validate}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleSubmit,
          handleBlur,
          handleChange,
        }) => (
          <WizardMain
            currentStep={currentStep}
            onSubmit={handleSubmit}
            stepSetter={setCurrentStep}
            isSubmitting={isSubmitting}
          >
            <ModelDealStep currentStep={currentStep} targetStep={1}>
              <div className="h-full flex flex-col justify-start text-black font-medium tracking-wider leading-relaxed p-48">
                <h1 className="text-2xl my-4">Hi there! My name's Hugo.</h1>
                <span>
                  I'm here to help you make a model of your investment.
                </span>
                <span>
                  I need to know the name of your business to get started:
                </span>
                <div className="mt-12">
                  <Field
                    name="company"
                    label="Company Name"
                    as={TextInputField}
                    error={errors.company}
                    touched={touched.company}
                    type="text"
                  />
                  {!errors.company && values.company && (
                    <NextSlideButton handleClick={incrementCurrentStep} />
                  )}
                </div>
              </div>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={2}>
              <div className="h-full flex flex-col justify-start text-black font-medium tracking-wider leading-relaxed p-48">
                <h1 className="text-2xl my-4">
                  Fantastic! It's great to have {values.company} on board with
                  Squarefoot
                </h1>
                <span>Now let's get stuck straight in...</span>
                <span>What is the purchase price of the development?:</span>
                <div className="mt-12">
                  <Field
                    name="purchasePrice"
                    as={TextInputField}
                    label="Purchase Price (GBP)"
                    type="number"
                    error={errors.purchasePrice}
                    touched={touched.purchasePrice}
                  />
                  {!errors.purchasePrice && values.purchasePrice && (
                    <NextSlideButton handleClick={incrementCurrentStep} />
                  )}
                </div>
              </div>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={3}>
              <div className="h-full flex flex-col justify-start text-black font-medium tracking-wider leading-relaxed p-48">
                <h1 className="text-2xl my-4">
                  Holy Moly! You shelled out
                  {" " + formatter.format(Number(values.purchasePrice))}, that's
                  great!
                </h1>
                <span>
                  Please, give me a number for both commercial and residential
                  gross domestic value.
                </span>
                <span>These are both required.</span>
                <div className="mt-12 grid grid-cols-4 grid-rows-2 gap-10">
                  <div className="col-start-1 col-span-3 row-start-1 row-span-1">
                    <Field
                      name="gdvCommercial"
                      as={TextInputField}
                      type="number"
                      label="GDV Commercial (GBP)"
                      error={errors.gdvCommercial}
                      touched={touched.gdvCommercial}
                    />
                  </div>
                  <div className="col-start-2 col-span-3 row-start-2 row-span-1">
                    <Field
                      name="gdvResidential"
                      as={TextInputField}
                      type="number"
                      label="GDV Residential (GBP)"
                      error={errors.gdvResidential}
                      touched={touched.gdvResidential}
                    />
                  </div>
                  <div className="col-start-1 col-span-1 row-start-2 row-span-1">
                    {!errors.gdvCommercial &&
                      values.gdvCommercial &&
                      !errors.gdvResidential &&
                      values.gdvResidential && (
                        <NextSlideButton handleClick={incrementCurrentStep} />
                      )}
                  </div>
                </div>
              </div>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={4}>
              <div className="h-full flex flex-col justify-start text-black font-medium tracking-wider leading-relaxed p-48">
                <h1 className="text-2xl my-4">
                  So, {values.company}, just how long is this going to take?
                </h1>
                <span>
                  I'm here to help you make a model of your investment.
                </span>
                <span>
                  I need to know the name of your business to get started:
                </span>
                <div className="mt-12">
                  <div className="flex justify-between w-1/2">
                    <div className="w-48">
                      <Field
                        name="startDate"
                        as={TextInputField}
                        type="date"
                        error={errors.startDate}
                        touched={touched.startDate}
                        label="Start Date"
                      />
                    </div>
                    {!errors.startDate && values.startDate && (
                      <div className="w-48">
                        <Field
                          name="endDate"
                          as={TextInputField}
                          type="date"
                          error={errors.endDate}
                          touched={touched.endDate}
                          label="End Date"
                          minValue={values.startDate}
                        />
                      </div>
                    )}
                  </div>
                  {!errors.startDate &&
                    values.startDate &&
                    !errors.endDate &&
                    values.endDate && (
                      <NextSlideButton handleClick={incrementCurrentStep} />
                    )}
                </div>
              </div>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={5}>
              <div className="h-full flex flex-col justify-start text-black font-medium tracking-wider leading-relaxed p-48">
                <h1 className="text-2xl my-4">
                  Gee whiz, {} months, that's a long one! Now, I need to know
                  about your exit strategy...
                </h1>
                <span>This is an important one!</span>
                <div className="mt-12">
                  <div className="text-2xl text-white font-medium flex justify-center">
                    <Field
                      name="exitStrategy"
                      as={RadioInputGroup}
                      error={errors.exitStrategy}
                      touched={touched.exitStrategy}
                    >
                      {Array.isArray(step5Options) &&
                        step5Options.map((option) => (
                          <div className="h-20 w-40 mx-auto">
                            <RadioOption
                              name="exitStrategy"
                              label={option.label}
                              value={option.value}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              parentValue={values.exitStrategy}
                            />
                          </div>
                        ))}
                    </Field>
                    {errors.exitStrategy && touched.exitStrategy && (
                      <div className="absolute text-red-600 flex font-medium pt-2 h-6 ">
                        <ExclamationIcon className="h-6 w-6 mr-3" />
                        {errors.exitStrategy}
                      </div>
                    )}
                  </div>
                  {!errors.exitStrategy && values.exitStrategy && (
                    <div className="text-base flex justify-center">
                      <NextSlideButton handleClick={incrementCurrentStep} />
                    </div>
                  )}
                </div>
              </div>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={6}>
              <Field name="company" as={TextInputField} label="Company Name" />
              <pre className="mt-2">{JSON.stringify(values, null, 2)}</pre>
            </ModelDealStep>

            <ModelDealStep currentStep={currentStep} targetStep={7}>
              <h1 className="font-bold">Plans for future</h1>
              <ul className="p-8">
                <li className="hover:text-pink-400 transition-all">
                  Remove Nav during form to keep focus
                </li>
                <li className="hover:text-pink-400 transition-all">
                  Add animated transitions between slides
                </li>
                <li className="hover:text-pink-400 transition-all">
                  Add display for user inputs so that it can be monitored
                  throughout(?)
                </li>
                <li className="hover:text-pink-400 transition-all">
                  Input confirmation screen prior to submit
                </li>
                <li className="pl-4 hover:text-pink-400 transition-all">
                  Use this screen to navigate to specific points in the form
                </li>
                <li className="hover:text-pink-400 transition-all">
                  Submit success screen
                </li>
                <li className="hover:text-pink-400 transition-all">
                  Transport user to location/page of first error
                </li>
                <li className="hover:text-pink-400 transition-all">
                  Better buttons for form navigation - COMPLETE
                </li>
                <li className="hover:text-pink-400 transition-all">
                  Smart buttons for form nav (i.e. appear once touched & w/o
                  errors) - COMPLETE?
                </li>
                <li className="hover:text-pink-400 transition-all">
                  Gain a better understanding of what makes components resuable
                </li>
                <li className="pl-4 hover:text-pink-400 transition-all">
                  Styled Components vs Functional Components
                </li>
                <li className="pl-4 hover:text-pink-400 transition-all">
                  Test Input components to see if styles/sizing is accidentally
                  enforced
                </li>
              </ul>
            </ModelDealStep>
          </WizardMain>
        )}
      </Formik>
    </DashboardLayout>
  );
};

export default FormikSandbox;

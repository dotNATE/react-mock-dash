type userInput = {
  company: string;
  purchasePrice: number;
  acquisitionCosts: number;
  buildCost: number;
  professionalFees: number;
  localAuthorityCosts: number;
  disposalCosts: number;
  gDVResidential: number;
  gDVCommercial: number;
};

type CompanyNameInputProps = {
  formState: userInput;
  changeHandler: any;
  currentStep: number;
};

const ModelDealStep2 = ({
  formState,
  changeHandler,
  currentStep,
}: CompanyNameInputProps): any => {
  if (currentStep !== 2) {
    return null;
  }
  return (
    <div>
      <label htmlFor="purchasePrice">
        Purchase Price
        <input
          type="number"
          id="purchasePrice"
          name="purchasePrice"
          onChange={changeHandler}
          value={formState.purchasePrice}
        />
      </label>

      <label htmlFor="acquisitionCosts">
        Acquisition Costs
        <input
          type="number"
          id="acquisitionCosts"
          name="acquisitionCosts"
          onChange={changeHandler}
          value={formState.acquisitionCosts}
        />
      </label>

      <label htmlFor="buildCost">
        Build Cost
        <input
          type="number"
          id="buildCost"
          name="buildCost"
          onChange={changeHandler}
          value={formState.buildCost}
        />
      </label>

      <label htmlFor="professionalFees">
        ProfessionalFees
        <input
          type="number"
          id="professionalFees"
          name="professionalFees"
          onChange={changeHandler}
          value={formState.professionalFees}
        />
      </label>

      <label htmlFor="localAuthorityCosts">
        Local Authority Costs
        <input
          type="number"
          id="localAuthorityCosts"
          name="localAuthorityCosts"
          onChange={changeHandler}
          value={formState.localAuthorityCosts}
        />
      </label>

      <label htmlFor="disposalCosts">
        Disposal Costs
        <input
          type="number"
          id="disposalCosts"
          name="disposalCosts"
          onChange={changeHandler}
          value={formState.disposalCosts}
        />
      </label>

      <label htmlFor="gDVResidential">
        GDV Residential
        <input
          type="number"
          id="gDVResidential"
          name="gDVResidential"
          onChange={changeHandler}
          value={formState.gDVResidential}
        />
      </label>

      <label htmlFor="gDVCommercial">
        GDV Commercial
        <input
          type="number"
          id="gDVCommercial"
          name="gDVCommercial"
          onChange={changeHandler}
          value={formState.gDVCommercial}
        />
      </label>
    </div>
  );
};

export default ModelDealStep2;

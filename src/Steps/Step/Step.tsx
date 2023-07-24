import IngredientsWithQuantity from "../../Ingredients/IngredientsWithQuantity/IngredientsWithQuantity";
import { StepType } from "../StepType";
import './Step.css'

export const Step = ({ etape }: { etape: StepType }) => {
  return (
    <div className="step-container">
      <div>
        {etape.order}. {etape.description}
      </div>

      <div className="step-ingredients-container">
        {etape.ingredients && (
          <IngredientsWithQuantity
            ingredientsWithQuantity={etape.ingredients}
          />
        )}
      </div>
    </div>
  );
};

export default Step;

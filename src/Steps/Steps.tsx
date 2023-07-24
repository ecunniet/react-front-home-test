import Step from "./Step/Step";
import { StepType } from "./StepType";

export const Steps = ({ steps }: { steps: StepType[] }) => {
  return <>{steps && steps.map((obj) => <Step etape={obj} key={obj.order} />)}</>;
};

export default Steps;

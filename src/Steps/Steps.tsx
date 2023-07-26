import Step from "./Step/Step";
import { StepType } from "./StepType";

const Steps = ({ steps }: { steps: StepType[] }) => {
  return <div>{steps && steps.map((obj) => <Step etape={obj} key={obj.order} />)}</div>;
};

export default Steps;

import React, { SFC, Fragment } from "react";
import DocGroup from "../../components/doc-group";
import Progress from "../../components/progress";
import { BarProps } from "../../components/progress/progress-bar";

const Value: SFC<BarProps> = (props) => {
  const { progress } = props;
  return <span className="ml-4">{progress}%</span>;
};
const HOCBar = Progress.HOCProgressBar(Value);

const ProgressBarModule: SFC = () => {
  return (
    <Fragment>
      <DocGroup name="default">
        <Progress.Bar progress={24} />
      </DocGroup>
      <DocGroup name="color">
        <Progress.Bar progress={32} color="bg-success" />
      </DocGroup>
      <DocGroup name="background" className="w-screen flex-wrap">
        <Progress.Bar progress={32} background="bg-transparent" />
        <Progress.Bar progress={32} background="bg-primary-opacity-2" />
      </DocGroup>
      <DocGroup name="size">
        <Progress.Bar progress={30} size="h-4" />
      </DocGroup>
      <DocGroup name="Radius">
        <Progress.Bar progress={64} size="h-4" radius="rounded-sm" />
      </DocGroup>
      <DocGroup name="HOC">{<HOCBar progress={24} />}</DocGroup>
    </Fragment>
  );
};

export default ProgressBarModule;

import React, { SFC, Fragment } from "react";
import DocGroup from "../../components/doc-group";
import Progress from "../../components/progress";

const ProgressCircleModule: SFC = () => {
  return (
    <Fragment>
      <DocGroup name="default">
        <Progress.Circle progress={60} />
      </DocGroup>
      <DocGroup name="color">
        <Progress.Circle progress={24} />
        <Progress.Circle progress={24} color="text-success" />
      </DocGroup>
      <DocGroup name="size">
        <Progress.Circle progress={64} size={128} strokeWidth={8} />
      </DocGroup>
      <DocGroup name="text">
        <Progress.Circle progress={72} text={true} />
        <Progress.Circle
          progress={32}
          text={true}
          font="text-lg text-warning"
        />
      </DocGroup>
      <DocGroup name="background">
        <Progress.Circle progress={72} background="text-transparent" />
        <Progress.Circle progress={72} background="text-warning" />
      </DocGroup>
    </Fragment>
  );
};

export default ProgressCircleModule;

import React, { FC } from "react";
import DocGroup from "../../components/doc-group";
import Spinner from "../../components/spinner/spinner";

const SpinnerModule: FC = () => {
  return (
    <>
      <DocGroup name="default">
        <div>
          <Spinner></Spinner>
          <Spinner max={10} min={1} step={2}></Spinner>
        </div>
      </DocGroup>
    </>
  );
};

SpinnerModule.displayName = "SpinnerModule";

export default SpinnerModule;

import React, { useState } from "react";
import DocGroup from "../../components/doc-group";
import Loading, { LoaderDotProps } from "../../components/loading";
import CheckBox from "../../components/checkbox";

const BarGroup: React.SFC = (props) => {
  const [startState, setStart] = useState(false);
  const [successState, setSuccess] = useState(false);

  return (
    <React.Fragment>
      <div className={"w-screen"}>
        <Loading.Bar start={startState} end={successState}></Loading.Bar>
      </div>
      <div className={"w-screen"}>
        <CheckBox
          text="Start"
          checked={startState}
          onChange={() => {
            setStart(!startState);
          }}
        ></CheckBox>
        <CheckBox
          text="Success"
          checked={successState}
          onChange={() => {
            setSuccess(!successState);
          }}
        ></CheckBox>
      </div>
    </React.Fragment>
  );
};

const dot: LoaderDotProps[] = [
  {},
  { size: "12px" },
  { color: "text-primary" },
  { color: "text-primary", outColor: "var(--warning)" },
  { duration: ".2s" },
];

const LoadingModule: React.SFC = () => {
  return (
    <React.Fragment>
      <DocGroup name="dot">
        {dot.map((item, index) => {
          return <Loading.Dot {...item} key={index} />;
        })}
      </DocGroup>
      <DocGroup name="bar" className={"flex-wrap"}>
        <BarGroup />
      </DocGroup>
      <DocGroup name="circle">
        <div className="justify-center grid gap-4">
          <Loading.Circle></Loading.Circle>
        </div>
      </DocGroup>
    </React.Fragment>
  );
};

export default LoadingModule;

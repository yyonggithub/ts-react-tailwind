import React, { useState } from "react";
import DocGroup from "../../components/doc-group";
import Input from "../../components/input/input";

const InputModule: React.SFC = (props) => {
  const [value, setValue] = useState("");

  return (
    <React.Fragment>
      <DocGroup name={"default"}>
        <Input
          defaultValue="112233"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.nodeValue as string);
          }}
        />
      </DocGroup>
      {/* <DocGroup name={"auto-complete"}>

      </DocGroup> */}
    </React.Fragment>
  );
};

export default InputModule;

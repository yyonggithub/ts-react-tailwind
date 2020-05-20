import React, { SFC, Fragment, useState } from "react";
import DocGroup from "../../components/doc-group";
import Switch from "../../components/switch";

const list = [
  { checked: false, preset: "xs", text: "X Small" },
  { checked: false, preset: "sm", text: "Small" },
  { checked: false, text: "Medium" },
  { checked: false, preset: "lg", text: "Large" },
];

const color = [{ checked: false, text: "Customized" }];
const disabled = [
  { checked: false, disabled: true, text: "Disabled" },
  { checked: true, disabled: true, text: "Disabled" },
  {
    checked: false,
    disabled: true,
    disabledColor: "text-danger-opacity-6",
    text: "Disabled",
  },
];
const SwitchModule: SFC = () => {
  const [checked, setChecked] = useState(false);
  function handleChange() {
    setChecked(!checked);
  }
  return (
    <Fragment>
      <DocGroup name="default">
        <Switch checked={checked} onChange={handleChange} />
      </DocGroup>
      <DocGroup name="size">
        {list.map((item, index) => {
          return <Switch {...item} key={index} />;
        })}
      </DocGroup>
      <DocGroup name="Color">
        {color.map((item, index) => {
          return <Switch {...item} key={index} />;
        })}
      </DocGroup>
      <DocGroup name="disabled">
        {disabled.map((item, index) => {
          return <Switch {...item} key={index} />;
        })}
      </DocGroup>
      <DocGroup name="text position">
        <Switch>
          <span className="mr-2">Incredible Steel Table</span>
        </Switch>
      </DocGroup>
      <DocGroup name="custom">
        <Switch
          checked={checked}
          onChange={handleChange}
          className={{ "text-success": checked }}
          text={checked ? "Success" : "Please confirm"}
          leverColor={
            checked ? "bg-success" : "bg-gray-3 group-hover:bg-gray-4"
          }
          focusColor={
            checked ? "shadow-outline-success" : "bg-gray-4 shadow-outline-gray"
          }
        />
      </DocGroup>
    </Fragment>
  );
};

export default SwitchModule;

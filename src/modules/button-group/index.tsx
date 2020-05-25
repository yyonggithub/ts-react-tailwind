import * as React from "react";
import ButtonGroup, { Option } from "../../components/button/button-group";
import DocGroup from "../../components/doc-group";

const def = {
  options: [
    { text: "One" },
    { text: "Two" },
    { text: "Three" },
    { text: "Four" },
  ],
};

const disabled = {
  options: [
    { text: "One", disabled: true },
    { text: "Two" },
    { text: "Three" },
    { text: "Four" },
  ],
};

const comb: { options: Option[] } = {
  options: [
    {
      selected: true,
      text: "One",
      selectedColor: "bg-gray-6",
      focusColor: "shadow-outline-gray bg-gray-7 z-2",
    },
    {
      selected: false,
      text: "Two",
      selectedColor: "bg-success",
      focusColor: "shadow-outline-success bg-success-bright z-2",
      disabled: true,
    },
    {
      selected: false,
      text: "Three",
      selectedColor: "bg-warning",
      focusColor: "shadow-outline-warning bg-warning-bright z-2",
    },
    {
      selected: false,
      text: "Four",
      selectedColor: "bg-info",
      focusColor: "shadow-outline-info bg-info-bright z-2",
    },
  ],
};

const ButtonGroupModule: React.SFC = () => {
  return (
    <React.Fragment>
      <DocGroup name="default">
        <ButtonGroup options={def.options} />
      </DocGroup>
      <DocGroup name="size">
        <ButtonGroup options={def.options} size="h-6" />
        <ButtonGroup options={def.options} size="h-10" />
      </DocGroup>
      <DocGroup name="preset">
        <ButtonGroup options={def.options} preset="primary" />
        <ButtonGroup options={def.options} preset="secondary" />
      </DocGroup>
      <DocGroup name="combination & radius">
        <ButtonGroup
          radius="first:rounded-l-full"
          options={def.options}
        ></ButtonGroup>
        <ButtonGroup
          radius="last:rounded-r-full"
          options={def.options}
        ></ButtonGroup>
      </DocGroup>
      <DocGroup name="direction">
        <ButtonGroup orientation="vertical" options={def.options}></ButtonGroup>
        <ButtonGroup
          preset="primary"
          orientation="vertical"
          options={def.options}
        ></ButtonGroup>
        <ButtonGroup
          preset="secondary"
          orientation="vertical"
          options={def.options}
        ></ButtonGroup>
      </DocGroup>
      <DocGroup name="selector">
        <ButtonGroup selector={true} options={def.options}></ButtonGroup>
        <ButtonGroup
          selector={true}
          preset={"primary"}
          options={def.options}
        ></ButtonGroup>
        <ButtonGroup
          selector={true}
          preset={"secondary"}
          options={def.options}
        ></ButtonGroup>
      </DocGroup>
      <DocGroup name="toggleable">
        <ButtonGroup
          multiple={true}
          selector={true}
          toggleable={true}
          options={def.options}
        ></ButtonGroup>
      </DocGroup>
      <DocGroup name="disabled">
        <ButtonGroup disabled={true} options={def.options}></ButtonGroup>
        <ButtonGroup
          disabled={true}
          disabledColor="border border-gray-8 text-gray-3 bg-gray-7"
          options={def.options}
        ></ButtonGroup>
      </DocGroup>
      <DocGroup name="disabled">
        <ButtonGroup
          // disabled={true}
          options={disabled.options}
          selector={true}
        ></ButtonGroup>
      </DocGroup>
      <DocGroup name="comb">
        <ButtonGroup
          // disabled={true}
          options={comb.options}
          selector={true}
        ></ButtonGroup>
      </DocGroup>
    </React.Fragment>
  );
};

export default ButtonGroupModule;

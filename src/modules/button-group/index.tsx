import * as React from "react";
import { Option } from "../../components/button/button-group";
import DocGroup from "../../components/doc-group";
import Button from "../../components/button";

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
        <Button.Group options={def.options} />
      </DocGroup>
      <DocGroup name="size">
        <Button.Group options={def.options} size="h-6" />
        <Button.Group options={def.options} size="h-10" />
      </DocGroup>
      <DocGroup name="preset">
        <Button.Group options={def.options} preset="primary" />
        <Button.Group options={def.options} preset="secondary" />
      </DocGroup>
      <DocGroup name="combination & radius">
        <Button.Group
          radius="first:rounded-l-full"
          options={def.options}
        ></Button.Group>
        <Button.Group
          radius="last:rounded-r-full"
          options={def.options}
        ></Button.Group>
      </DocGroup>
      <DocGroup name="direction">
        <Button.Group
          orientation="vertical"
          options={def.options}
        ></Button.Group>
        <Button.Group
          preset="primary"
          orientation="vertical"
          options={def.options}
        ></Button.Group>
        <Button.Group
          preset="secondary"
          orientation="vertical"
          options={def.options}
        ></Button.Group>
      </DocGroup>
      <DocGroup name="selector">
        <Button.Group selector={true} options={def.options}></Button.Group>
        <Button.Group
          selector={true}
          preset={"primary"}
          options={def.options}
        ></Button.Group>
        <Button.Group
          selector={true}
          preset={"secondary"}
          options={def.options}
        ></Button.Group>
      </DocGroup>
      <DocGroup name="toggleable">
        <Button.Group
          multiple={true}
          selector={true}
          toggleable={true}
          options={def.options}
        ></Button.Group>
      </DocGroup>
      <DocGroup name="disabled">
        <Button.Group disabled={true} options={def.options}></Button.Group>
        <Button.Group
          disabled={true}
          disabledColor="border border-gray-8 text-gray-3 bg-gray-7"
          options={def.options}
        ></Button.Group>
      </DocGroup>
      <DocGroup name="disabled">
        <Button.Group
          // disabled={true}
          options={disabled.options}
          selector={true}
        ></Button.Group>
      </DocGroup>
      <DocGroup name="comb">
        <Button.Group
          // disabled={true}
          options={comb.options}
          selector={true}
        ></Button.Group>
      </DocGroup>
    </React.Fragment>
  );
};

export default ButtonGroupModule;

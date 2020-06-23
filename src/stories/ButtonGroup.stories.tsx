import React from "react";
import Button from "../components/button";
import Icon from "../components/icon";
import ButtonGroup, { Option } from "../components/button/button-group";

export default {
  title: "ButtonGroup",
  component: Button,
};

const defOpts = [
  { text: "One" },
  { text: "Two" },
  { text: "Three" },
  { text: "Four" },
];
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

export const Default = () => {
  return <ButtonGroup options={defOpts} />;
};

export const Size = () => {
  return (
    <>
      <ButtonGroup options={defOpts} size="h-6" />
      <ButtonGroup options={defOpts} size="h-10" />
    </>
  );
};

export const Preset = () => (
  <>
    <ButtonGroup options={defOpts} preset="primary" />
    <ButtonGroup options={defOpts} preset="secondary" />
  </>
);

export const CombinationAndRadius = () => (
  <>
    <ButtonGroup radius="first:rounded-l-full" options={defOpts}></ButtonGroup>
    <ButtonGroup radius="last:rounded-r-full" options={defOpts}></ButtonGroup>
  </>
);

export const Direction = () => (
  <>
    <ButtonGroup orientation="vertical" options={defOpts}></ButtonGroup>
    <ButtonGroup
      preset="primary"
      orientation="vertical"
      options={defOpts}
    ></ButtonGroup>
    <ButtonGroup
      preset="secondary"
      orientation="vertical"
      options={defOpts}
    ></ButtonGroup>
  </>
);

export const Selector = () => (
  <>
    <ButtonGroup selector={true} options={defOpts}></ButtonGroup>
    <ButtonGroup
      selector={true}
      preset={"primary"}
      options={defOpts}
    ></ButtonGroup>
    <ButtonGroup
      selector={true}
      preset={"secondary"}
      options={defOpts}
    ></ButtonGroup>
  </>
);

export const Toggleable = () => (
  <ButtonGroup
    multiple={true}
    selector={true}
    toggleable={true}
    options={defOpts}
  ></ButtonGroup>
);

export const Disabled = () => (
  <>
    <ButtonGroup disabled={true} options={defOpts}></ButtonGroup>
    <ButtonGroup
      disabled={true}
      disabledColor="border border-gray-8 text-gray-3 bg-gray-7"
      options={defOpts}
    ></ButtonGroup>
    <ButtonGroup
      // disabled={true}
      options={disabled.options}
      selector={true}
    ></ButtonGroup>
  </>
);

export const Comb = () => (
  <>
    <ButtonGroup
      // disabled={true}
      options={comb.options}
      selector={true}
    ></ButtonGroup>
  </>
);

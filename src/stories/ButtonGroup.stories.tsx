import React from "react";
import ButtonGroup, { Option } from "../components/button/button-group";
import Layout from "../components/layout";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
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
  return (
    <Layout>
      <ButtonGroup options={defOpts} />
    </Layout>
  );
};

export const Size = () => {
  return (
    <Layout className="space-x-5">
      <ButtonGroup options={defOpts} size="h-6" />
      <ButtonGroup options={defOpts} size="h-10" />
    </Layout>
  );
};

export const Preset = () => (
  <Layout className="space-x-5">
    <ButtonGroup options={defOpts} preset="primary" />
    <ButtonGroup options={defOpts} preset="secondary" />
  </Layout>
);

export const CombinationAndRadius = () => (
  <Layout className="space-x-5">
    <ButtonGroup radius="first:rounded-l-full" options={defOpts}></ButtonGroup>
    <ButtonGroup radius="last:rounded-r-full" options={defOpts}></ButtonGroup>
  </Layout>
);

export const Direction = () => (
  <Layout className="space-x-5">
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
  </Layout>
);

export const Selector = () => (
  <Layout className="space-x-5">
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
  </Layout>
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
  <Layout className="space-x-5">
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
  </Layout>
);

export const Comb = () => (
  <Layout className="space-x-5">
    <ButtonGroup
      // disabled={true}
      options={comb.options}
      selector={true}
    ></ButtonGroup>
  </Layout>
);

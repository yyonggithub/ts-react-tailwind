import React from "react";
import Button from "../components/button";
import Icon from "../components/icon";
import Layout from "../components/layout";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => {
  return (
    <Layout className="space-x-5">
      <Button text="Default" />
      <Button text="Primary" preset="primary" />
      <Button text="Secondary" preset="secondary" />
      <Button text="Danger" preset="danger" />
      <Button text="Text" preset="text" />
    </Layout>
  );
};

export const size = () => {
  return (
    <Layout className="space-x-5">
      <Button text="Small" size={"h-6"} />
      <Button text="Medium" />
      <Button text="Large" size={"h-10"} />
      <Button text="X Large" size={"h-12"} />
    </Layout>
  );
};

export const IconButton = () => {
  return (
    <Layout className="space-x-5">
      <Button text="Default" icon="drop-15" />
      <Button text="Secondary" icon="duplicate" preset="secondary" />
      <Button text="Primary" icon="app-store" preset="primary" />
      <Button text="Danger" icon="c-warning" preset="danger" />
      <Button text="Text" icon="edit-levels" preset="text" />
      <Button preset="primary">
        <span>Block</span>
        <Icon className="ml-2 -mr-1" icon="c-question" />
      </Button>
    </Layout>
  );
};

export const OnlyIcon = () => {
  return (
    <Layout className="space-x-5">
      <Button icon="brush" />
      <Button icon="pen-23" preset="secondary" />
      <Button icon="marker" preset="primary" />
      <Button icon="s-info" preset="text" />
      <Button icon="paint-bucket-39" radius="rounded-full" />
      <Button icon="measure-17" preset="secondary" radius="rounded-full" />
      <Button icon="patch-34" preset="primary" radius="rounded-full" />
      <Button icon="ruler-pencil" preset="text" radius="rounded-full" />
    </Layout>
  );
};

export const Disabled = () => {
  return (
    <Layout className="space-x-5">
      <Button disabled={true} text="Default" />
      <Button disabled={true} text="Primary" preset="primary" />
      <Button disabled={true} text="Secondary" preset="secondary" />
      <Button
        disabled={true}
        disabledColor="bg-danger-opacity-3 text-danger-brighter"
        text="Danger"
        preset="danger"
      ></Button>
    </Layout>
  );
};

export const Loading = () => {
  return (
    <Layout className="space-x-5">
      <Button loading={true} text="Default" />
      <Button loading={true} text="Secondary" preset="secondary" />
      <Button loading={true} text="Primary" preset="primary" />
    </Layout>
  );
};

export const OtherProps = () => (
  <Layout className="space-x-5">
    <div className="flex flex-wrap space-x-4 block w-1/2 py-2 px-5">
      <Button text="Display" display="flex flex-grow" />
    </div>
    <div className="flex flex-wrap space-x-4 block  w-1/2 py-2">
      <Button text="Align" display="flex flex-grow" align="text-left" />
      <Button text="Align" display="flex flex-grow" align="text-right" />
    </div>
    <div className="flex flex-wrap space-x-4 block  w-1/2 py-2">
      <Button text="Font" font="text-xs" />
      <Button text="Font" font="text-md font-mono" />
      <Button text="Font" font="text-lg font-bold" />
    </div>
    <div className="flex flex-wrap space-x-4 block  w-1/2 py-2">
      <Button text="Padding" padding="px-2" />
      <Button text="Padding" padding="px-6" />
      <Button text="Padding" padding="px-8" />
    </div>
    <div className="flex flex-wrap space-x-4 block  w-1/2 py-2">
      <Button text="Radius" radius="rounded-none" />
      <Button text="Radius" radius="rounded-sm" />
      <Button text="Radius" radius="rounded-full" />
    </div>
  </Layout>
);

export const Custom = () => (
  <Layout className="space-x-5">
    <Button
      text="Custom shadow"
      color="border text-primary-dark bg-body hover:text-primary shadow"
      focusColor={[
        "shadow-outline border-primary-opacity-4",
        "border-transparent",
      ]}
    />
    <Button
      text="Custom purple color"
      color="border text-white bg-info hover:bg-info-bright active:bg-info-dark"
      focusColor={[
        "shadow-outline-info border-info-dark",
        "border-transparent",
      ]}
    />
    <Button
      text="Custom dark color"
      color="text-white bg-gray-9 hover:bg-gray-8 active:bg-black"
      focusColor={["shadow-outline-gray"]}
    />
  </Layout>
);

export const FileUpload = () => {
  return (
    <Layout className="space-x-5">
      <Button>
        <label htmlFor="upload" className="flex items-center">
          File Upload
          <Icon className="-mr-1 ml-2" icon="app" />
        </label>
        <input id="upload" type="file" className="appearance-none hidden" />
      </Button>
    </Layout>
  );
};

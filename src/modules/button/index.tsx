import React from "react";
import Button from "../../components/button";
import Icon from "../../components/icon";
import DocGroup from "../../components/doc-group";

class ButtonModule extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DocGroup name="default">
          <Button text="Default" />
          <Button text="Primary" preset="primary" />
          <Button text="Secondary" preset="secondary" />
          <Button text="Danger" preset="danger" />
          <Button text="Text" preset="text" />
        </DocGroup>
        <DocGroup name="size">
          <Button text="Small" size={"h-6"} />
          <Button text="Medium" />
          <Button text="Large" size={"h-10"} />
          <Button text="X Large" size={"h-12"} />
        </DocGroup>
        <DocGroup name="icon&button">
          <Button text="Default" icon="drop-15" />
          <Button text="Secondary" icon="duplicate" preset="secondary" />
          <Button text="Primary" icon="app-store" preset="primary" />
          <Button text="Danger" icon="c-warning" preset="danger" />
          <Button text="Text" icon="edit-levels" preset="text" />
          <Button preset="primary">
            <span>Block</span>
            <Icon className="ml-2 -mr-1" icon="c-question" />
          </Button>
        </DocGroup>
        <DocGroup name="icon">
          <Button icon="brush" />
          <Button icon="pen-23" preset="secondary" />
          <Button icon="marker" preset="primary" />
          <Button icon="s-info" preset="text" />
          <Button icon="paint-bucket-39" radius="rounded-full" />
          <Button icon="measure-17" preset="secondary" radius="rounded-full" />
          <Button icon="patch-34" preset="primary" radius="rounded-full" />
          <Button icon="ruler-pencil" preset="text" radius="rounded-full" />
        </DocGroup>
        <DocGroup name="disabled">
          <Button disabled={true} text="Default" />
          <Button disabled={true} text="Primary" preset="primary" />
          <Button disabled={true} text="Secondary" preset="secondary" />
          <Button
            disabled={true}
            disabledColor="bg-danger-opacity-3 text-danger-brighter"
            text="Danger"
            preset="danger"
          ></Button>
        </DocGroup>
        <DocGroup name="loading">
          <Button loading={true} text="Default" />
          <Button loading={true} text="Secondary" preset="secondary" />
          <Button loading={true} text="Primary" preset="primary" />
        </DocGroup>
        <DocGroup name="other props">
          <div className="flex items-center space-x-4 w-1/2 block">
            <Button text="Display" display="flex flex-grow" />
          </div>
          <div className="flex items-center space-x-4 w-1/2 block">
            <Button text="Align" display="flex flex-grow" align="text-left" />
            <Button text="Align" display="flex flex-grow" align="text-right" />
          </div>
          <div className="flex items-center space-x-4 w-1/2 block">
            <Button text="Font" font="text-xs" />
            <Button text="Font" font="text-md font-mono" />
            <Button text="Font" font="text-lg font-bold" />
          </div>
          <div className="flex items-center space-x-4 w-1/2 block">
            <Button text="Padding" padding="px-2" />
            <Button text="Padding" padding="px-6" />
            <Button text="Padding" padding="px-8" />
          </div>
          <div className="flex items-center space-x-4 w-1/2 block">
            <Button text="Radius" radius="rounded-none" />
            <Button text="Radius" radius="rounded-sm" />
            <Button text="Radius" radius="rounded-full" />
          </div>
        </DocGroup>
        <DocGroup name="custom">
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
        </DocGroup>
        <DocGroup name="file upload">
          <Button>
            <label htmlFor="upload" className="flex items-center">
              File Upload
              <Icon className="-mr-1 ml-2" icon="#app" />
            </label>
            <input id="upload" type="file" className="appearance-none hidden" />
          </Button>
        </DocGroup>
      </React.Fragment>
    );
  }
}

export default ButtonModule;

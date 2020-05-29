import React, { FC, useState, ChangeEventHandler } from "react";
import DocGroup from "../../components/doc-group";
import TextArea from "../../components/input/text-area";
import Message from "../../components/input/sub/message";
import Icon from "../../components/icon";

const TextAreaModule: FC = () => {
  const [reqValue, setReqValue] = useState("Hello World");
  const handleReqChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setReqValue(e.currentTarget.value);
  };
  const [disValue, setDisValue] = useState("Hello World");
  const handleDisChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDisValue(e.currentTarget.value);
  };
  const [redValue, setRedValue] = useState("Hello World");
  const handleRedChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRedValue(e.currentTarget.value);
  };
  const [vailValue, setVailValue] = useState("Hello World");
  const handleVailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setVailValue(e.currentTarget.value);
  };

  const [isPassword, setIsPassword] = useState("password");
  const handlePassword = () => {
    setIsPassword((state) => {
      return state === "text" ? "password" : "text";
    });
  };

  return (
    <>
      <DocGroup name="default">
        <TextArea text="Standard" />
        <TextArea placeholder="Standard" />
      </DocGroup>
      <DocGroup name="表单属性">
        <TextArea
          text="Required*"
          value={reqValue}
          required={true}
          onChange={handleReqChange}
        />
        <TextArea
          text="Disabled"
          value={disValue}
          disabled={true}
          onChange={handleDisChange}
        />
        <TextArea
          text="Read Only"
          value={redValue}
          readonly={true}
          onChange={handleRedChange}
        />
        <TextArea
          text="Validation Text"
          value={vailValue}
          onChange={handleVailChange}
        >
          The right place for error messages
        </TextArea>
      </DocGroup>
      <DocGroup name="验证">
        <TextArea text="Error" color={"border border-danger"}>
          <Message className={"mt-2 text-xs text-danger"}>
            The right place for error messages
          </Message>
        </TextArea>
        <TextArea
          text="Warning"
          color={"border border-warning"}
          focusColor={"shadow-outline-warning"}
        >
          <Message className="flex items-center px-2 mt-2 text-xs text-white rounded-sm bg-warning">
            <Icon
              className="mr-1"
              icon="glyph-notification--error-24"
              size="12px"
            />
            The right place for error messages
          </Message>
        </TextArea>
      </DocGroup>
      <DocGroup name="icon">
        <TextArea icon="magnet" text="With a start adornment" />
        <TextArea
          icon="ruler-pencil"
          iconColor="text-warning"
          iconFocusColor="text-success"
          placeholder="With a start adornment"
        />
      </DocGroup>
      <DocGroup name="附加属性">
        <TextArea
          text="Password"
          type={isPassword}
          defaultValue="Password"
          adornClass="mr-1"
          adornColor="hover:text-primary"
          adornIcon={isPassword === "password" ? "b-preview" : "preview"}
          adornRadius="rounded-full"
          adornSize="h-6 w-6"
          adornClick={handlePassword}
        />
        <TextArea
          placeholder="Search"
          adornClass="-mr-px"
          adornColor="border"
          adornFont="font-semibold"
          adornIcon="zoom"
          adornFocusColor={[
            "shadow-outline border-primary-divide",
            "border-transparent",
          ]}
          adornRadius="rounded"
          adornText="Search"
        />
        <TextArea
          placeholder="Weight"
          prefix="Kg"
          prefixClass="ml-2 font-semibold"
        />
        <TextArea
          placeholder="Amount"
          suffix="$"
          suffixClass="mr-2 font-semibold text-success text-lg"
        />
      </DocGroup>
      <DocGroup name="size">
        <TextArea text="Large" size="h-10" font="text-md" />
        <TextArea text="Normal" />
        <TextArea text="Small" size="h-6" font="text-xs" />
      </DocGroup>
      <DocGroup name="other params">
        <div className="flex-col">
          <div className="grid items-end grid-cols-3 gap-4">
            <TextArea
              text="Align"
              align="text-left"
              defaultValue="Hello World"
            />
            <TextArea
              text="Align"
              align="text-center"
              defaultValue="Hello World"
            />
            <TextArea
              text="Align"
              align="text-right"
              defaultValue="Hello World"
            />
          </div>
          <div className="grid items-end grid-cols-3 gap-4">
            <TextArea text="Font" font="text-xs" defaultValue="Hello World" />
            <TextArea
              text="Font"
              font="text-md font-mono"
              defaultValue="Hello World"
            />
            <TextArea
              text="Font"
              font="text-lg font-bold"
              defaultValue="Hello World"
            />
          </div>
          <div className="grid items-end grid-cols-3 gap-4">
            <TextArea
              text="Padding"
              padding="px-2"
              defaultValue="Hello World"
            />
            <TextArea
              text="Padding"
              padding="px-6"
              defaultValue="Hello World"
            />
            <TextArea
              text="Padding"
              padding="px-8"
              defaultValue="Hello World"
            />
          </div>
          <div className="grid items-end grid-cols-3 gap-4">
            <TextArea
              text="Radius"
              radius="rounded-none"
              defaultValue="Hello World"
            />
            <TextArea
              text="Radius"
              radius="rounded-sm"
              defaultValue="Hello World"
            />
            <TextArea
              text="Radius"
              radius="rounded-full"
              defaultValue="Hello World"
            />
          </div>
        </div>
      </DocGroup>
      <DocGroup name="定制输入框" className="bg-gray-9 w-1/2">
        <TextArea
          color="text-white border"
          focusColor={[
            "border-warning shadow-outline-warning",
            "border-white-opacity-6 hover:border-white-opacity-7",
          ]}
          labelClass="text-white"
          text="Standard secondary"
        />
        <TextArea
          color="text-white border"
          focusColor={[
            "border-success shadow-outline-success",
            "border-white-opacity-6 hover:border-white-opacity-7",
          ]}
          placeholder="Standard secondary"
          placeholderColor="placeholder-white-opacity-4"
        />
      </DocGroup>
    </>
  );
};

export default TextAreaModule;

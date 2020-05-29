import React, { FC, useState, ChangeEventHandler } from "react";
import DocGroup from "../../components/doc-group";
import TextField from "../../components/input/text-field";
import Message from "../../components/input/sub/message";
import Icon from "../../components/icon";

const TextFieldModule: FC = () => {
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
        <TextField text="Standard" />
        <TextField placeholder="Standard" />
      </DocGroup>
      <DocGroup name="表单属性">
        <TextField
          text="Required*"
          value={reqValue}
          required={true}
          onChange={handleReqChange}
        />
        <TextField
          text="Disabled"
          value={disValue}
          disabled={true}
          onChange={handleDisChange}
        />
        <TextField
          text="Read Only"
          value={redValue}
          readonly={true}
          onChange={handleRedChange}
        />
        <TextField
          text="Validation Text"
          value={vailValue}
          onChange={handleVailChange}
        >
          The right place for error messages
        </TextField>
      </DocGroup>
      <DocGroup name="验证">
        <TextField text="Error" color={"border border-danger"}>
          <Message className={"mt-2 text-xs text-danger"}>
            The right place for error messages
          </Message>
        </TextField>
        <TextField
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
        </TextField>
      </DocGroup>
      <DocGroup name="icon">
        <TextField icon="magnet" text="With a start adornment" />
        <TextField
          icon="ruler-pencil"
          iconColor="text-warning"
          iconFocusColor="text-success"
          placeholder="With a start adornment"
        />
      </DocGroup>
      <DocGroup name="附加属性">
        <TextField
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
        <TextField
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
        <TextField
          placeholder="Weight"
          prefix="Kg"
          prefixClass="ml-2 font-semibold"
        />
        <TextField
          placeholder="Amount"
          suffix="$"
          suffixClass="mr-2 font-semibold text-success text-lg"
        />
      </DocGroup>
      <DocGroup name="size">
        <TextField text="Large" size="h-10" font="text-md" />
        <TextField text="Normal" />
        <TextField text="Small" size="h-6" font="text-xs" />
      </DocGroup>
      <DocGroup name="other params">
        <div className="flex-col">
          <div className="grid items-end grid-cols-3 gap-4">
            <TextField
              text="Align"
              align="text-left"
              defaultValue="Hello World"
            />
            <TextField
              text="Align"
              align="text-center"
              defaultValue="Hello World"
            />
            <TextField
              text="Align"
              align="text-right"
              defaultValue="Hello World"
            />
          </div>
          <div className="grid items-end grid-cols-3 gap-4">
            <TextField text="Font" font="text-xs" defaultValue="Hello World" />
            <TextField
              text="Font"
              font="text-md font-mono"
              defaultValue="Hello World"
            />
            <TextField
              text="Font"
              font="text-lg font-bold"
              defaultValue="Hello World"
            />
          </div>
          <div className="grid items-end grid-cols-3 gap-4">
            <TextField
              text="Padding"
              padding="px-2"
              defaultValue="Hello World"
            />
            <TextField
              text="Padding"
              padding="px-6"
              defaultValue="Hello World"
            />
            <TextField
              text="Padding"
              padding="px-8"
              defaultValue="Hello World"
            />
          </div>
          <div className="grid items-end grid-cols-3 gap-4">
            <TextField
              text="Radius"
              radius="rounded-none"
              defaultValue="Hello World"
            />
            <TextField
              text="Radius"
              radius="rounded-sm"
              defaultValue="Hello World"
            />
            <TextField
              text="Radius"
              radius="rounded-full"
              defaultValue="Hello World"
            />
          </div>
        </div>
      </DocGroup>
      <DocGroup name="定制输入框" className="bg-gray-9 w-1/2">
        <TextField
          color="text-white border"
          focusColor={[
            "border-warning shadow-outline-warning",
            "border-white-opacity-6 hover:border-white-opacity-7",
          ]}
          labelClass="text-white"
          text="Standard secondary"
        />
        <TextField
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

export default TextFieldModule;

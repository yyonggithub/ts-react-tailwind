import React, { FC } from "react";
import DocGroup from "../../components/doc-group";
import Dropdown from "../../components/dropdown/dropdown";
import Button from "../../components/button";
import Icon from "../../components/icon";

const defaultList = {
  list: [
    { index: 0, text: "size-large", icon: "size-large" },
    { index: 1, text: "size-medium", icon: "size-medium" },
    { index: 2, text: "size-small", icon: "size-small" },
  ],
};

const DropdownModule: FC = () => {
  return (
    <>
      <DocGroup name="default">
        <Dropdown defaultIndex={0} opened={false}>
          <Dropdown.Trigger>hello world</Dropdown.Trigger>
          <Dropdown.Content>
            {defaultList.list.map((item, index) => {
              return (
                <Dropdown.Item index={item.index} key={item.index}>
                  {item.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown>
        <Dropdown defaultIndex={0} opened={false} disabled>
          <Dropdown.Trigger>hello world</Dropdown.Trigger>
          <Dropdown.Content>
            {defaultList.list.map((item, index) => {
              return (
                <Dropdown.Item index={item.index} key={item.index}>
                  {item.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown>
      </DocGroup>
      <DocGroup name={"button"}>
        <Dropdown defaultIndex={0} opened={false}>
          <Dropdown.Trigger>
            <Button text={"dropdown"}></Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            {defaultList.list.map((item, index) => {
              return (
                <Dropdown.Item index={item.index} key={item.index}>
                  <Icon icon={item.icon} className={"m-2"}></Icon>
                  {item.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown>
      </DocGroup>
      <DocGroup name={"disabled"}>
        <Dropdown defaultIndex={0} disabled>
          <Dropdown.Trigger>
            <Button text={"dropdown"} disabled></Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            {defaultList.list.map((item, index) => {
              return (
                <Dropdown.Item index={item.index} key={item.index}>
                  <Icon icon={item.icon} className={"m-2"}></Icon>
                  {item.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown>
      </DocGroup>
      <DocGroup name="position">
        <Dropdown defaultIndex={0} opened={false} position={"top"}>
          <Dropdown.Trigger>toptoptoptop</Dropdown.Trigger>
          <Dropdown.Content>
            {defaultList.list.map((item, index) => {
              return (
                <Dropdown.Item index={item.index} key={item.index}>
                  {item.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown>
        <Dropdown defaultIndex={0} opened={false} position={"right"}>
          <Dropdown.Trigger>rightrightright</Dropdown.Trigger>
          <Dropdown.Content>
            {defaultList.list.map((item, index) => {
              return (
                <Dropdown.Item index={item.index} key={item.index}>
                  {item.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown>
        <Dropdown defaultIndex={0} opened={false} position={"bottom"}>
          <Dropdown.Trigger>bottombottombottom</Dropdown.Trigger>
          <Dropdown.Content>
            {defaultList.list.map((item, index) => {
              return (
                <Dropdown.Item index={item.index} key={item.index}>
                  {item.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown>
        <Dropdown
          defaultIndex={0}
          opened={false}
          position={"left"}
          offset={100}
        >
          <Dropdown.Trigger>leftleftleft</Dropdown.Trigger>
          <Dropdown.Content>
            {defaultList.list.map((item, index) => {
              return (
                <Dropdown.Item index={item.index} key={item.index}>
                  {item.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown>
      </DocGroup>
      <DocGroup name="function">
        <Dropdown
          onClick={(index: number) => {
            alert(index);
          }}
        >
          <Dropdown.Trigger>
            <Button text={"Function"}></Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            {defaultList.list.map((item, index) => {
              return (
                <Dropdown.Item index={item.index} key={item.index} disabled>
                  {item.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Content>
        </Dropdown>
      </DocGroup>
    </>
  );
};

DropdownModule.displayName = "DropdownModule";

export default DropdownModule;

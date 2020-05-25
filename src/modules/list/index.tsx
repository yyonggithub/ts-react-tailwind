import React, { FC, useState } from "react";
import List from "../../components/list/list";
import ListItem from "../../components/list/list-item";
import DocGroup from "../../components/doc-group";
import Icon from "../../components/icon";
import Checkbox from "../../components/checkbox";

const defaultList = {
  list: [
    { index: 0, text: "one" },
    { index: 1, text: "two" },
    { index: 2, text: "three" },
    { index: 3, text: "four" },
  ],
};
const icon = {
  defaultIndex: 0,
  list: [
    { index: 0, text: "one", icon: "pen-tool" },
    { index: 1, text: "two", icon: "slice" },
    { index: 2, text: "three", icon: "eraser-33" },
    { index: 3, text: "four", icon: "vector" },
  ],
};
const selected = {
  defaultIndex: 3,
  list: [
    {
      index: 0,
      text: "one",
      icon: "pen-tool",
      selectedColor: "bg-danger-opacity-1 text-danger",
    },
    {
      index: 1,
      text: "two",
      icon: "slice",
      selectedColor: "bg-danger-opacity-1 text-danger",
    },
    {
      index: 2,
      text: "three",
      icon: "eraser-33",
      selectedColor: "bg-danger-opacity-1 text-danger",
    },
    {
      index: 3,
      text: "four",
      icon: "vector",
      selectedColor: "bg-danger-opacity-1 text-danger",
    },
  ],
};

const disabled = {
  defaultIndex: 0,
  list: [
    { index: 0, text: "one", icon: "pen-tool", disabled: true },
    { index: 1, text: "two", icon: "slice" },
    { index: 2, text: "three", icon: "eraser-33" },
    { index: 3, text: "four", icon: "vector", disabled: true },
  ],
};

const checkboxList = {
  list: [
    { index: 0, text: "Sent mail", selected: false },
    { index: 1, text: "Drafts", selected: false },
    { index: 2, text: "Inbox", selected: false },
    { index: 3, text: "Starred", selected: true },
  ],
};
const sizeList = {
  list: [
    { index: 0, text: "Sent mail", size: "h6" },
    { index: 1, text: "Drafts", size: "h6" },
    { index: 2, text: "Inbox", size: "h6" },
    { index: 3, text: "Starred", size: "h6" },
  ],
};
const bigSizeList = {
  list: [
    { index: 0, text: "Sent mail", size: "h-10" },
    { index: 1, text: "Drafts", size: "h-10" },
    { index: 2, text: "Inbox", size: "h-10" },
    { index: 3, text: "Starred", size: "h-10" },
  ],
};

interface CheckboxItemProps {
  index: number;
  text: string;
  selected: boolean;
}

const CheckBoxItem: FC<CheckboxItemProps> = (props) => {
  const { selected, text, index } = props;
  const [_selected, setSelected] = useState(selected);
  const handleClick = () => {
    console.log("click");

    setSelected(!_selected);
  };
  return (
    <ListItem key={index} index={index}>
      <Checkbox checked={_selected} text={text} onChange={handleClick} />
      <span className="flex-grow mx-2"></span>
      <Icon
        className={_selected ? "text-primary" : "text-gray-5"}
        icon="shape-star"
      />
    </ListItem>
  );
};

const ListModule: FC = () => {
  return (
    <>
      <DocGroup name="default">
        <List className={"bg-body shadow rounded"}>
          {defaultList.list.map((item, index) => {
            return (
              <ListItem key={index} index={index}>
                {item.text}
              </ListItem>
            );
          })}
        </List>
      </DocGroup>
      <DocGroup name="divider">
        <List divide={true} className={"bg-body shadow rounded"}>
          {defaultList.list.map((item, index) => {
            return (
              <ListItem key={index} index={index}>
                {item.text}
              </ListItem>
            );
          })}
        </List>
      </DocGroup>
      <DocGroup name="icon">
        <List
          divide={true}
          className={"bg-body shadow rounded"}
          defaultIndex={icon.defaultIndex}
        >
          {icon.list.map((item, index) => {
            return (
              <ListItem key={index} index={index} icon={item.icon}>
                {item.text}
              </ListItem>
            );
          })}
        </List>
      </DocGroup>
      <DocGroup name="selected">
        <List
          divide={true}
          className={"bg-body shadow rounded"}
          defaultIndex={selected.defaultIndex}
        >
          {selected.list.map((item, index) => {
            return (
              <ListItem
                key={index}
                index={index}
                selectedColor={item.selectedColor}
              >
                {item.text}
              </ListItem>
            );
          })}
        </List>
      </DocGroup>
      <DocGroup name="Disable the component">
        <List
          divide={true}
          className={"bg-body shadow rounded"}
          defaultIndex={disabled.defaultIndex}
        >
          {disabled.list.map((item, index) => {
            return (
              <ListItem key={index} index={index} disabled={item.disabled}>
                {item.text}
              </ListItem>
            );
          })}
        </List>
      </DocGroup>
      <DocGroup name="Disable the component">
        <List divide={true} className={"bg-body shadow rounded"}>
          {checkboxList.list.map((item, index) => {
            return <CheckBoxItem {...item} key={index} />;
          })}
        </List>
      </DocGroup>
      <DocGroup name="size">
        <List
          divide={true}
          className={"bg-body shadow rounded"}
          defaultIndex={disabled.defaultIndex}
        >
          {sizeList.list.map((item, index) => {
            return (
              <ListItem key={index} index={index} size={item.size}>
                {item.text}
              </ListItem>
            );
          })}
        </List>
        <List
          divide={true}
          className={"bg-body shadow rounded"}
          defaultIndex={disabled.defaultIndex}
        >
          {bigSizeList.list.map((item, index) => {
            return (
              <ListItem key={index} index={index} size={item.size}>
                {item.text}
              </ListItem>
            );
          })}
        </List>
      </DocGroup>
    </>
  );
};

export default ListModule;

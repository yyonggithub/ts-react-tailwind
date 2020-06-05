import React, { FC } from "react";
import DocGroup from "../../components/doc-group";
import Dropdown from "../../components/dropdown/dropdown";

import DropdownTrigger from "../../components/dropdown/dropdown-trigger";
import DropdownItem from "../../components/dropdown/dropdown-item";
import DropdownContent from "../../components/dropdown/dropdown-content";

const defaultList = {
  list: [
    { index: 0, text: "one" },
    { index: 1, text: "two" },
    { index: 2, text: "three" },
    { index: 3, text: "four" },
  ],
};

const DropdownModule: FC = () => {
  return (
    <>
      <DocGroup name="default">
        <Dropdown defaultIndex={0} opened={false}>
          <DropdownTrigger>hello world</DropdownTrigger>
          <DropdownContent>
            {defaultList.list.map((item, index) => {
              return (
                <DropdownItem index={item.index} key={item.index}>
                  {item.text}
                </DropdownItem>
              );
            })}
          </DropdownContent>
        </Dropdown>
        <Dropdown defaultIndex={0} opened={false} disabled>
          <DropdownTrigger>hello world</DropdownTrigger>
          <DropdownContent>
            {defaultList.list.map((item, index) => {
              return (
                <DropdownItem index={item.index} key={item.index}>
                  {item.text}
                </DropdownItem>
              );
            })}
          </DropdownContent>
        </Dropdown>
      </DocGroup>
    </>
  );
};

DropdownModule.displayName = "DropdownModule";

export default DropdownModule;

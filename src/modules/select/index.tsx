import React, { FC } from "react";
import DocGroup from "../../components/doc-group";
import Select from "../../components/select";
import SelectItem from "../../components/select/select-item";

const SelectModule: FC = () => {
  return (
    <>
      <DocGroup name="default">
        <div className="flex justify-items-center items-center flex-col">
          <Select value={10}>
            <SelectItem value={10}>Ten</SelectItem>
            <SelectItem value={20}>Twenty</SelectItem>
            <SelectItem value={30}>Thirty</SelectItem>
          </Select>
          <Select value={10}>
            <SelectItem value={10}>Ten</SelectItem>
            <SelectItem value={20}>Twenty</SelectItem>
            <SelectItem value={30}>Thirty</SelectItem>
          </Select>
          <Select placeholder="请选择">
            <SelectItem value={10}>Ten</SelectItem>
            <SelectItem value={20}>Twenty</SelectItem>
            <SelectItem value={30}>Thirty</SelectItem>
          </Select>
          <Select placeholder="请选择" allowClear={true}>
            <SelectItem value={10}>Ten</SelectItem>
            <SelectItem value={20}>Twenty</SelectItem>
            <SelectItem value={30}>Thirty</SelectItem>
          </Select>
        </div>
      </DocGroup>
      <DocGroup name="disabled">
        <Select placeholder="请选择" allowClear={true} disabled>
          <SelectItem value={10}>Ten</SelectItem>
          <SelectItem value={20}>Twenty</SelectItem>
          <SelectItem value={30}>Thirty</SelectItem>
        </Select>
      </DocGroup>
      <DocGroup name="position">
        <Select placeholder="top" allowClear={true} position={"top"}>
          <SelectItem value={10}>Ten</SelectItem>
          <SelectItem value={20}>Twenty</SelectItem>
          <SelectItem value={30}>Thirty</SelectItem>
        </Select>
        <Select placeholder="bottom" allowClear={true} position={"bottom"}>
          <SelectItem value={10}>Ten</SelectItem>
          <SelectItem value={20}>Twenty</SelectItem>
          <SelectItem value={30}>Thirty</SelectItem>
        </Select>
        <Select placeholder="left" allowClear={true} position={"left"}>
          <SelectItem value={10}>Ten</SelectItem>
          <SelectItem value={20}>Twenty</SelectItem>
          <SelectItem value={30}>Thirty</SelectItem>
        </Select>
        <Select placeholder="right" allowClear={true} position={"right"}>
          <SelectItem value={10}>Ten</SelectItem>
          <SelectItem value={20}>Twenty</SelectItem>
          <SelectItem value={30}>Thirty</SelectItem>
        </Select>
      </DocGroup>
    </>
  );
};

SelectModule.displayName = "SelectModule";

export default SelectModule;

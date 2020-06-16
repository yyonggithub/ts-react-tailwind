import React, { Fragment } from "react";
import DocGroup from "../../components/doc-group";
import Button from "../../components/button";
import Tooltip from "../../components/tooltip";
import "./style.scss";
import TooltipItem from "../../components/tooltip/tooltip-item";
import { Placement } from "../../components/overlay/utils";

const placement: Placement[] = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-end",
  "bottom",
  "bottom-start",
  "left-start",
  "left",
  "left-end",
];

const TooltipModule = () => {
  return (
    <Fragment>
      <DocGroup name="default">
        <Tooltip
          render={() => {
            return <TooltipItem>Hello world!</TooltipItem>;
          }}
        >
          <Button text={"default"} />
        </Tooltip>
        <Tooltip
          placement={"left"}
          render={() => {
            return <TooltipItem>Hello world</TooltipItem>;
          }}
        >
          <Button text={"left"} />
        </Tooltip>
        <Tooltip
          // offSize={50}
          placement={"top"}
          render={() => {
            return <TooltipItem>Hello world!</TooltipItem>;
          }}
        >
          <Button text={"top"} />
        </Tooltip>
        <Tooltip
          // offSize={50}
          placement={"right"}
          render={() => {
            return <TooltipItem>Hello world!</TooltipItem>;
          }}
        >
          <Button text={"right"} />
        </Tooltip>
        <Tooltip
          placement={"bottom"}
          render={() => {
            return "bottom Hello world!";
          }}
        >
          <Button text={"bottom text"} />
        </Tooltip>
      </DocGroup>
      <DocGroup name="placement">
        {placement.map((item, index) => {
          return (
            <Tooltip
              key={index}
              placement={item}
              render={() => {
                return <TooltipItem>Hello world!!!!!!!!!!!!!!!</TooltipItem>;
              }}
            >
              <Button
                text={item}
                style={{
                  height: 80,
                }}
              />
            </Tooltip>
          );
        })}
      </DocGroup>
    </Fragment>
  );
};

export default TooltipModule;

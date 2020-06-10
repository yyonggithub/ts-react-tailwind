import React, { Fragment, useState, useRef } from "react";
import DocGroup from "../../components/doc-group";
import Button from "../../components/button";
import Tooltip from "../../components/tooltip";
import "./style.scss";
import TooltipItem from "../../components/tooltip/tooltip-item";

const TooltipModule = () => {

  return (
    <Fragment>
      <DocGroup name="default">
        <Tooltip
          render={() => {
            return <TooltipItem>Hello world!</TooltipItem>;
          }}
        >
          <Button text={"tooltip"} />
        </Tooltip>
        <Tooltip
          placement={"left"}
          render={() => {
            return <TooltipItem>Hello world</TooltipItem>;
          }}
        >
          <Button text={"tooltip"} />
        </Tooltip>
        <Tooltip
          placement={"top"}
          render={() => {
            return <TooltipItem>Hello world!</TooltipItem>;
          }}
        >
          <Button text={"tooltip"} />
        </Tooltip>
        <Tooltip
          placement={"right"}
          render={() => {
            return <TooltipItem>Hello world!</TooltipItem>;
          }}
        >
          <Button text={"tooltip"} />
        </Tooltip>
        <Tooltip
          placement={"bottom"}
          render={() => {
            return "bottom Hello world!";
          }}
        >
          <Button text={"tooltip"} />
        </Tooltip>
      </DocGroup>
    </Fragment>
  );
};

export default TooltipModule;

import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/button";

export default {
  title: "Button",
  component: Button,
};

export const DefaultButton = () => {
  return <Button text={"button"} onClick={action("clicked")}></Button>;
};

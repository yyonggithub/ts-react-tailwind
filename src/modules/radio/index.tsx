import React from "react";
import DocGroup from "../../components/doc-group";
// import Radio from '../../components/radio/radio';
import Radio from "../../components/radio";
import RadioGroup, {
  RadioGroupProps,
} from "../../components/radio/radio-group";

const group: RadioGroupProps = {
  defaultValue: "Disabled checked",
  options: [
    { value: "Female", text: "Female" },
    { value: "Male", text: "Male" },
    { value: "Other", text: "Other" },
    { value: "Disabled checked", text: "Disabled checked", disabled: true },
    { value: "Disabled", text: "Disabled", disabled: true },
  ],
};
const custom: RadioGroupProps = {
  defaultValue: "Disabled checked",
  options: [
    {
      value: "Customized Color",
      text: "Customized Color",
      iconClass: "text-success",
      focusColor: "shadow-outline-success text-success",
    },
    {
      value: "Customized Icon",
      text: "Customized Icon",
      color: "text-info",
      iconClass: "text-info",
      focusColor: "",
      radioIcon: ["shape-star", "shape-star-2"],
    },
    {
      value: "Radio Icon Hidden",
      text: "Radio Icon Hidden",
      color: "text-danger",
      iconClass: "text-danger",
      radioIcon: false,
    },
  ],
};

const RadioModule: React.SFC = () => {
  return (
    <React.Fragment>
      <DocGroup name="default">
        <Radio value="radio 1" text="Radio 1" />
      </DocGroup>
      <DocGroup name="group">
        <RadioGroup {...group} />
      </DocGroup>
      <DocGroup name="block text">
        <Radio value="block text">
          <span className="mr-2">Placement</span>
        </Radio>
      </DocGroup>
      <DocGroup name="custom">
        <RadioGroup {...custom} />
      </DocGroup>
    </React.Fragment>
  );
};

export default RadioModule;

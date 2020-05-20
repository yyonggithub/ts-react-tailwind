# React Checkbox

## default

```jsx
import DocGroup from "../../components/doc-group";
import CheckBox from "../../components/checkbox";

<DocGroup name="default">
  <CheckBox text="checkbox1" value="checkbox1" />
</DocGroup>;
```

## list

```tsx
import CheckBoxGroup, {
  CheckboxGroupProps,
} from "../../components/checkbox/checkbox-group";
import DocGroup from "../../components/doc-group";

const list = {
  onChange: (v) => {
    console.log(v);
  },
  options: [
    { checked: false, text: "First", value: "First" },
    { checked: false, text: "Second", value: "Second" },
    { checked: false, text: "Third", value: "Third" },
    {
      checked: true,
      text: "Disabled checked",
      value: "Disabled checked",
      disabled: true,
    },
    { checked: false, text: "Disabled", value: "Disabled", disabled: true },
  ],
};

<DocGroup name="list">
  <CheckBoxGroup {...list} />
</DocGroup>;
```

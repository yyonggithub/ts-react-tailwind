# React Button

## default

```jsx
import DocGroup from "../../components/doc-group";

<DocGroup name="">
  <Button text="Default" />
  <Button text="Primary" preset="primary" />
  <Button text="Secondary" preset="secondary" />
  <Button text="Danger" preset="danger" />
  <Button text="Text" preset="text" />
</DocGroup>;
```

## size

```jsx
import DocGroup from "../../components/doc-group";

<DocGroup name="">
  <Button text="Small" size={"h-6"} />
  <Button text="Medium" />
  <Button text="Large" size={"h-10"} />
  <Button text="X Large" size={"h-12"} />
</DocGroup>;
```

## icon&button

```jsx
import DocGroup from "../../components/doc-group";
import Icon from "../../components/icon";

<DocGroup name="">
  <Button text="Default" icon="drop-15" />
  <Button text="Secondary" icon="duplicate" preset="secondary" />
  <Button text="Primary" icon="app-store" preset="primary" />
  <Button text="Danger" icon="c-warning" preset="danger" />
  <Button text="Text" icon="edit-levels" preset="text" />
  <Button preset="primary">
    <span>Block</span>
    <Icon className="ml-2 -mr-1" icon="c-question" />
  </Button>
</DocGroup>;
```

## icon

```jsx
import DocGroup from "../../components/doc-group";

<DocGroup name="">
  <Button icon="brush" />
  <Button icon="pen-23" preset="secondary" />
  <Button icon="marker" preset="primary" />
  <Button icon="s-info" preset="text" />
  <Button icon="paint-bucket-39" radius="rounded-full" />
  <Button icon="measure-17" preset="secondary" radius="rounded-full" />
  <Button icon="patch-34" preset="primary" radius="rounded-full" />
  <Button icon="ruler-pencil" preset="text" radius="rounded-full" />
</DocGroup>;
```

## disabled

```jsx
import DocGroup from "../../components/doc-group";

<DocGroup name="disabled">
  <Button disabled={true} text="Default" />
  <Button disabled={true} text="Primary" preset="primary" />
  <Button disabled={true} text="Secondary" preset="secondary" />
  <Button
    disabled={true}
    disabledColor="bg-danger-opacity-3 text-danger-brighter"
    text="Danger"
    preset="danger"
  ></Button>
</DocGroup>;
```

## loading

```jsx
import DocGroup from "../../components/doc-group";

<DocGroup name="loading">
  <Button loading={true} text="Default" />
  <Button loading={true} text="Secondary" preset="secondary" />
  <Button loading={true} text="Primary" preset="primary" />
</DocGroup>;
```

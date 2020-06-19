import React, {
  FC,
  useRef,
  useEffect,
  ChangeEventHandler,
  useState,
  MouseEventHandler,
} from "react";
import DocGroup from "../../components/doc-group";
import Select from "../../components/select";
import SelectItem from "../../components/select/select-item";
import { createObserver, Placement } from "../../components/overlay/utils";

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

const SelectModule: FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const getRect = () => {
      console.log(divRef.current?.getBoundingClientRect());
    };
    let ro: ResizeObserver;
    setTimeout(() => {
      if (divRef.current) {
        ro = createObserver(divRef.current, getRect);
      }
    }, 0);
    return () => {
      ro?.disconnect();
    };
  }, []);
  const [value, setValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const [hidden, setHidden] = useState(false);
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setHidden(!hidden);
  };
  return (
    <>
      <DocGroup name="default">
        {/* <div className="flex justify-items-center items-center flex-col"> */}
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
        {/* </div> */}
      </DocGroup>
      <DocGroup name="disabled">
        <Select placeholder="请选择" allowClear={true} disabled>
          <SelectItem value={10}>Ten</SelectItem>
          <SelectItem value={20}>Twenty</SelectItem>
          <SelectItem value={30}>Thirty</SelectItem>
        </Select>
      </DocGroup>
      <DocGroup name="placement" className="flex-wrap">
        {placement.map((item, index) => {
          return (
            <Select
              placeholder={item}
              allowClear={true}
              placement={item}
              key={index}
              className="leading-10"
            >
              <SelectItem value={10}>Ten</SelectItem>
              <SelectItem value={20}>Twenty</SelectItem>
              <SelectItem value={30}>Thirty</SelectItem>
              <SelectItem value={40}>Four</SelectItem>
            </Select>
          );
        })}
      </DocGroup>
      <DocGroup name={"adfas"}>
        <button onClick={handleClick}>hidden</button>
        <input
          type="text"
          style={{ minWidth: "20px" }}
          onChange={handleChange}
          value={value}
        />
        {hidden ? null : (
          <div ref={divRef} className={"inline-block bg-primary"}>
            {value}
          </div>
        )}
      </DocGroup>
    </>
  );
};

SelectModule.displayName = "SelectModule";

export default SelectModule;

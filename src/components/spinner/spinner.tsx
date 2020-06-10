import React, { FC, useReducer } from "react";
import Input from "../input/input";
import Button from "../button";

type SpinnerProps = {
  type?: string;
  max?: number;
  min?: number;
  value?: number;
  step?: number;
  onChange?: (value: number) => void;
} & Partial<typeof defaultProps>;

const defaultProps = {};

type ActionType = "decrement" | "increment" | "change";

const reducer = (
  state: { count: number; step: number; max: number; min: number },
  action: { type: ActionType; payload?: any }
) => {
  const { count, ...rest } = state;
  const { payload, type } = action;
  let result: number;
  switch (type) {
    case "increment":
      result = count + state.step;
      return { count: result >= state.max ? state.max : result, ...rest };
    case "decrement":
      result = count - state.step;
      return { count: result <= state.min ? state.min : result, ...rest };
    case "change":
      return { count: payload, ...rest };
    default:
      throw new Error("unknow action.type");
  }
};

// TODO: 未完成
const Spinner: FC<SpinnerProps> = (props) => {
  const { max, min, value, step, onChange } = props;
  const initialState = {
    count: value || 0,
    max: max || Number.MAX_SAFE_INTEGER,
    min: min || Number.MIN_SAFE_INTEGER,
    step: step || 1,
  };
  const [{ count, max: _max, min: _min, step: _step }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleClick = (type: ActionType, payload?: any) => {
    console.log(type);
    dispatch({ type });
    if (onChange) {
      onChange(count);
    }
  };
  return (
    <div className="w-full inline-block">
      <Input
        className="max-w-xs inline-block"
        step={_step}
        max={_max}
        min={_min}
        value={count}
        onChange={() => {}}
        type="number"
      />
      <div className="inline-block flex flex-col overflow-hidden flex-shrink-0">
        <Button
          className={"leading-none h-5/10 flex-grow"}
          onClick={() => handleClick("increment")}
        >
          +
        </Button>
        <Button
          className={"leading-none h-5/10 flex-grow"}
          onClick={() => handleClick("decrement")}
        >
          -
        </Button>
      </div>
    </div>
  );
};

Spinner.defaultProps = defaultProps;
Spinner.displayName = "Spinner";

export default Spinner;

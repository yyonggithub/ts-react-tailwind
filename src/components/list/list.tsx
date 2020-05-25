import React, { FC, useMemo, createContext, useState } from "react";
import classnames from "classnames";

type selectCallback = (selected: number) => void;

type ListProps = {
  className?: string;
  divide?: boolean;
  space?: string;
  group?: "group" | "listbox";
  /**
   * 如果`defaultIndex`未赋值，则列表下面各项将不会被选中,如果赋值了则默认会有被选中的项
   */
  defaultIndex?: number;
  onSelect?: selectCallback;
} & Partial<typeof defaultProps>;

const defaultProps = {
  padding: "p-2",
};

interface IListContext {
  index: number | undefined;
  onSelect?: selectCallback;
}

export const ListContext = createContext<IListContext>({
  index: 0,
});

const List: FC<ListProps> = (props) => {
  const {
    defaultIndex,
    className,
    padding,
    divide: _divide,
    space: _space,
    group,
    children,
    onSelect,
    ...restProps
  } = props;

  const [currentActive, setActive] = useState(defaultIndex);

  const divide = useMemo(() => {
    if (typeof _divide === "boolean" && _divide === true) {
      return "divide-y divide-gray-1";
    } else if (typeof _divide === "string") {
      return _divide;
    } else {
      return undefined;
    }
  }, [_divide]);

  const space = useMemo(() => {
    if (_divide || (typeof _space === "boolean" && _space === false)) {
      return undefined;
    } else if (typeof _space === "string") {
      return _space;
    } else {
      return "space-y-1";
    }
  }, [_divide, _space]);

  const classes = classnames("List", className, divide, padding, space, {
    "List--group": group,
  });

  const role = group ? "group" : "listbox";

  const handleClick = (index: number) => {
    if (typeof defaultIndex !== "undefined") {
      setActive(index);
    }
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: IListContext = {
    index: typeof currentActive === "number" ? currentActive : undefined,
    onSelect: handleClick,
  };
  return (
    <ul className={classes} role={role} {...restProps}>
      <ListContext.Provider value={passedContext}>
        {children}
      </ListContext.Provider>
    </ul>
  );
};

List.defaultProps = defaultProps;
List.displayName = "List";

export default List;

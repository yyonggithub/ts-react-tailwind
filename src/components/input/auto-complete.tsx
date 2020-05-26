import React, {
  FC,
  useState,
  ChangeEventHandler,
  ReactElement,
  useEffect,
} from "react";
import classnames from "classnames";
import Input, { InputProps } from "./input";
import List from "../list/list";
import ListItem from "../list/list-item";
import { debounce } from "../../utils";
import Loading from "../loading";
import useDebounce from "../../hooks/useDebounce";

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

interface AutoCompleteProps
  extends Omit<InputProps, "onSelect">,
    Partial<typeof defaultProps> {
  fetchSuggestions: (
    keyword: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  render?: (item: DataSourceType) => ReactElement;
}

const defaultProps = {};

// TODO: 未完成
const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    value,
    children,
    className,
    fetchSuggestions,
    onSelect,
    render,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);

  const debounceValue = useDebounce(inputValue);

  useEffect(() => {
    if (debounceValue) {
      const result = fetchSuggestions(debounceValue);
      if (result instanceof Promise) {
        setLoading(true);
        result.then((res) => {
          setLoading(false);
          setSuggestions(res);
        });
      } else {
        setSuggestions(result);
      }
    } else {
      setSuggestions([]);
    }
  }, [debounceValue]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const v = e.target.value.trim();
    setInputValue(v);
  };

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setSuggestions([]);
    if (onSelect) {
      onSelect(item);
    }
  };
  const classes = classnames("auto-complete", className);

  const renderTemplate = (item: DataSourceType) => {
    if (render) {
      return render(item);
    }
    if (typeof item !== "string") {
      return item.value;
    } else {
      return item;
    }
  };

  const renderSuggestions = () => {
    if (suggestions.length > 0) {
      return (
        <List>
          {suggestions.map((item, index) => {
            return (
              <ListItem
                key={index}
                index={index}
                onClick={() => handleSelect(item)}
              >
                {renderTemplate(item)}
              </ListItem>
            );
          })}
        </List>
      );
    }
  };

  return (
    <div className={classes} {...restProps}>
      <Input value={inputValue} onChange={handleChange} />
      <div>
        {loading ? (
          <Loading.Dot className={"h-12"} />
        ) : (
          renderSuggestions()
        )}
      </div>
    </div>
  );
};

AutoComplete.defaultProps = defaultProps;
AutoComplete.displayName = "AutoComplete";

export default AutoComplete;

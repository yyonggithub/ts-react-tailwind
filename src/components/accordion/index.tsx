import React, { FC, useState, createContext } from "react";
import classnames from "classnames";
import { classnamesType } from "../../interface";
import "./style.scss";

type AccordionProps = {
  className?: classnamesType;
} & Partial<typeof defaultProps>;

const defaultProps = {
  disabled: false,
  initiallyExpanded: false,
};

type IContext = {
  show: boolean;
  disabled?: boolean;
  initiallyExpanded?: boolean;
  handleShow?: (show: boolean) => void;
};

export const AccordionContext = createContext<IContext>({
  show: false,
  disabled: false,
});

const Accordion: FC<AccordionProps> = (props) => {
  const {
    children,
    className,
    disabled,
    initiallyExpanded,
    ...restProps
  } = props;
  const [show, setShow] = useState(false);
  const classes = classnames("Accordion", className);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className={classes} {...restProps}>
      <AccordionContext.Provider
        value={{
          show,
          disabled,
          initiallyExpanded,
          handleShow,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};
Accordion.defaultProps = defaultProps;
Accordion.displayName = "Accordion";

export default Accordion;

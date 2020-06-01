import React, { FC, useContext, useEffect } from "react";
import classnames from "classnames";
import { CSSTransition } from "react-transition-group";
import { classnamesType } from "../../interface";
import { AccordionContext } from ".";

type AccordionContainerProps = {
  className?: classnamesType;
  expanded?: boolean;
  transition?: string;
  duration?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  padding: "p-4",
};

const AccordionContainer: FC<AccordionContainerProps> = (props) => {
  const {
    children,
    className,
    expanded,
    transition,
    duration,
    padding,
    ...restProps
  } = props;
  const { show, initiallyExpanded, handleShow } = useContext(AccordionContext);
  useEffect(() => {
    if (initiallyExpanded) {
      if (handleShow) {
        handleShow(!show);
      }
    }
    // eslint-disable-next-line
  }, []);
  return (
    <CSSTransition
      in={show}
      classNames={"accordion-show"}
      timeout={200}
      unmountOnExit
    >
      <div
        aria-hidden={expanded ? false : true}
        className={"Accordion__panel"}
        role="region"
      >
        <div className={classnames(padding)} {...restProps}>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

AccordionContainer.defaultProps = defaultProps;
AccordionContainer.displayName = "AccordionContainer";

export default AccordionContainer;

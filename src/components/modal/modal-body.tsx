import React, { FC } from "react";

const ModalBody: FC = (props) => {
  const { children, ...restProps } = props;
  return <div className={"modal-body"} {...restProps}>{props.children}</div>;
};

export default ModalBody;

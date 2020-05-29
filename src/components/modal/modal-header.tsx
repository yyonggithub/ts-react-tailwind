import React, { FC } from "react";

const ModalHeader: FC = (props) => {
  const { children, ...restProps } = props;
  return <div className={'modal-header'} {...restProps}>{props.children}</div>;
};

export default ModalHeader;

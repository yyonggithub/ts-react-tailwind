import React, { FC, MouseEventHandler } from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import Button from "../button";

type ModalProps = {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
  onCancel?: MouseEventHandler;
  onConfirm?: MouseEventHandler;
} & Partial<typeof defaultProps>;

const defaultProps = {
  hasFooter: true,
  cancelText: "取消",
  confirmText: "确定",
};

const Modal: FC<ModalProps> = (props) => {
  const {
    toggle,
    setToggle,
    onCancel,
    onConfirm,
    cancelText,
    confirmText,
    hasFooter,
    children,
  } = props;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
    setToggle(!toggle);
    if (onCancel) {
      onCancel(e);
    }
  };

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onConfirm) {
      onConfirm(e);
      setToggle(!toggle);
    }
  };

  const footer = (
    <div className={"modal-footer"}>
      {"onCancel" in props ? (
        <Button
          className={"modal-confirm"}
          preset={"primary"}
          onClick={handleConfirm}
        >
          {confirmText}
        </Button>
      ) : null}
      {"onConfirm" in props ? (
        <Button
          className={"modal-cancel"}
          preset={"danger"}
          onClick={handleCancel}
        >
          {cancelText}
        </Button>
      ) : null}
    </div>
  );
  return toggle
    ? ReactDOM.createPortal(
        <div className={"modal-container"}>
          <div className={"modal-inner"}>
            <button className={"modal-close"} onClick={handleToggle} />
            {children}
            {hasFooter && ("onCancel" in props || "onConfirm" in props)
              ? footer
              : null}
          </div>
        </div>,
        document.querySelector("body") as Element
      )
    : null;
};

Modal.defaultProps = defaultProps;
Modal.displayName = "Modal";

export default Modal;

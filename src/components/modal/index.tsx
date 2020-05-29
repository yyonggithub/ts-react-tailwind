import React, { FC } from "react";
import ReactDOM from "react-dom";
import './style.scss'

type ModalProps = {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
} & Partial<typeof defaultProps>;

const defaultProps = {};

const Modal: FC<ModalProps> = (props) => {
  const { toggle, setToggle, children } = props;
  return toggle
    ? ReactDOM.createPortal(
        <div className={"modal-container"}>
          <div className={"modal-inner"}>
            <button
              className={"modal-close"}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            {children}
          </div>
        </div>,
        document.querySelector("body") as Element
      )
    : null;
};

Modal.defaultProps = defaultProps;
Modal.displayName = "Modal";

export default Modal;

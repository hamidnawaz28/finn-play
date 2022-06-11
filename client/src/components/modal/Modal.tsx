import React from "react";
import CloseIcon from "../../assets/images/close-icon.svg";
import "./modal.css";
import { Children } from "../../ts/interfaces";
interface ModalInterface {
  children: Children;
  setShow: () => void;
}
const Modal = ({ children, setShow }: ModalInterface) => {
  return (
    <div className="modal__wrap">
      <div className="modal">
        <div className="modal__close-wrap">
          <div className="modal__close-wrap__close" onClick={setShow}>
            <img src={CloseIcon} alt="" />
          </div>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

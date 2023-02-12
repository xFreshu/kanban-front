import { ReactNode } from "react";
import ReactDOM from "react-dom";

export interface CardProps {
  children: ReactNode;
}

export const RenderModal = (props: CardProps) => {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById("modal")!,
  );
};

interface ModalProps {
  onClose: (showModal: boolean) => void;
}

export const Modal = (props: ModalProps) => {
  return (
    <div>
      <h1>MODAL</h1>
    </div>
  );
};

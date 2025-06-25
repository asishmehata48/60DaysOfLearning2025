import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  if (!isOpen) return null; // Early return if not open

  return createPortal(
    <div className="fixed inset-0 z-40 grid place-items-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <AiOutlineClose onClick={onClose} className="cursor-pointer text-2xl" />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

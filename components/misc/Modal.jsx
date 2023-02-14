import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../../context/Contexts";

const Modal = ({ title, children, id }) => {
  const { modalOpen, toggleModalClose, modalId } = useContext(AuthContext);

  return (
    <div
      className={`modal__wrapper top-1/4 left-1/2 -translate-x-1/2 p-4  w-full lg:w-3/4 max-w-2xl rounded-lg drop-shadow-lg animate-fadeIn ${
        modalId === id && modalOpen ? "fixed z-50" : "hidden"
      }`}>
      <div className="modalBody relative p-4 rounded-lg bg-blue-100 shadow-lg shadow-blue-100 flex flex-col  w-full max-h-[70vh] overflow-y-auto">
        <h1 className="modal__title text-center text-2xl my-4 font-medium relative">
          {title}
        </h1>
        <XMarkIcon
          onClick={toggleModalClose}
          className="modal__closeBtn h-7 w-7 text-blue-500 absolute top-3 right-3 cursor-pointer"
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;

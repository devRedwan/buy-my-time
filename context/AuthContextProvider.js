import React, { useState } from "react";
import { AuthContext } from "./Contexts";

const AuthContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState("");

  const toggleModalOpen = (Id) => {
    if (modalId === Id) {
      setModalOpen(!modalOpen);
    } else {
      setModalOpen(true);
      setModalId(Id);
    }
  };

  const toggleModalClose = () => {
    setModalOpen(false);
    setModalId("");
  };

  return (
    <AuthContext.Provider
      value={{
        modalOpen,
        toggleModalOpen,
        toggleModalClose,
        modalId,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

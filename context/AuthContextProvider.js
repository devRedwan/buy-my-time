import React, { useState } from "react";
import { AuthContext } from "./Contexts";

const AuthContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    !modalOpen ? setModalOpen(true) : setModalOpen(false);
  };

  return (
    <AuthContext.Provider value={{ modalOpen, setModalOpen, toggleModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

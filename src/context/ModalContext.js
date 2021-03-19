import React, { useState } from "react";

const ModalContext = React.createContext({});

export function ModalContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { auth } from "../firebase/init";
import { AuthContext } from "./Contexts";

const AuthContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [currentUser, setCurrentUser] = useState();

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

  const signUp = (name, email, password) => {
    const loadingToast = toast.loading("Creating Profile ...");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = auth.currentUser;
        updateProfile(newUser, {
          displayName: name,
        }).then(() => {
          toast.success(`Welcome ${userCredential.user.displayName} 🎊🥳`, {
            id: loadingToast,
            icon: "🙌",
            style: {
              background: "#E2F1FF",
              fontSize: "20px",
              maxWidth: "100vw",
            },
          });
        });
      })
      .catch((error) => {
        toast.error(
          `Oops! ${error.message
            .replace("Firebase: Error (auth/", " ")
            .replace(").", " ")}. Please Try Again.`,
          {
            id: loadingToast,
            duration: 3000,
          }
        );
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const values = {
    currentUser,
    modalId,
    modalOpen,
    setModalOpen,
    signUp,
    toggleModalOpen,
    toggleModalClose,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

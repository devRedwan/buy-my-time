import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { auth } from "../firebase/init";
import { AuthContext } from "./Contexts";

const AuthContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [userLoading, setUserLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const initialRender = useRef(true);

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
          toast.success(
            `Welcome to BuyMyTime, ${userCredential?.user?.displayName} 🎊🥳`,
            {
              id: loadingToast,
              icon: "🙌",
              style: {
                background: "#E2F1FF",
                fontSize: "20px",
                maxWidth: "100vw",
              },
            }
          );
        });
        setModalOpen(false);
      })
      .catch((error) => {
        toast.error(
          `Oops! ${error.message
            .replace("Firebase: Error (auth/", " ")
            .replace(").", " ")}. Please Try Again.`,
          {
            id: loadingToast,
            duration: 2000,
          }
        );
      });
  };

  const signIn = (email, password) => {
    const loadingToast = toast.loading("Signing In ...");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCreds) => {
        setModalOpen(false);
        userCreds &&
          toast.success(
            `Welcome to BuyMyTime, ${userCreds?.user?.displayName} 🎊🥳`,
            {
              id: loadingToast,
              icon: "🙌",
              style: {
                background: "#E2F1FF",
                fontSize: "20px",
                maxWidth: "100vw",
              },
            }
          );
      })
      .catch((error) => {
        toast.error(
          `Oops! ${error.message
            .replace("Firebase: Error (auth/", " ")
            .replace("-", " ")
            .replace(").", " ")}. Please Try Again.`,
          {
            id: loadingToast,
            duration: 2000,
          }
        );
      });
  };

  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (currentUser) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        if (JSON.parse(localStorage.getItem("cart"))) {
          const storedCart = JSON.parse(localStorage.getItem("cart"));
          setCart([...cart, ...storedCart]);
        }
      } else {
        setCart([]);
      }
    });

    setTimeout(() => {
      setUserLoading(false);
    }, 500);

    return unsubscribe;
  }, []);

  const values = {
    userLoading,
    currentUser,
    modalId,
    modalOpen,
    cart,
    setCart,
    setModalOpen,
    signUp,
    signIn,
    signOut,
    toggleModalOpen,
    toggleModalClose,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

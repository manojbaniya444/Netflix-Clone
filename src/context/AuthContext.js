import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [isModalStateChanged, setIsModalStateChanged] = useState(false);

  const navigate = useNavigate();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    signOut(auth);
  };

  const closePlayer = () => {
    setShowModal(false);
    setIsModalStateChanged(!isModalStateChanged);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        user,
        logIn,
        signOutUser,
        showModal,
        setShowModal,
        closePlayer,
        isModalStateChanged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider };

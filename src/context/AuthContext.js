import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [isModalStateChanged, setIsModalStateChanged] = useState(false);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "user", email), {
      favouriteList: [],
    });
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

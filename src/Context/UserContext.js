import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token");
    return token || null;
  });

  useEffect(() => {
    let timeoutHandle = 0;
    if (token) {
      localStorage.setItem("token", token);
      const decoded = jwt_decode(token);
      timeoutHandle = setTimeout(() => {
        setToken(null);
      }, decoded.exp * 1000 - Date.now());
    } else {
      localStorage.removeItem("token");
    }
    return () => {
      if (timeoutHandle !== 0) {
        clearTimeout(timeoutHandle);
      }
    };
  }, [token]);

  const signIn = async (email, password) => {
    try {
      const response = await axios.post(
        `https://matrixshop-backend.herokuapp.com/users/signin`,
        {
          email,
          password,
        }
      );
      const { token } = response.data;
      setToken(token);
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(
        `https://matrixshop-backend.herokuapp.com/users/signup`,
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      const { token } = response.data;
      setToken(token);
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = () => {
    setToken(null);
  };

  let user = null;
  if (token) {
    user = jwt_decode(token);
  }

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

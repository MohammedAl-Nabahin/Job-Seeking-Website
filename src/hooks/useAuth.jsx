import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate()

  
  const logout = () => {
    localStorage.clear();
    setAuthorized(false);
  };

  const login = () => {
      setAuthorized(true);
  };
  
  useEffect(() => {   
    if (localStorage.getItem("token")) {
     setAuthorized(true);
    }
      if(authorized){
       navigate('/')
      }
     
    
  }, [authorized]);

  return {
    authorized,
    setAuthorized,
    loading,
    setLoading,
    token,
    setToken,
    logout,
    login,
  };
};

export default useAuth;
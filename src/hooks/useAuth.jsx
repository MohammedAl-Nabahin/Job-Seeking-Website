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
    navigate('/')
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthorized(true);
    }
  }, []);

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
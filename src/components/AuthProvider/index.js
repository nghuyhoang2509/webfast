import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthProvider({ children }) {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.email) {
      navigate("/");
    } else {
      navigate("/login");
    }
    return () => {};
  }, [auth, navigate]);

  return children;
}

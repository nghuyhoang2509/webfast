import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function AuthProvider({ children }) {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <>
      {auth.email ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
}

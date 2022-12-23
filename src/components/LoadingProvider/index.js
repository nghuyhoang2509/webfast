import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../pages/Loading";

export default function LoadingProvider({ children }) {
  const loading = useSelector((state) => state.page.loading);
  return <>{loading ? <Loading /> : children}</>;
}

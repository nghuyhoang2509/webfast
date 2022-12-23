import React from "react";
import { Skeleton } from "antd";
import "./Style.scss";

export default function Loading() {
  return (
    <div className="flex-center loading">
      <Skeleton className="m-2" active></Skeleton>
      <Skeleton className="m-2" active></Skeleton>
      <Skeleton className="m-2" active></Skeleton>
    </div>
  );
}

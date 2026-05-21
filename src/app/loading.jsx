import { Spinner } from "@heroui/react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;

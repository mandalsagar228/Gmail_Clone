import React from "react";
import { useOutletContext } from "react-router-dom";

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  return (
    <div
      style={
        openDrawer ? { marginLeft: "250px", width: "100%" } : { width: "100%" }
      }
    >
      View Email
    </div>
  );
};

export default ViewEmail;

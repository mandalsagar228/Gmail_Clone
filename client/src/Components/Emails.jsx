import React from "react";
import { useOutletContext } from "react-router-dom";

const Emails = () => {
  const { openDrawer } = useOutletContext();
  return (
    <div
      style={
        openDrawer ? { marginLeft: "250px", width: "100%" } : { width: "100%" }
      }
    >
      email
    </div>
  );
};

export default Emails;

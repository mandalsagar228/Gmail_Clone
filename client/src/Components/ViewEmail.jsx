import React from "react";
import { useOutletContext } from "react-router-dom";

// ViewEmail is where CONTENT  of  an individual emails will be seen
const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  return (
    <div
      style={
        openDrawer ? { marginLeft: "250px", width: "100%" } : { width: "100%" }
      }
    >
      View Email is where CONTENT of an individual emails will be seen{" "}
    </div>
  );
};

export default ViewEmail;

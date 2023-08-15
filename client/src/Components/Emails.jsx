import React from "react";

const Emails = ({ openDrawer }) => {
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

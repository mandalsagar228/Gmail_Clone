import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Api_URLS } from "../Services/Api.urls";
import useAPi from "../Hooks/useApi";

const Emails = () => {
  const { type } = useParams();
  console.log(type);
  const getEmailService = useAPi();
  const { openDrawer } = useOutletContext();

  useEffect(() => {
    getEmailService.call({}, Api_URLS.getEmailByType, type);
  }, [type]);
  return (
    <div
      style={
        openDrawer ? { marginLeft: "250px", width: "100%" } : { width: "100%" }
      }
    >
      List of emails will be here.
    </div>
  );
};

export default Emails;

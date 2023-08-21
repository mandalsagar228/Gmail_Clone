import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Api_URLS } from "../Services/Api.urls";
import useAPi from "../Hooks/useApi";
import Email from "./Email";
import { Box, Checkbox, List } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Emails = () => {
  const { type } = useParams();
  console.log(type);
  const getEmailService = useAPi();
  const { openDrawer } = useOutletContext();

  useEffect(() => {
    getEmailService.call({}, Api_URLS.getEmailByType, type);
  }, [type]);
  return (
    <Box
      style={
        openDrawer ? { marginLeft: "250px", width: "100%" } : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" />
        <DeleteOutlineIcon />
      </Box>
      <Box>
        <List>
          {getEmailService?.response?.map((email) => (
            <Email key={email._id} email={email} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Emails;

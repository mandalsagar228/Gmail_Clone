import React from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ArrowBack, Delete, WindPower } from "@mui/icons-material";
import { emptyProfilePic } from "../Constant/Constant";
import styled from "@emotion/styled";

const IconWrapper = styled(Box)`
  padding: 15px;
`;
const Subject = styled(Typography)`
  font-size: 22px;
`;

const Indicator = styled(Box)`
  font-size: 15px;
`;

// ViewEmail is where CONTENT  of  an individual emails will be seen
const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  const { state } = useLocation();
  const { email } = state;
  return (
    <Box
      style={
        openDrawer ? { marginLeft: "250px", width: "100%" } : { width: "100%" }
      }
    >
      <IconWrapper>
        <ArrowBack
          onClick={() => window.history.back()}
          color="action"
          fontSize="small"
        />
        <Delete
          fontSize="small"
          color="action"
          style={{ marginLeft: "40px" }}
        />
      </IconWrapper>
      <Subject>{email.subject}</Subject>
      <Indicator component="span">{email.type}</Indicator>

      <Box>
        <img src={emptyProfilePic} alt="empty" />
        <Box>
          <Box>
            <Typography>
              {email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62; </Box>
            </Typography>
            <Box>
              {new window.Date(email.date).getDate()}
              {new window.Date(email.date).toLocaleDateString("default", {
                month: "long",
              })}
              {new window.Date(email.date).getFullYear()}
            </Box>
          </Box>
          <Typography>{email.body}</Typography>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default ViewEmail;

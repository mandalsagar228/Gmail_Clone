import React from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { emptyProfilePic } from "../Constant/Constant";
import styled from "@emotion/styled";
import { Api_URLS } from "../Services/Api.urls";
import useAPi from "../Hooks/useApi";

const IconWrapper = styled(Box)`
  padding: 15px;
`;
const Subject = styled(Typography)`
  font-size: 22px;
  margin: 10px 0 20px 75px;
  display: flex;
`;

const Indicator = styled(Box)`
  font-size: 15px;
  background: #ddd;
  color: #222;
  padding: 2px 4px;
  margin-left: 6px;
  border-radius: 4px;
  align-self: center;
`;

const Container = styled(Box)`
  margin-left: 15px;
  /* width: 100%; */
  display: flex;
`;
const Wrapper = styled(Box)`
  display: flex;
  /* width: 100%; */
`;
const ToWrapper = styled(Box)`
  font-size: 12px;
  color: #5e5e5e;
`;
const Date = styled(Box)`
  margin: 0 50px 0 auto;
  font-size: 12px;
`;
const Image = styled("img")`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 5px 10px 0 10px;
  background: #cccccc;
`;

// ViewEmail is where CONTENT  of  an individual emails will be seen
const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  const { state } = useLocation();
  const { email } = state;
  const moveEmailToBinService = useAPi(); //initialise useApi

  // Delete(move to bin) after clicking in delete icon
  const deleteEmail = () => {
    moveEmailToBinService.call([email._id], Api_URLS.moveEmailToBin);
    window.history.back();
  };
  return (
    <Box style={openDrawer ? { marginLeft: "250px" } : { width: "100%" }}>
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
          onClick={() => deleteEmail()}
        />
      </IconWrapper>
      <Subject>
        {email.subject}
        <Indicator component="span">{email.type}</Indicator>
      </Subject>

      <Container>
        <Image src={emptyProfilePic} alt="empty" />
        <Box style={{ width: "100%" }}>
          <Wrapper>
            <Typography>
              {email.name}
              <ToWrapper component="span">
                &nbsp;&#60;{email.to}&#62;{" "}
              </ToWrapper>
            </Typography>
            <Date>
              {new window.Date(email.date).getDate()}
              {new window.Date(email.date).toLocaleDateString("default", {
                month: "long",
              })}
              {new window.Date(email.date).getFullYear()}
            </Date>
          </Wrapper>
          <Typography style={{ margin: "10px 10px" }}>{email.body}</Typography>
        </Box>
      </Container>
      <Box></Box>
    </Box>
  );
};

export default ViewEmail;

import React, { useEffect, useState } from "react";
import useAPi from "../Hooks/useApi";
import { Api_URLS } from "../Services/Api.urls";
import {
  Dialog,
  Box,
  Typography,
  styled,
  InputBase,
  TextField,
  Button,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const ComposeHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background: #f2f6fc;
  & > p {
    font-weight: 500px;
    font-size: 14px;
  }
`;

const RecipientWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  & > div {
    font-size: 14px;
    border-bottom: 1px solid #f5f5f5;
    margin-top: 10px;
  }
`;

const SendButton = styled(Button)`
  background: #0b57d0;
  color: #fff;
  font-weight: 500px;
  text-transform: none;
  border-radius: 20px;
  width: 100px;
  :hover {
    background: #447bd3;
  }
`;

const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;
// This function will compose email field where you write you receiver's email address, subject and msg and finally after clicking on SEND  button ,email will be sent
const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});

  // Initialising the custom hooks that send client side data to the server
  const sentEmailService = useAPi();

  // For sending DRAFTS mails
  const saveDraftMail = useAPi();

  // Function for closing the compose modal  after clicking on X button:
  const onCloseCompose = async (e) => {
    e.preventDefault();
    setOpenDialog(false);

    const payload = {
      to: data.to,
      subject: data.subject,
      body: data.msgBody,
      date: new Date(),
      image: "",
      name: "Sagar Mandal",
      starred: "false",
      type: "drafts",
    };
    await saveDraftMail.call(payload, Api_URLS.saveDraftEmail);
  };

  // Sending mail to the server
  const SendMail = async (e) => {
    e.preventDefault();
    const payload = {
      to: data.to,
      subject: data.subject,
      body: data.msgBody,
      date: new Date(),
      image: "",
      name: "Sagar Mandal",
      starred: "false",
      type: "sent",
    };

    // Sending mail data(payload) to the call function  in useApi hooks
    await sentEmailService.call(payload, Api_URLS.saveSentEmail);
    if (!sentEmailService.call) {
      setOpenDialog(false);
      setData({});
    }

    setOpenDialog(false);
  };

  // Getting  input data from input field

  const onValueChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    console.log({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <>
      <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
        <ComposeHeader>
          <Typography>New Message</Typography>
          <Close fontSize="small" onClick={(e) => onCloseCompose(e)} />
        </ComposeHeader>
        <RecipientWrapper>
          <InputBase
            placeholder="recipient"
            name="to"
            onChange={(e) => onValueChange(e)}
          />
          <InputBase
            placeholder="Subject"
            name="subject"
            onChange={(e) => onValueChange(e)}
          />
        </RecipientWrapper>
        <TextField
          multiline
          rows={20}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          name="msgBody"
          onChange={(e) => onValueChange(e)}
        />
        <Footer>
          <SendButton onClick={(e) => SendMail(e)}>Send</SendButton>
          <DeleteOutline onClick={() => setOpenDialog(false)} />
        </Footer>
      </Dialog>
    </>
  );
};

export default ComposeMail;

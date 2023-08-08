import React, { useState } from "react";
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

const mailData = {
  to: "",
  subject: "",
  msg: "",
};
const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState(mailData);
  // Function for closing the compose modal  after clickin on X button:
  const onCloseCompose = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  // Sending mail to the server
  const SendMail = async (e) => {
    e.preventDefault();

    setOpenDialog(false);
  };

  // Getting  input data from input field
  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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
          name="msg"
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

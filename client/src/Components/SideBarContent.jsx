import React, { useState } from "react";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SideBar_Data } from "../Config/SideBar.config";
import ComposeMail from "./ComposeMail";

const ComposeButton = styled(Button)`
  background: #c2e7ff;
  color: #001d35;
  padding: 15px;
  border-radius: 16px;
  min-width: 140px;
  text-transform: none;
  :hover {
    background: #c2e7ff;
  }
`;

const Container = styled(Box)`
  padding: 8px;
  & > ul {
    padding: 10px 0 0 5px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
  & > ul > li > svg {
    margin-right: 5px;
  }
`;
const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const onComposeClick = () => {
    setOpenDialog(true);
  };
  return (
    <Container>
      <ComposeButton onClick={() => onComposeClick()}>
        <CreateOutlined />
        Compose
      </ComposeButton>

      <List>
        {SideBar_Data.map((data) => (
          <ListItem>
            {" "}
            <data.icon fontSize="small" /> {data.title}
          </ListItem>
        ))}
      </List>

      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SideBarContent;

import React, { useState } from "react";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SideBar_Data } from "../Config/SideBar.config";
import ComposeMail from "./ComposeMail";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "../Routes/Route";

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
  & > ul > a {
    text-decoration: none;
    color: inherit;
  }
  & > ul > a > li > svg {
    margin-right: 5px;
  }
`;
const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { type } = useParams();

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
          <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
            <ListItem
              style={
                type === data.name.toLocaleLowerCase()
                  ? { background: "#D3E3FD", borderRadius: "0 16px 16px 0" }
                  : {}
              }
            >
              {" "}
              <data.icon fontSize="small" /> {data.title}
            </ListItem>
          </NavLink>
        ))}
      </List>

      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SideBarContent;

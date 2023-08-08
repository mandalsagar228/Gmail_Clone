import React from "react";
import { AppBar, Toolbar, styled, Box, InputBase } from "@mui/material";
import {
  Menu,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";

import { gmailLogo } from "../Constant/Constant";

const StyledAppBar = styled(AppBar)({
  background: "#f5f5f5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)`
  background: #eaf1fb;
  margin-left: 80px;
  border-radius: 8px;
  min-width: 690px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  & > div {
    width: 100%;
    padding: 0 10px;
  }
`;
const MenuIcon = styled(Menu)`
  :hover {
    cursor: pointer;
  }
`;
const IconWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: end;
  & > svg {
    margin-left: 20px;
  }
`;
const Header = ({ toggleDrawer }) => {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action" onClick={toggleDrawer} />
          <img
            src={gmailLogo}
            alt="gmailLogo"
            style={{ width: 110, marginLeft: 15 }}
          />

          <SearchWrapper>
            <Search color="action" />
            <InputBase placeholder="Search Mail" />
            <Tune color="action" />
          </SearchWrapper>
          <IconWrapper>
            <HelpOutlineOutlined color="action" />
            <SettingsOutlined color="action" />
            <AppsOutlined color="action" />
            <AccountCircleOutlined color="action" />
          </IconWrapper>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;

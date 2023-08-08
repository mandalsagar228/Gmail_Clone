import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <SideBar openDrawer={openDrawer} />
    </>
  );
};

export default Main;

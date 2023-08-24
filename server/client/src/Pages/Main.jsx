import React, { Suspense } from "react";
import { useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../Common/SuspenseLoader";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <SideBar openDrawer={openDrawer} />
      <Suspense fallback={<SuspenseLoader />}>
        <Outlet context={{ openDrawer }} />
      </Suspense>
    </>
  );
};

export default Main;

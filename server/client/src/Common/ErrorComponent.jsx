import React from "react";
import { useRouteError } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
const ErrorPage = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorComponent = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <Box>
      <ErrorPage>Error while loading this page.{error}</ErrorPage>
    </Box>
  );
};

export default ErrorComponent;

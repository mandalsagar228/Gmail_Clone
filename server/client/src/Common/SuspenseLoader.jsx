import React from "react";
import { CircularProgress, Box, Typography, styled } from "@mui/material";

const Loader = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SuspenseLoader = () => {
  return (
    <Loader>
      <CircularProgress />
      <Typography>Loading...</Typography>
    </Loader>
  );
};

export default SuspenseLoader;

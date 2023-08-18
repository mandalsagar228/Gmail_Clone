import React from "react";
import { useRouteError } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Box>
      <Typography>Error while loading this page.</Typography>
    </Box>
  );
};

export default ErrorComponent;

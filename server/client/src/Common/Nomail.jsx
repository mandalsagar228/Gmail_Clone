import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
const Component = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  opacity: 0.8;
  width: 100%;
`;
const StyleDivider = styled(Divider)`
  width: 100%;
  margin-top: 10px;
`;

const Nomail = ({ message }) => {
  return (
    <Component>
      <Typography>{message.heading}</Typography>
      <Typography>{message.subHeading}</Typography>
      <StyleDivider />
    </Component>
  );
};

export default Nomail;

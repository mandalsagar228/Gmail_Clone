import styled from "@emotion/styled";
import { Star, StarBorder } from "@mui/icons-material";
import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";

const Wrapper = styled(Box)`
  padding: 0 0 0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  /* margin-bottom: 10px; */
  :hover {
    background: #f2f6fc;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid white;
  }

  & > div {
    display: flex;
    width: calc(100%-250px);
    justify-content: space-between;
  }
`;

const Email = ({ email }) => {
  return (
    <Wrapper>
      <Checkbox size="small" />
      <Star fontSize="small" style={{ marginRight: "10px" }} />
      <StarBorder />
      <Box>
        <Typography>{email.name}</Typography>
        <Typography>
          {email.subject}
          {email.body && "-"}
          {email.body}
        </Typography>
        <Typography>
          {new window.Date(email.date).getDate()}
          {new window.Date(email.date).toLocaleDateString("default", {
            month: "long",
          })}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default Email;

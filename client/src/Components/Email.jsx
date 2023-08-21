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
    width: 100%;
    & > p {
      font-size: 14px;
    }
  }
`;
const Indicator = styled(Typography)`
  font-size: 12px !important;
  background: #ddd;
  padding: 0 4px;
  border-radius: 4px;
  margin-right: 6px;
`;

const Date = styled(Typography)`
  margin-right: 20px;
  margin-left: auto;
  font-size: 12px;
  color: #5f6368;
`;

const Email = ({ email, selectedEmails }) => {
  console.log("This  data is from mail", selectedEmails);
  return (
    <Wrapper>
      <Checkbox size="small" checked={selectedEmails?.includes(email._id)} />
      <Star fontSize="small" style={{ marginRight: "5px" }} />
      <StarBorder fontSize="small" style={{ marginRight: "10px" }} />
      <Box>
        <Typography style={{ width: "200px", overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Indicator>{email.type}</Indicator>
        <Typography>
          {email.subject}
          {email.body && " - "}
          {email.body}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()}
          {new window.Date(email.date).toLocaleDateString("default", {
            month: "long",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;

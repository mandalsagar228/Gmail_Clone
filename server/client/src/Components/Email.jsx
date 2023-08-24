import styled from "@emotion/styled";
import { Star, StarBorder } from "@mui/icons-material";
import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../Routes/Route";
import useAPi from "../Hooks/useApi";
import { Api_URLS } from "../Services/Api.urls";

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

const Email = ({
  email,
  selectedEmails,
  setRefreshScreen,
  setSelectedEmails,
}) => {
  const navigate = useNavigate();
  const { type } = useParams();
  console.log("This  data is from mail", selectedEmails);
  const toggleEmailStarredService = useAPi(); //initialise useApi hook

  const toggleStarredEmails = () => {
    toggleEmailStarredService.call(
      { id: email._id, value: !email.starred },
      Api_URLS.toggleStarredEmail
    );
    console.log("toggle:", !email.starred);
    setRefreshScreen((prevState) => !prevState);
  };

  const onValueChange = () => {
    if (selectedEmails.includes(email._id)) {
      setSelectedEmails((prevState) =>
        prevState.filter((id) => id !== email._id)
      );
    } else {
      setSelectedEmails((prevState) => [...prevState, email._id]);
    }
  };

  return (
    <Wrapper>
      <Checkbox
        size="small"
        checked={selectedEmails?.includes(email._id)}
        onChange={() => onValueChange()}
      />
      {type === "bin" ? null : email.starred ? (
        <Star
          fontSize="small"
          style={{ marginRight: "5px", color: "#c69605" }}
          onClick={() => toggleStarredEmails()}
        />
      ) : (
        <StarBorder
          fontSize="small"
          style={{ marginRight: "10px" }}
          onClick={() => toggleStarredEmails()}
        />
      )}

      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
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

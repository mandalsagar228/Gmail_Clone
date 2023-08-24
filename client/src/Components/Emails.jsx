import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Api_URLS } from "../Services/Api.urls";
import useAPi from "../Hooks/useApi";
import Email from "./Email";
import { Box, Checkbox, List } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styled from "@emotion/styled";
import Nomail from "../Common/Nomail";
import { EMPTY_TABS } from "../Constant/Constant";

const CheckBox = styled(Checkbox)`
  :hover {
    background: #757373;
  }
`;
const DeleteIcon = styled(DeleteOutlineIcon)`
  :hover {
    background: #757373;
    cursor: pointer;
    border-radius: 100%;
  }
`;

const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [resfreshScreen, setRefreshScreen] = useState(false);

  const { type } = useParams();

  const getEmailService = useAPi();
  const moveEmailToBinService = useAPi();
  const { openDrawer } = useOutletContext();

  useEffect(() => {
    const fetchData = async () => {
      await getEmailService.call({}, Api_URLS.getEmailByType, type);
      console.log("this is response inside", getEmailService.response);
    };

    fetchData();
  }, [type, resfreshScreen]);

  // Checking whether  the checkbox is checked or not[if checked,send the data to email.jsx componenet as a prop ]
  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailService?.response?.map((email) => email._id); // Mapping the RESPONSE that is come from the getEmailService.response of useApi hooks

      console.log("This is response", getEmailService.response);
      setSelectedEmails(emails); //[if checked,send the data to email.jsx componenet as a prop to check in chekbox ]
    } else {
      setSelectedEmails([]); //to deselect the  checked email
    }
  };

  // Function for deleting selected emails [all checkbox]
  const deleteSelectedEmails = (e) => {
    if (type === "bin") {
    } else {
      moveEmailToBinService.call(selectedEmails, Api_URLS.moveEmailToBin);
      setRefreshScreen((prevState) => !prevState);
    }
  };
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: "250px", width: "calc(100% - 250px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CheckBox size="small" onChange={(e) => selectAllEmails(e)} />
        <DeleteIcon onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <Box>
        <List>
          {console.log("before mapping", getEmailService.response)}
          {Array.isArray(getEmailService.response) &&
            getEmailService?.response?.map((email) => (
              <Email
                key={email._id}
                email={email}
                selectedEmails={selectedEmails}
                setRefreshScreen={setRefreshScreen}
              />
            ))}
        </List>
        {getEmailService?.response?.length === 0 && (
          <Nomail message={EMPTY_TABS[type]} />
        )}
      </Box>
    </Box>
  );
};

export default Emails;

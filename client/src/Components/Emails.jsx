import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Api_URLS } from "../Services/Api.urls";
import useAPi from "../Hooks/useApi";
import Email from "./Email";
import { Box, Checkbox, List } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import debounce from "lodash.debounce";

const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [resfreshScreen, setRefreshScreen] = useState(false);
  // console.log(" selectedEmails", selectedEmails);

  const { type } = useParams();

  const getEmailService = useAPi();
  const moveEmailToBinService = useAPi();
  const { openDrawer } = useOutletContext();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await getEmailService.call({}, Api_URLS.getEmailByType, type);
  //     console.log("this is response inside", getEmailService.response);
  //   };

  //   fetchData();
  // }, [type]);

  // Define a debounced version of the fetchData function
  const debouncedFetchData = debounce(async () => {
    await getEmailService.call({}, Api_URLS.getEmailByType, type);
  }, 6000); // Adjust the debounce delay as needed

  useEffect(() => {
    // Call the debouncedFetchData function when type changes
    debouncedFetchData();
  }, [type]);

  // useEffect(() => {
  //   console.log("from useeffect", getEmailService.response);
  // }, [getEmailService.response]);

  // Checking whether  the checkbox is checked or not[if checked,send the data to email.jsx componenet as a prop ]
  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailService?.response?.map((email) => email._id); // Mapping the RESPONSE that is come from the getEmailService.response of useApi hooks

      console.log("This is response", getEmailService.response);
      setSelectedEmails(emails); //[if checked,send the data to email.jsx componenet as a prop ]
    } else {
      setSelectedEmails([]);
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
        <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
        <DeleteOutlineIcon onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <Box>
        {/* <List>
          {console.log("before mapping", getEmailService.response)}
          {getEmailService.response?.map((email) => (
            <Email
              key={email._id}
              email={email}
              selectedEmails={selectedEmails}
            />
          ))}
        </List> */}
        <List>
          {console.log("before mapping", getEmailService.response)}
          {Array.isArray(getEmailService.response) &&
            getEmailService.response?.map((email) => (
              <Email
                key={email._id}
                email={email}
                selectedEmails={selectedEmails}
              />
            ))}
        </List>
      </Box>
    </Box>
  );
};

export default Emails;

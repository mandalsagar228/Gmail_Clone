import axios from "axios";

const API_URL = "http://localhost:8000";

const API_GMAIL = async () => {
  return await axios({
    method: "post",
    url: `${API_URL}/endpoint`,
    data: {},
  });
};
export default API_GMAIL;

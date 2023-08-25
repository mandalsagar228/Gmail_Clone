import axios from "axios";

const API_URL = "https://gmailclone.cyclic.cloud/";

const API_GMAIL = async (payload, urlObject, type) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endPoint}/${type}`,
    data: payload,
  });
};
export default API_GMAIL;

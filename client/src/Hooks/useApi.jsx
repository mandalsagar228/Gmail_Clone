import { useState } from "react";
import API from "../Services/api";

// custom hooks
const useAPi = () => {
  const [response, setResponse] = useState();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const call = async (payload, urlObject, type = "") => {
    setError("");
    setIsLoading(true);

    try {
      let res = await API(payload, urlObject, type);
      setResponse((prevData) => res.data);
      console.log("API Response:", res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { call, response, error, isLoading };
};

export default useAPi;

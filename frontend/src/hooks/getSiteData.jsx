import { useEffect, useState } from "react";

const useAuthToken = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAuthToken = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/site-data", {
          method: "GET",
        });
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error verifying authentication", err);
      }
    };

    fetchAuthToken();
  }, []);

  return data;
};

export default useAuthToken;

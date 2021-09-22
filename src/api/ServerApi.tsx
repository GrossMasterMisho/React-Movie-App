import axios from "axios";

const BaseUrl = "http://www.omdbapi.com/";

export const fetchMovies = async () => {
  const {
    data: { Search },
  } = await axios.get(
    `${BaseUrl}/?s=sos&apikey=${process.env.REACT_APP_OBMD_API_KEY}`
  );

  return Search;
};

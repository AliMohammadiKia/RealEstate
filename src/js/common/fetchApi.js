const baseUrl = "https://bayut.p.rapidapi.com/";
const apiKey = "36b5219f26msh7cb33c4b83b64cbp1307bejsn44fd537f40ef";

export const fetchApi = async (url) => {
  const response = await fetch(baseUrl + url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  const data = await response.json();
  return data;
};

const baseUrl = "https://bayut.p.rapidapi.com/";
const apiKey = "f32e57abfamsh63eea3f0c2844f3p167155jsnbac6af7ebe2c";

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

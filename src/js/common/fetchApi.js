const baseUrl = "https://bayut.p.rapidapi.com/";
const apiKey = "ccef6bfd5cmsh1f8739ea5577b24p153bc2jsnf4de30dffb78";

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

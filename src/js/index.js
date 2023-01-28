import { fetchApi } from "./common/fetchApi.js";
import { loading, removeLoading } from "./common/loading.js";
import property from "./common/property.js";
import navbar from "./common/navbar.js";

const rentEstateContainer = document.querySelector("#rent_estate_container");
const buyEstateContainer = document.querySelector("#buy_estate_container");
const header = document.querySelector("header");

const renderNavbar = () => {
  header.innerHTML = navbar(false);
};

const renderData = () => {
  fetchData("rent", rentEstateContainer);
  fetchData("sale", buyEstateContainer);
};

const fetchData = async (type, container) => {
  loading(container);
  const data = await fetchApi(
    `properties/list?locationExternalIDs=5002&purpose=for-${type}&hitsPerPage=8`
  );
  data.hits.map((item) => {
    const elem = property(item);
    container.innerHTML += elem;
  });
  removeLoading();
};

renderNavbar();
window.addEventListener("DOMContentLoaded", renderData);

import { fetchApi } from "../common/fetchApi.js";
import { loading, removeLoading } from "../common/loading.js";
import property from "../common/property.js";
import navbar from "../common/navbar.js";
import changeActiveItem from "../common/changeActiveItem.js";

const params = new URL(document.location).searchParams;
const container = document.querySelector("#container");
const header = document.querySelector("header");

const renderNavbar = () => {
  header.innerHTML = navbar();
  changeActiveItem();
};

const purpose = params.get("purpose") || "for-rent";
const rentFrequency = params.get("rentFrequency") || "yearly";
const minPrice = params.get("minPrice") || "0";
const maxPrice = params.get("maxPrice") || "1000000";
const roomsMin = params.get("roomsMin") || "0";
const bathsMin = params.get("bathsMin") || "0";
const sort = params.get("sort") || "price-desc";
const areaMax = params.get("areaMax") || "35000";
const locationExternalIDs = params.get("locationExternalIDs") || "5002";
const categoryExternalID = params.get("categoryExternalID") || "4";

const fetchData = async () => {
  loading(container);
  const data = await fetchApi(
    `properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  data.hits.map((item) => {
    const elem = property(item, false);
    container.innerHTML += elem;
  });
  removeLoading();
};

renderNavbar();
window.addEventListener("DOMContentLoaded", fetchData);

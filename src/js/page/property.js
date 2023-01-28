import { fetchApi } from "../common/fetchApi.js";
import { loading, removeLoading } from "../common/loading.js";
import propertyDetail from "../common/propertyDetail.js";
import navbar from "../common/navbar.js";
import changeActiveItem from "../common/changeActiveItem.js";

const id = new URL(document.location).searchParams.get("id");
const container = document.querySelector("#container");
const header = document.querySelector("header");

const renderNavbar = () => {
  header.innerHTML = navbar();
  changeActiveItem();
};

const fetchData = async () => {
  loading(container);
  const data = await fetchApi(`properties/detail?externalID=${id}`);
  const elem = propertyDetail(data);
  container.innerHTML = elem;
  removeLoading();
};

renderNavbar();
window.addEventListener("DOMContentLoaded", fetchData);

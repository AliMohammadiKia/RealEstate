import { fetchApi } from "./common/fetchApi.js";
import { loading, removeLoading } from "./common/loading.js";
import propertyDetail from "./common/propertyDetail.js";

const id = new URL(document.location).searchParams.get("id");
const container = document.querySelector("#container");

const fetchData = async () => {
  loading(container);
  const data = await fetchApi(`properties/detail?externalID=${id}`);
  const elem = propertyDetail(data);
  container.innerHTML = elem;
  removeLoading();
};

window.addEventListener("DOMContentLoaded", fetchData);

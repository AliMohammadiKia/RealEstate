const { pathname, search } = new URL(document.location);
const liElems = document.querySelectorAll("ul li");

const update = (id) => {
  liElems.forEach((li) => {
    li.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
};

const changeActiveItem = () => {
  if (pathname === "/index.html") {
    update("menu_home");
  } else if (
    pathname === "/src/search.html" &&
    search === "?purpose=for-rent"
  ) {
    update("menu_rent");
  } else if (
    pathname === "/src/search.html" &&
    search === "?purpose=for-sale"
  ) {
    update("menu_sale");
  } else {
    update("menu_search");
  }
};

export default changeActiveItem;

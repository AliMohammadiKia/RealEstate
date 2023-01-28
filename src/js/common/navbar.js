const navbar = (src = true) => {
  return `
      <menu class="flex justify-between items-center">
        <a href=${
          src ? "../index.html" : "./index.html"
        } class="text-xl font-bold text-indigo-400">
          RealEstate
        </a>
        <ul class="flex space-x-5">
          <li class="menu__item" id="menu_home">
            <a href=${src ? "../index.html" : "./index.html"}>Home</a>
          </li>
          <li class="menu__item" id="menu_search">
            <a href=${src ? "./search.html" : "./src/search.html"}>Search</a>
          </li>
          <li class="menu__item" id="menu_rent">
            <a href=${
              src
                ? "./search.html?purpose=for-rent"
                : "./src/search.html?purpose=for-rent"
            }>Rent Estate</a>
          </li>
          <li class="menu__item" id="menu_sale">
            <a href=${
              src
                ? "./search.html?purpose=for-sale"
                : "./src/search.html?purpose=for-sale"
            }>Buy Estate</a>
          </li>
        </ul>
        <div class="flex space-x-2">
          <button class="menu__btn">Login</button>
          <button class="menu__btn">Signup</button>
        </div>
      </menu>
  `;
};

export default navbar;

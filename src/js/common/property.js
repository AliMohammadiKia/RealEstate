const defaultImage = "../../img/house.jpg";

const property = ({
  coverPhoto,
  price,
  rentFrequency,
  rooms,
  title,
  baths,
  area,
  agency,
  isVerified,
  externalID,
}) => {
  return `
    <a href=${`property.html?id=${externalID}`} class="cursor-pointer">
      <div class="w-full h-60 mb-2">
        <img src="${
          coverPhoto ? coverPhoto.url : defaultImage
        }" alt="" class="bg-cover w-full h-full" />
      </div>
      <div class="px-2 text-slate-600">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            ${
              isVerified &&
              "<i class='fa-solid fa-circle-check text-green-400 text-lg mr-2'></i>"
            }
            <p>
              AED ${price}${rentFrequency !== null ? `/${rentFrequency}` : ""}
            </p>
          </div>
          ${
            agency.logo &&
            `<div class="w-8 h-4 rounded-md overflow-hidden">
              <img src="${agency.logo.url}" alt="" class="w-full h-full" />
          </div>`
          }
        </div>
        <div class="my-2">
          <p class="text-indigo-400">
            ${rooms} <i class="fa-solid fa-bed"></i> | ${baths} <i class="fa-solid fa-bath"></i> | ${area.toFixed(
    1
  )} sqft <i class="fa-solid fa-layer-group"></i>
          </p>
        </div>
        <div>
          <p>${title.length > 30 ? title.substring(0, 30) + "..." : title}</p>
        </div>
      </div>
    </a>
  `;
};

export default property;

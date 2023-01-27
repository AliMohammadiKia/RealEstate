import imageSlider from "./imageSlider.js";

const propertyDetail = ({
  price,
  rentFrequency,
  rooms,
  title,
  baths,
  area,
  agency,
  isVerified,
  description,
  type,
  purpose,
  furnishingStatus,
  amenities,
  photos,
}) => {
  // imageSlider(photos);
  console.log(amenities);
  return `
    <div class="px-60">
      <div class="w-full h-[500px] mb-2 px-4">
        <img src="${
          photos ? photos[0].url : defaultImage
        }" alt="" class="bg-cover w-full h-full" />
      </div>
      <div class="flex justify-between items-center mt-4 px-4">
        <div class="flex items-center">
          ${
            isVerified &&
            "<i class='fa-solid fa-circle-check text-green-400 text-xl mr-2'></i>"
          }
          <p class="text-xl text-slate-600">
            AED ${price}${rentFrequency !== null ? `/${rentFrequency}` : ""}
          </p>
        </div>
        ${
          agency.logo &&
          `<div class="w-16 h-16 rounded-md overflow-hidden">
            <img src="${agency.logo.url}" alt="" class="w-full h-full" />
          </div>`
        }
        </div>
        <div class="my-2 px-4">
        <p class="text-indigo-400">
          ${rooms} <i class="fa-solid fa-bed"></i> | ${baths} <i class="fa-solid fa-bath"></i> | ${area.toFixed(
    1
  )} sqft <i class="fa-solid fa-layer-group"></i>
        </p>
      </div>
      <div>
        <p class="text-lg font-bold my-5">${title}</p>
        <p>${description}</p>
      </div>
      <div class="flex justify-between my-5">
        <p>Type: <span class="font-bold">${type}</span></p>
        <p>Purpose: <span class="font-bold">${purpose}</span></p>
        ${
          furnishingStatus &&
          `<p>Furnishing Status: <span class="font-bold">${furnishingStatus}</span></p>`
        }
      </div>
      <div class="mt-5">
        ${amenities.length && '<p class="font-bold text-2xl">Facilities</p>'}
        <div class="flex flex-wrap space-x-2 space-y-2 items-baseline mt-2">
          ${amenities.map((item) => {
            return item.amenities.map((amenity) => {
              return `<p class="text-blue-400 font-bold bg-blue-100 py-1 px-4 rounded-md">${amenity.text}</p>`;
            });
          })}
        </div>
      </div>
    </div>
  `;
};

export default propertyDetail;

export const loading = (container) => {
  const img = `
  <div class="col-span-4 flex justify-center" id="loading">
    <i class="fa-solid fa-spinner text-4xl text-indigo-400 animate-spin"></i>
  </div>
  `;
  container.innerHTML = img;
};

export const removeLoading = () => {
  const img = document.querySelector("#loading");
  img && img.remove();
};

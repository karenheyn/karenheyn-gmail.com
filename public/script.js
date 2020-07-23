const URL = "/.netlify/functions/token-hider?query=";
const input = document.querySelector(".input");
const form = document.querySelector(".search-form");
const background = document.querySelector(".background");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".title");
const searchHeader = document.querySelector(".search-header");
let results = [];

search = (searchTerm) => {
  return fetch(`/.netlify/functions/token-hider?search=${searchTerm}`)
    .then((response) => response.json())
    .then((result) => {
      toggleStyles();
      header.appendChild(form);
      result.results.forEach((image) => {
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";
        const imageDiv = document.createElement("div");
        imageDiv.className = "image-div";
        document.querySelector(".results-page").appendChild(galleryItem);
        galleryItem.appendChild(imageDiv);
        imageDiv.innerHTML =
          "<img class='image' src=" + image.urls.regular + ">";
        form.classList.remove("toggle-show");
        input.classList.add("header-expanded");
      });

      console.log(result.results);
      return results;
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".results-page").remove();
  searchHeader.remove();
});

toggleStyles = () => {
  const resultsContainer = document.createElement("div");
  resultsContainer.className = "results-page";
  document.body.appendChild(resultsContainer);
};

input.addEventListener("focus", (e) => {
  e.preventDefault();
  input.style = "font-family: 'Raleway', sans-serif";
  input.placeholder = "";
});

input.addEventListener("blur", (e) => {
  e.preventDefault();
  input.style = "font-family: FontAwesome";
  input.value = "";
  input.placeholder = "\uf002";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchTerm = input.value;
  search(searchTerm);
});

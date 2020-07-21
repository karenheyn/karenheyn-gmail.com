require("dotenv").config();
const URL = `https://api.unsplash.com/search/photos?page=1&per_page=50&client_id=${process.env.KEY}`;
const input = document.querySelector(".input");
const form = document.querySelector(".search-form");
const background = document.querySelector(".background");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".title");
let results = [];

search = (searchTerm) => {
  let url = `${URL}&query=${searchTerm}`;
  return fetch(url)
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
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          document.querySelector(".results-page").remove();
        });
      });

      console.log(result.results);
      return results;
    });
};

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

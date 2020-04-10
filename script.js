const key = "9WFravDWlCEXEUO64lPcQxTZ3ZvHE6om_bGiD4b8phc";
const secret = "Qk_ChPr6IyqESWW4du7AcMwSZOq78cWNO1O5nvThz5E";
const URL = `https://api.unsplash.com/search/photos?page=1&per_page=50&client_id=${key}`;
const input = document.querySelector(".input");
const form = document.querySelector(".search-form");
const background = document.querySelector(".background");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".title");
let results = [];

search = searchTerm => {
  let url = `${URL}&query=${searchTerm}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      toggleStyles();
      header.appendChild(form);
      // header.classList.add("header-with-images");
      result.results.forEach(image => {
        console.log("shit");
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";
        const imageDiv = document.createElement("div");
        imageDiv.className = "image-div";
        document.querySelector(".results-page").appendChild(galleryItem);
        galleryItem.appendChild(imageDiv);
        imageDiv.innerHTML =
          "<img class='image' src=" + image.urls.regular + ">";
        form.classList.remove("toggle-show");
        // document.querySelector(".results-page").prepend(form);
        // form.classList.add("in-header");
        input.classList.add("header-expanded");
        form.addEventListener("submit", e => {
          e.preventDefault();
          // galleryItem.remove();
          document.querySelector(".results-page").remove();
        });
        // galleryItem.addEventListener("click", e => {
        //   e.preventDefault();
        //   if (galleryItem.className != "w2") {
        //     galleryItem.classList.add("w2");
        //   }
        //   if (galleryItem.className.includes("w2")) {
        //     galleryItem.classList.toggle("w2");
        //   }
        // });
        // galleryItem.addEventListener("mouseleave", e => {
        //   e.preventDefault();
        //   galleryItem.classList.remove("w2");
        // });
      });

      console.log(result.results);
      return results;
    });
};

toggleStyles = () => {
  // const searchDiv = document.createElement("div");
  // searchDiv.className = "search-div";
  const resultsContainer = document.createElement("div");
  resultsContainer.className = "results-page";
  // document.body.appendChild(searchDiv);
  document.body.appendChild(resultsContainer);
  console.log(results);
};

input.addEventListener("focus", e => {
  e.preventDefault();
  input.style = "font-family: 'Raleway', sans-serif";
  input.placeholder = "";
});
input.addEventListener("blur", e => {
  e.preventDefault();
  input.style = "font-family: FontAwesome";
  input.value = "";
  input.placeholder = "\uf002";
});

form.addEventListener("submit", e => {
  e.preventDefault();
  let searchTerm = input.value;
  search(searchTerm);
});

const key = "9WFravDWlCEXEUO64lPcQxTZ3ZvHE6om_bGiD4b8phc";
const secret = "Qk_ChPr6IyqESWW4du7AcMwSZOq78cWNO1O5nvThz5E";
const URL = `https://api.unsplash.com/search/photos?page=1&per_page=30&client_id=${key}`;
const input = document.querySelector(".input");
const form = document.querySelector(".search-form");
const background = document.querySelector(".background");
const overlay = document.querySelector(".overlay");
let results = [];

search = searchTerm => {
  let url = `${URL}&query=${searchTerm}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      let resultArray = [];
      toggleStyles();
      result.results.forEach(image => {
        console.log("shit");
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";
        const imageDiv = document.createElement("div");
        imageDiv.className = "image-div";

        document.querySelector(".results-page").appendChild(galleryItem);
        galleryItem.appendChild(imageDiv);
        imageDiv.innerHTML = "<img class='image' src=" + image.urls.small + ">";
      });

      console.log(result.results);
      return results;
    });
};

toggleStyles = () => {
  const resultsContainer = document.createElement("div");
  // const poop = document.createElement("div");
  resultsContainer.className = "results-page";
  document.body.appendChild(resultsContainer);
  console.log(results);
};

showResults = () => {
  results.forEach(image => {
    const imageDiv = document.createElement("div");
    imageDiv.innerHTML = "hello";
    document.getElementByClassName("result-page").appendChild(imageDiv);
  });
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

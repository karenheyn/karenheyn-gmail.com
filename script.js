const key = "9WFravDWlCEXEUO64lPcQxTZ3ZvHE6om_bGiD4b8phc";
const secret = "Qk_ChPr6IyqESWW4du7AcMwSZOq78cWNO1O5nvThz5E";
const URL = `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=${key}`;
const input = document.querySelector(".input");
const form = document.querySelector(".search-form");
const background = document.querySelector(".background");
const overlay = document.querySelector(".overlay");

search = searchTerm => {
  let url = `${URL}&query=${searchTerm}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      toggleStyles();
      console.log(result.results);
    });
};

toggleStyles = () => {
  const resultsPage = document.createElement("div");
  resultsPage.className = "results-page";
  document.body.appendChild(resultsPage);
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

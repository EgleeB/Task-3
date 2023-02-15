/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const btn = document.getElementById("btn");
const outputDiv = document.getElementById("output");

btn.addEventListener("click", getUsers);

function getUsers() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      outputDiv.innerHTML = "";
      data.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${user.avatar_url}" alt="${user.login}">
          <h2>${user.login}</h2>
        `;
        outputDiv.appendChild(card);
      });
    })
    .catch((error) => {
      outputDiv.innerHTML = `<p id="message">Error: ${error.message}</p>`;
    });
}

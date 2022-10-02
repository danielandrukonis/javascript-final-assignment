/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const body = document.querySelector('#output');
const state = {};



function renderAvatarCards(avatars) {
  const avatarContainer = document.getElementById("output");
  avatarContainer.innerHTML = "";

  avatars.forEach((avatar) => {
    const avatarLogin = document.createElement("p");
    avatarLogin.innerText = avatar.login;

    const avatarImage = document.createElement("img");
    avatarImage.src = avatar.avatar_url;
    avatarImage.setAttribute("alt", "avatar picture");
    avatarImage.setAttribute("width", '100px');

    const avatarCard = document.createElement("div");
    avatarCard.setAttribute("class", "property-card");
    avatarCard.append(
      avatarLogin,
      avatarImage
      

    );
    avatarContainer.append(avatarCard);
  });
}

  function fetchAvatars() {
    fetch(ENDPOINT)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        state["avatars"] = data;
        renderAvatarCards(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

document.querySelector('#btn').addEventListener('click', fetchAvatars);
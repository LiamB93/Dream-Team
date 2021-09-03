// // const axios = require("https://cdn.skypack.dev/axios")
// function createTeamName() {
//   let teamName = document.getElementById("name").value;
//   document.getElementById("nameHere").innerHTML = teamName;
// }

// https://apifootball.com/
// https://apiv3.apifootball.com/?action=get_players
// const playerNameURL = https://apifootball.com/documentation/#Players
// const playerImageURL = https://apiv3.apifootball.com/badges/players
// const url = `https://apiv3.apifootball.com/?action=get_players&player_name=${search}&APIkey=${apiKey}`
// console.log(playerButton);
let input = document.querySelector("#playerSearch");
const apiKey = "77f0b4e41d2e7b03990d8129f6f928f084169ab4a48dc928a97d54a3559ab358";
const playerButton = document.querySelector("#searchbutton")
let playerDiv = document.querySelector(".player");

playerButton.addEventListener("click", pickPlayer)



async function pickPlayer() {
  let search = input.value;
  playerDiv.innerHTML = "";
  const url = `https://apiv3.apifootball.com/?action=get_players&player_name=${search}&APIkey=${apiKey}`
  try {
    const res = await axios.get(url);
    console.log(res.data);
    let h2 = document.createElement("h2");
    h2.innerText = res.data[0].player_name;
    let img = document.createElement("img");
    img.src = res.data[0].player_image;
    let h3 = document.createElement("h3");
    h3.innerText = res.data[0].player_type;
    let h4 = document.createElement("h4");
    h4.innerText = res.data[0].player_age;
    playerDiv.append(h2);
    playerDiv.append(h3);
    playerDiv.append(h4);
    playerDiv.append(img);
  } catch (error) {
    console.log(error);
  }
};
// removePlayerInfo();
// function removePlayerInfo() {
//   h4.innerText = "";
//   h5.innerText = "";
//   img.innerText = "";
// }


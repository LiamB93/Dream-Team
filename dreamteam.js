function createTeamName() {
  let teamName = document.getElementById("name").value;
  document.getElementById("nameHere").innerHTML = teamName;
}

// https://apifootball.com/
// https://apiv3.apifootball.com/?action=get_players

// const playerNameURL = https://apifootball.com/documentation/#Players
// const playerImageURL = https://apiv3.apifootball.com/badges/players

const url = `https://apiv3.apifootball.com/?action=get_players&player_name=${search}&APIkey=${apiKey}`
const apiKey = "77f0b4e41d2e7b03990d8129f6f928f084169ab4a48dc928a97d54a3559ab358";
let search = "";



async function pickForward() {
  try {
    let res = await axios.get(url);
    console.log(res.data);
    document.createElement("h6");
    let h6 = res.data.player_name;
    document.createElement("img");
    let img = res.data.player_image;
  } catch (error) {
    console.log(error);
  }
};

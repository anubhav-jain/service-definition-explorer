import "./styles.css";

var json = require("./metadata.json");
document.getElementById("serviceDef").value = JSON.stringify(json);

document.getElementById("copy").addEventListener("click", function () {
  var copyText = document.getElementById("serviceDef");
  copyText.select();
  document.execCommand("copy");
  alert("Copied to clipboard");
});

var teamModalLocator = document.getElementById("addTeamModal");

document.getElementById("createTeam").addEventListener("click", function () {
  if (typeof teamModalLocator.showModal === "function") {
    teamModalLocator.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

teamModalLocator.addEventListener("close", function () {
  console.log(document.getElementById("teamName").value);
  console.log(document.getElementById("cloudName").value);
  console.log(document.getElementById("type").value);
  var teamBlock = {
    "name": document.getElementById("teamName").value,
    "cloud": document.getElementById("cloudName").value,
    "type": document.getElementById("type").value
  };
  json.team.push(teamBlock);
  //console.log(JSON.stringify(json.team));
  document.getElementById("serviceDef").value = JSON.stringify(json);
});
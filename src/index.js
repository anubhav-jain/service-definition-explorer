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
  var tn = document.getElementById("teamName").value;
  var cn = document.getElementById("cloudName").value;
  var type = document.getElementById("type").value;
  var teamBlock = {
    "name": tn,
    "cloud": cn,
    "type": type
  };
  json.team.push(teamBlock);
  document.getElementById("serviceDef").value = JSON.stringify(json);
});

var addScheduleModalLocator = document.getElementById("addScheduleModal");

document.getElementById("addSchedule").addEventListener("click", function () {
  if (typeof addScheduleModalLocator.showModal === "function") {
    
    var teamDropdown = document.getElementById("teamNameDropdown");

    for (var key1 in json.team) {
      var currOption1 = document.createElement("option");
      currOption1.setAttribute('value', json.team[key1].name);
      currOption1.setAttribute('text', json.team[key1].name);
      currOption1.innerHTML = json.team[key1].name;
      teamDropdown.appendChild(currOption1);
    }

    var scriptDropdown = document.getElementById("scriptNameDropdown");

    for (var key2 in json.scripts) {
      var currOption2 = document.createElement("option");
      currOption2.setAttribute('value', json.scripts[key2].name);
      currOption2.setAttribute('text', json.scripts[key2].name);
      currOption2.innerHTML = json.scripts[key2].name;
      scriptDropdown.appendChild(currOption2);
    }
    
    addScheduleModalLocator.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

addScheduleModalLocator.addEventListener("close", function () {
  

  
  var tn = document.getElementById("teamName").value;
  var cn = document.getElementById("cloudName").value;
  var type = document.getElementById("type").value;
  var teamBlock = {
    "name": tn,
    "cloud": cn,
    "type": type
  };
  json.team.push(teamBlock);
  document.getElementById("serviceDef").value = JSON.stringify(json);
});
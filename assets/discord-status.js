// some variables
const IconPath = "assets/img/";
const format = ".png";
const refreshInterval = 1000;

// lanyard.rest API
const jsonLink = "https://api.lanyard.rest/v1/users/1266342027239620628";

// fetch the JSON data from the link
function updateDiscordStatus() {
fetch(jsonLink)
 .then(response => response.json())
 .then(data => {
    // assume the JSON data has a property called "status" that we want to check
    const status = data.data.discord_status;
    const IconPath1 = IconPath + status + format;
    const IconPathNull = IconPath + "offline" + format;
    // check if the status equals a certain string
    if (status === "online") {
      // change the image in the HTML element
      const imageElement = document.getElementById("statusicon");
      imageElement.src = IconPath1;
    } else if (status === "dnd") {
      // change the image in the HTML element
      const imageElement = document.getElementById("statusicon");
      imageElement.src = IconPath1;
    } else if (status === "idle") {
        // change the image in the HTML element
        const imageElement = document.getElementById("statusicon");
        imageElement.src = IconPath1;
    } else {
        const imageElement = document.getElementById("statusicon");
        imageElement.src = IconPathNull;
    }
  })
.catch(error => console.error("Error fetching JSON data:", error));
}

updateDiscordStatus();
setInterval(updateDiscordStatus, refreshInterval);

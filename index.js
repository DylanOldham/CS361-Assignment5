let backdrop = document.querySelector("#backdrop");
let settingsButton = document.querySelector("#settings-button");
let settingsModalCloseButton = document.querySelector("#close-settings-button");
let settingsModal = document.querySelector(".settings-modal");
let settingsVolumeSlider = document.querySelector("#volume-slider");
let settingsVolumeText = document.querySelector("#volume-value");

let inputModal = document.querySelector("#input-modal");
let usernameInput = document.querySelector("#username-input");
let usernameSubmit = document.querySelector("#username-submit-button");

let startButton = document.querySelector("#start-game-button");

settingsButton.addEventListener("click", () => {
    backdrop.style = "visibility: visible;";
    settingsModal.style = "visibility: visible;";
});

settingsVolumeSlider.addEventListener("input", () => {
    settingsVolumeText.textContent = "Volume: " + settingsVolumeSlider.value + "%";
});

settingsVolumeSlider.addEventListener("change", () => {
    settingsVolumeText.textContent = "Volume: " + settingsVolumeSlider.value + "%";
});

settingsModalCloseButton.addEventListener("click", () => {
    backdrop.style = "visibility: hidden;";
    settingsModal.style = "visibility: hidden;";
});

let username = document.cookie.substring(9);
console.log(username);
if (username.length !== 0) {
    backdrop.style = "visibility: visible;";
    inputModal.style = "visibility: visible;";

    usernameSubmit.addEventListener("click", (event) => {
        username = usernameInput.value;
        document.cookie = "username=" + username + ";";
        console.log(document.cookie);
        backdrop.style = "visibility: hidden;";
        inputModal.style = "visibility: hidden;";
    });
}

startButton.addEventListener("click", (event) => {
    window.location.href = "./game.html";
});
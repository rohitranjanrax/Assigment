// Function to change the button color when clicked
function changeColor(event) {
    event.target.style.backgroundColor = "lightblue";
}

// Function to show the message near the button on mouseover
function showMessage(event) {
    const buttonId = event.target.id;
    const messageId = `message${buttonId.replace('button', '')}`;
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = "block";
}

// Function to hide the message on mouseout
function hideMessage(event) {
    const buttonId = event.target.id;
    const messageId = `message${buttonId.replace('button', '')}`;
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = "none";
}

// Function to hide the button on double click
function hideButton(event) {
    event.target.style.display = "none";
}

// Adding event listeners to all buttons
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", changeColor);
    button.addEventListener("mouseover", showMessage);
    button.addEventListener("mouseout", hideMessage);
    button.addEventListener("dblclick", hideButton);
});

const messages = [
    "Are you sure Devu?",
    "Really sure Devuhh??",
    "Yes Para Devuhhhh",
    "Devikaaa pleaseee...",
    "Onnude aloykkkuuu!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, yes paraa devuhhhhh! ❤️"
];

let messageIndex = 0;

function OnnoClick() {
    const noButton = document.querySelector('.nobutton');
    const yesButton = document.querySelector('.yesbutton');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function OnyesClick() {
    window.location.href = "yes.html";
}
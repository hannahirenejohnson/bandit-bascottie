const banditActions = [
    { text: "Bandit is enjoying his many toys 🧸", img: "image/bandit-chooses-toys.jpg" },
    { text: "Bandit celebrating his birthday 🎂", img: "image/bandit-birthday.jpg" },
    { text: "Bandit is ready to steal some treats 🍖", img: "image/bandit-pupcup.jpg" },
    { text: "Bandit ready to solve the mystery of the missing sniff 🔎", img: "image/detective-bandit.jpg" }
];

function showRandomBandit() {
    const randomIndex = Math.floor(Math.random() * banditActions.length);
    const action = banditActions[randomIndex];
    document.getElementById("bandit-action").textContent = action.text;
    document.getElementById("bandit-photo").src = action.img;
    document.getElementById("bandit-photo").style.display = "block";
}
// Randomizer actions
const banditActions = [
    { text: "Bandit is enjoying his many toys 🧸", img: "image/bandit-chooses-toys.jpg" },
    { text: "Bandit celebrating his birthday 🎂", img: "image/bandit-birthday.jpg" },
    { text: "Bandit is ready to steal some treats 🍖", img: "image/bandit-pupcup.jpg" },
    { text: "Bandit ready to solve the mystery of the missing sniff 🔎", img: "image/detective-bandit.jpg" }
];

// Shows random bandit photos
function showRandomBandit() {
    const randomIndex = Math.floor(Math.random() * banditActions.length);
    const action = banditActions[randomIndex];
    document.getElementById("bandit-action").textContent = action.text;
    document.getElementById("bandit-photo").src = action.img;
    document.getElementById("bandit-photo").style.display = "block";
}

// On click event - bandit photo button
document.getElementById("bandit-button").addEventListener("click", showRandomBandit);

// scroll to top 

// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    let topButton = document.getElementById("top-button");

    // Show the button when scrolling down after 300px
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    // Scroll back to top smoothly when clicked
    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
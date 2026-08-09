function startSurprise() {
    window.location.href = "memories.html";
}
function openLetter() {

    const letter = document.getElementById("letterContent");
    const envelope = document.querySelector(".envelope");

    letter.style.display = "block";

    envelope.style.display = "none";

    window.scrollTo({
        top: letter.offsetTop - 30,
        behavior: "smooth"
    });
}
function answer(message) {

    const result = document.getElementById("funnyAnswer");

    result.innerHTML = message;

    result.style.transform = "scale(1.05)";

    setTimeout(function() {
        result.style.transform = "scale(1)";
    }, 200);

}
function openGift() {

    const gift = document.querySelector(".gift");
    const hint = document.querySelector(".gift-hint");
    const surprise = document.getElementById("finalSurprise");

    gift.style.display = "none";
    hint.style.display = "none";

    surprise.style.display = "block";

    createConfetti();

    window.scrollTo({
        top: surprise.offsetTop - 30,
        behavior: "smooth"
    });

}


function createConfetti() {

    const container = document.getElementById("confetti-container");

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.transform =
            "rotate(" + Math.random() * 360 + "deg)";

        container.appendChild(confetti);

    }

}
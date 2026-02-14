document.addEventListener("DOMContentLoaded", function () {
  const cakeButton = document.getElementById("cakeButton");
  const cakeCard = document.getElementById("cakeCard");

  if (!cakeButton || !cakeCard) {
    return;
  }

  cakeButton.addEventListener("click", function () {
    const isHidden = cakeCard.classList.contains("hidden");

    if (isHidden) {
      cakeCard.classList.remove("hidden");
      cakeButton.textContent = "💌";
      cakeButton.setAttribute("aria-label", "Close the cake");
    } else {
      cakeCard.classList.add("hidden");
      cakeButton.textContent = "❤️";
      cakeButton.setAttribute("aria-label", "Open the cake");
    }
  });
});

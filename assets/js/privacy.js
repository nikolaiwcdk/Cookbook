document.addEventListener("DOMContentLoaded", () => {
  const privacyModal = document.getElementById("privacyModal");
  const acceptBtn = document.getElementById("acceptPrivacy");

  // Tjek om brugeren allerede har accepteret
  if (localStorage.getItem("privacyAccepted") === "true") {
    privacyModal.classList.add("hidden");
    privacyModal.setAttribute("aria-hidden", "true");
  } else {
    privacyModal.classList.remove("hidden");
    privacyModal.setAttribute("aria-hidden", "false");
  }

  // Når brugeren accepterer
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("privacyAccepted", "true");
    privacyModal.classList.add("hidden");
    privacyModal.setAttribute("aria-hidden", "true");
  });
});

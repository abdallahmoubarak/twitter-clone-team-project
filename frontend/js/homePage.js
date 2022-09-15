window.addEventListener("DOMContentLoaded", () => {
  const profileBtn = document.getElementById("profile-btn");

  profileBtn.addEventListener("click", () => {
    window.location.href = "/frontend/profile.html";
  });

  //   log out

  const popBackground = document.getElementById("pop-background");
  const userPop = document.getElementById("user-pop-up");
  const userBtn = document.getElementById("user-btn");

  popBackground.addEventListener("click", () => {
    userPop.classList.add("display-none");
  });
  userBtn.addEventListener("click", () => {
    userPop.classList.remove("display-none");
  });

  const logOut = document.getElementById("log-out");

  logOut.addEventListener("click", () => {
    window.location.replace("/frontend/index.html");
  });
});

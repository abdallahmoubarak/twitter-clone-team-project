window.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-btn");

  homeBtn.addEventListener("click", () => {
    window.location.href = "/frontend/home.html";
  });

  // following

  const following = document.getElementById("following");
  const followers = document.getElementById("followers");
  const blocks = document.getElementById("blocks");

  followers.addEventListener("click", () => {
    window.location.href = "/frontend/follow.html?p=followers";
  });
  following.addEventListener("click", () => {
    window.location.href = "/frontend/follow.html?p=following";
  });

  blocks.addEventListener("click", () => {
    window.location.href = "/frontend/follow.html?p=blocks";
  });
});

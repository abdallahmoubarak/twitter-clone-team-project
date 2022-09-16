window.addEventListener("DOMContentLoaded", () => {
  const following = document.getElementById("following");
  const followers = document.getElementById("followers");
  const blocks = document.getElementById("blocks");

  // get value from url

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const p = urlParams.get("p");

  if (p == "following") {
    following.classList.add("active");
    followers.classList.remove("active");
    blocks.classList.remove("active");
  } else if (p == "followers") {
    following.classList.remove("active");
    followers.classList.add("active");
    blocks.classList.remove("active");
  } else if (p == "blocks") {
    following.classList.remove("active");
    followers.classList.remove("active");
    blocks.classList.add("active");
  }

  // tabs

  following.addEventListener("click", () => {
    following.classList.add("active");
    followers.classList.remove("active");
    blocks.classList.remove("active");
  });

  followers.addEventListener("click", () => {
    following.classList.remove("active");
    followers.classList.add("active");
    blocks.classList.remove("active");
  });

  blocks.addEventListener("click", () => {
    following.classList.remove("active");
    followers.classList.remove("active");
    blocks.classList.add("active");
  });
});

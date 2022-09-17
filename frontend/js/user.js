window.addEventListener("DOMContentLoaded", () => {
  const followBtn = document.getElementById("follow-btn");
  const blockBtn = document.getElementById("block-btn");

  //   switch

  followBtn.addEventListener("click", () => {
    if (followBtn.innerText == "Follow") followBtn.innerText = "Unfollow";
    else followBtn.innerText = "Follow";
  });
  blockBtn.addEventListener("click", () => {
    if (blockBtn.innerText == "Block") blockBtn.innerText = "Unblock";
    else blockBtn.innerText = "Block";
  });
});

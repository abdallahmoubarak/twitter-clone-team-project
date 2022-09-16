window.addEventListener("DOMContentLoaded", () => {
  //  profile btn
  const profileBtn = document.getElementById("profile-btn");

  profileBtn.addEventListener("click", () => {
    window.location.href = "/frontend/profile.html";
  });

  // home btn

  const homeBtn = document.getElementById("home-btn");

  homeBtn.addEventListener("click", () => {
    window.location.href = "/frontend/home.html";
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

  // close and open tweet pop up
  const tweetPopUpBtn = document.getElementById("tweet-pop-up-btn");
  const tweetPopUp = document.getElementById("tweet-pop-up");
  const closeTweet = document.getElementById("close-tweet");

  tweetPopUpBtn.addEventListener("click", () => {
    tweetPopUp.classList.remove("display-none");
  });
  closeTweet.addEventListener("click", () => {
    tweetPopUp.classList.add("display-none");
  });
});

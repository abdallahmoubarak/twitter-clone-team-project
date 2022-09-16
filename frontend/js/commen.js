const tweetBlock = (
  userImage,
  userName,
  tweetUserName,
  tweetTxt,
  tweetLikes
) => {
  return `<div class="tweet-container">
  <div class="tweet-img-side">
    <div class="tweet-user-img-container">
      <img
        width="100%"
        height="100%"
        src="${userImage}"
        alt=""
      />
    </div>
  </div>
  <div class="tweet-side">
    <div class="tweet-head">
      <div class="tweet-user-name-container">
        <div class="font-bold">${userName}</div>
        <div class="font-small">${tweetUserName}</div>
      </div>
      <div class="user-points font-bold">...</div>
    </div>
    <div class="tweet-body">
      <div class="tweet-txt">${tweetTxt}</div>
      <div class="tweet-img">
        <img width="100%" src="./assets/mainImg.png" alt="" />
      </div>
      <div class="like-button" id="like-btn">
        <div class="like-img">
          <i class="fa fa-heart"></i>
        </div>
        <div>${tweetLikes}</div>
      </div>
    </div>
  </div>
</div>`;
};

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

  // like btn
});

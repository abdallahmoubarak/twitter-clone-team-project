window.addEventListener("DOMContentLoaded", () => {
  // setting values in their fields
  const name = localStorage.getItem("full_name") || "";
  const email = localStorage.getItem("email") || "";
  const username = localStorage.getItem("username") || "";
  const profileUrl = localStorage.getItem("profile-url") || "./assets/user.svg";
  const crns = document.querySelectorAll(".crn");
  const uns = document.querySelectorAll(".un");
  const uis = document.querySelectorAll(".ui");

  crns.forEach((crn) => {
    crn.innerHTML = name;
  });
  uns.forEach((un) => {
    un.innerHTML = "@" + username;
  });
  uis.forEach((ui) => {
    ui.src = profileUrl;
  });

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

  // attach image to tweeet

  const tweetfileInput = document.getElementById("tweet-file-input");
  const tweetLabelImg = document.getElementById("tweet-label-img");
  const tweetPopImg = document.getElementById("tweet-pop-up-image");
  tweetfileInput.addEventListener("input", (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = function (event) {
        tweetLabelImg.src = event.target.result;
        tweetPopImg.style.width = "82%";
        tweetPopImg.style.height = "82%";
        tweetPopImg.style.borderRadius = "1rem";
        tweetPopImg.style.border = "1px solid  #1da1f2";
        var b = btoa(event.target.result);
      };
    } else {
      tweetLabelImg.src = "./assets/img-icon.svg";
    }
  });

  // like btn
});

const tweetCompoinant = (
  userImage,
  userName,
  tweetUserName,
  tweetTxt,
  tweetLikes,
  tweetImg,
  tweetDate
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
        .<div>${tweetDate}</div>
      </div>
      <input
        class="user-points font-bold options lightgray-background"
        placeholder="..."
      /> 
      <div class="pop-options">
        <div class="lightgray-background block">Block user</div>
        <div class="lightgray-background unfollow">Unfollow</div>
      </div>
    </div>
    <div class="tweet-body">
      <div class="tweet-txt">${tweetTxt}</div>
      <div class="tweet-img">
        <img width="100%" src="${tweetImg}" alt="" />
      </div>
      <div class="like-button" id="like-btn">
        <div class="like-img">
          <i class="fa fa-heart"></i>
        </div>
        <div>${tweetLikes}</div>
      </div>
    </div>
  </div>
</div>
`;
};
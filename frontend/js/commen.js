// const serverDir =
//   "http://localhost/github/twitter-clone-team-project/backend/api";
const serverDir =
  "http://localhost/github/peter-backend/twitter-clone-team-project/backend";

window.addEventListener("DOMContentLoaded", () => {
  // setting values in their fields
  const name = localStorage.getItem("full_name") || "";
  const email = localStorage.getItem("email") || "";
  const username = localStorage.getItem("username") || "";
  const profileUrl = localStorage.getItem("profile_picture_url");
  const headerUrl = localStorage.getItem("header_url");
  const userId = localStorage.getItem("user_id");
  const crns = document.querySelectorAll(".crn");
  const uns = document.querySelectorAll(".un");
  const uis = document.querySelectorAll(".ui");
  const himg = document.getElementById("head-label-img");

  crns.forEach((crn) => {
    crn.innerHTML = name;
  });
  uns.forEach((un) => {
    un.innerHTML = "@" + username;
  });
  uis.forEach((ui) => {
    if (!!profileUrl)
      return (ui.src = `${serverDir}/api/user_${userId}/profile.jpg`);
    ui.src = "./assets/user.svg";
  });

  if (!!headerUrl) {
    himg.src = `${serverDir}/api/user_${userId}/header.jpg`;
  }

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
  var basedImg = "";

  tweetPopUpBtn.addEventListener("click", () => {
    tweetPopUp.classList.remove("display-none");
  });
  closeTweet.addEventListener("click", () => {
    tweetPopUp.classList.add("display-none");
  });

  // attach image to tweeet

  const tweetfileInput = document.getElementById("tweet-file-input");
  const tweetPopImg = document.getElementById("tweet-pop-up-image");
  const tweetLabelImg = document.getElementById("tweet-label-img");

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
        basedImg = btoa(event.target.result);
      };
    } else {
      tweetLabelImg.src = "./assets/img-icon.svg";
      basedImg = "";
    }
  });
  // post the tweet btn
  const postTweetBtn = document.getElementById("post-tweet-btn");
  const tweetContent = document.getElementById("tweet-content");

  postTweetBtn.addEventListener("click", () => {
    // var image = basedImg.replace(/^data:image\/[a-z]+;base64,/, "");
    var image = atob(basedImg).split("base64,")[1];
    let formData = new FormData();
    formData.append("tweeter_id", userId);
    formData.append("content", tweetContent.value);
    formData.append("image", image);
    fetch(`${serverDir}/api/tweet.php`, { method: "POST", body: formData })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          tweetPopImg.style.width = "1.4rem";
          tweetPopImg.style.height = "1.4rem";
          tweetPopImg.style.borderRadius = "0rem";
          tweetPopImg.style.border = "none";
          tweetLabelImg.src = "./assets/img-icon.svg";
          tweetContent.value = "";
          tweetPopUp.classList.add("display-none");
        }
      });
  });
});

//
const userComponant = () => {
  return `<div class="user-item-container">
  <div class="user-item">
    <div class="user-item-img-name">
      <div class="user-img-container">
        <img class="ui" width="100%" src="" alt="" />
      </div>
      <div>
        <div class="font-bold crn">User name</div>
        <div class="font-small un">@username</div>
      </div>
    </div>
    <div>
      <div class="user-card-btn-container">
        <button
          class="lightgray-background setup font-bold"
          id="follow-btn"
        >
          Follow</button
        ><button
          class="lightgray-background setup font-bold"
          id="block-btn"
        >
          Block
        </button>
      </div>
    </div>
  </div>
</div>`;
};

// tweet component
const tweetComponant = (
  userId,
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
        src="${serverDir}/api/user_${userId}/profile.jpg"
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
      ${tweetImg && `<img width="100%" src="${tweetImg}" alt="" />`}
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

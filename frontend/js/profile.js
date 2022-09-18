// const serverDir =
//   "http://localhost/github/twitter-clone-team-project/backend/api";
// const serverDir =
//   "http://localhost/github/peter-backend/twitter-clone-team-project/backend";

window.addEventListener("DOMContentLoaded", () => {
  const userId = localStorage.getItem("user_id");

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

  // tabs
  const likes = document.getElementById("likes");
  const tweets = document.getElementById("tweets");
  const tabBarTweets = document.getElementById("tab-bar-tweets");
  const tabBarLikes = document.getElementById("tab-bar-likes");

  likes.addEventListener("click", () => {
    likes.classList.add("active");
    tweets.classList.remove("active");
    tabBarTweets.classList.add("display-none");
    tabBarLikes.classList.remove("display-none");
  });

  tweets.addEventListener("click", () => {
    tweets.classList.add("active");
    likes.classList.remove("active");
    tabBarLikes.classList.add("display-none");
    tabBarTweets.classList.remove("display-none");

    fetch(`${serverDir}/api/own_tweets.php?profile_id=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
  var basedImg = "";
  // input change
  const fileInput = document.getElementById("file-input");
  const labelImg = document.getElementById("label-img");

  fileInput.addEventListener("input", (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = function (event) {
        labelImg.src = event.target.result;
        basedImg = btoa(event.target.result);
      };
    }
  });

  // close and open user image
  const closeUserImagePop = document.getElementById("close-user-image-pop");
  const userPopContainer = document.getElementById("user-pop-up-container");
  const imagePopBtn1 = document.getElementById("image-pop-btn-1");
  const imagePopBtn2 = document.getElementById("image-pop-btn-2");

  closeUserImagePop.addEventListener("click", () => {
    userPopContainer.classList.add("display-none");
  });

  imagePopBtn1.addEventListener("click", () => {
    userPopContainer.classList.remove("display-none");
    labelImg.src = "./assets/user.svg";
  });
  imagePopBtn2.addEventListener("click", () => {
    userPopContainer.classList.remove("display-none");
    labelImg.src = "./assets/user.svg";
  });

  //  send image to the server
  const setImageBtn = document.getElementById("set-image-btn");
  const uis = document.querySelectorAll(".ui");

  setImageBtn.addEventListener("click", () => {
    var image = atob(basedImg).split("base64,")[1];
    let formData = new FormData();
    formData.append("profile_id", userId);
    formData.append("image", image);

    fetch(`${serverDir}/api/add_profile_pic.php`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem(
            "profile-url",
            `${serverDir}/user_${userId}.png`
          );
          uis.forEach((ui) => {
            ui.src = `${serverDir}/api/user_${userId}/profile.jpg`;
          });
        }
      });
  });
  const headImgInput = document.getElementById("head-img-input");
  const headLabelImg = document.getElementById("head-label-img");

  headImgInput.addEventListener("input", (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = function (event) {
        headLabelImg.src = event.target.result;
        basedImg = btoa(event.target.result);
        //
      };
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
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
  });

  // input change
  const fileInput = document.getElementById("file-input");
  const LabelImg = document.getElementById("label-img");

  fileInput.addEventListener("input", (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
      LabelImg.src = event.target.result;
      var b = btoa(event.target.result);
    };
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
    LabelImg.src = "./assets/user.svg";
  });
  imagePopBtn2.addEventListener("click", () => {
    userPopContainer.classList.remove("display-none");
    LabelImg.src = "./assets/user.svg";
  });
});

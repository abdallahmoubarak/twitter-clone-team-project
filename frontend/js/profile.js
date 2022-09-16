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
});

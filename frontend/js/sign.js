window.addEventListener("DOMContentLoaded", () => {
  //  openning and clossing the sign popup
  const signUpPopBtn = document.getElementById("sign-up-pop-btn");

  signUpPopBtn.addEventListener("click", () => {
    document.getElementById("signUp-popUp").style.display = "flex";

    const closeBtn = document.getElementById("close-signUp");

    closeBtn.addEventListener("click", () => {
      document.getElementById("signUp-popUp").style.display = "none";
    });
  });
});

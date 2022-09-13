window.addEventListener("DOMContentLoaded", () => {
  //  openning and clossing the sign popup
  const signUpPopBtn = document.getElementById("sign-up-pop-btn");
  const signUppopUp = document.getElementById("sign-up-pop-up");

  signUpPopBtn.addEventListener("click", () => {
    signUppopUp.style.display = "flex";

    const closeBtn = document.getElementById("close-sign-up");

    closeBtn.addEventListener("click", () => {
      signUppopUp.style.display = "none";
    });
  });

  //  openning and clossing the Sign in popup
  const SignInPopBtn = document.getElementById("sign-in-pop-btn");
  const SignInpopUp = document.getElementById("sign-in-pop-up");

  SignInPopBtn.addEventListener("click", () => {
    SignInpopUp.style.display = "flex";

    const closeBtn = document.getElementById("close-sign-in");

    closeBtn.addEventListener("click", () => {
      SignInpopUp.style.display = "none";
    });
  });

  // validating sign up
});

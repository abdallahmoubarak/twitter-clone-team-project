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
  const name = document.getElementById("name");
  const mail = document.getElementById("mail");
  const signUpMsg = document.getElementById("sign-up-msg");

  const validate = () => {
    name.addEventListener("blur", () => {
      if (name.value.length < 5) {
        name.classList.add("invalid-sign-input");
        signUpMsg.innerHTML = "Name is not valid";
      } else {
        name.classList.remove("invalid-sign-input");
        signUpMsg.innerHTML = "";
      }
    });
    mail.addEventListener("blur", () => {
      if (
        mail.value.includes("@") &
        (mail.value.indexOf("@") > 2) &
        (mail.value.length - mail.value.indexOf("@") > 5)
      ) {
        mail.classList.remove("invalid-sign-input");
        signUpMsg.innerHTML = "";
      } else {
        mail.classList.add("invalid-sign-input");
        signUpMsg.innerHTML = "Email is not valid";
      }
    });
  };

  validate();
});

const serverDir =
  "http://localhost/github/twitter-clone-team-project/backend/api";

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
  const dob = document.getElementById("dob");
  const signUpMsg = document.getElementById("sign-up-msg");
  const nextBtn = document.getElementById("next-btn");

  const validateSignUp = (name, mail, dob) => {
    valid = true;
    if (
      name.value.length < 5 ||
      !(
        mail.value.includes("@") &
        (mail.value.indexOf("@") > 2) &
        (mail.value.length - mail.value.indexOf("@") > 5)
      ) ||
      dob.value == ""
    ) {
      valid = false;
    }
    return valid;
  };

  // name input blur

  name.addEventListener("blur", () => {
    if (name.value.length < 5) {
      name.classList.add("invalid-sign-input");
      signUpMsg.innerHTML = "Name is not valid";
    } else {
      name.classList.remove("invalid-sign-input");
      signUpMsg.innerHTML = "";
    }
  });

  // name input change

  name.addEventListener("input", () => {
    if (name.value.length < 5) {
      nextBtn.classList.add("gray-btn");
      nextBtn.classList.remove("blue-btn");
    } else {
      signUpMsg.innerHTML = "";
      if (validateSignUp(name, mail, dob)) {
        nextBtn.classList.remove("gray-btn");
        nextBtn.classList.add("blue-btn");
        nextBtn.classList.add("btn");
      }
    }
  });

  // mail input blur
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

  // mail input change
  mail.addEventListener("input", () => {
    if (
      mail.value.includes("@") &
      (mail.value.indexOf("@") > 2) &
      (mail.value.length - mail.value.indexOf("@") > 5)
    ) {
      signUpMsg.innerHTML = "";
      if (validateSignUp(name, mail, dob)) {
        nextBtn.classList.remove("gray-btn");
        nextBtn.classList.add("blue-btn");
        nextBtn.classList.add("btn");
      }
    } else {
      nextBtn.classList.add("gray-btn");
      nextBtn.classList.remove("blue-btn");
    }
  });

  // dob blur
  dob.addEventListener("blur", () => {
    if (dob.value == "") {
      dob.classList.add("invalid-sign-input");
    } else {
      dob.classList.remove("invalid-sign-input");
    }
  });

  // dob change

  dob.addEventListener("change", () => {
    if (dob.value == "") {
      nextBtn.classList.add("gray-btn");
      nextBtn.classList.remove("blue-btn");
    } else {
      if (validateSignUp(name, mail, dob)) {
        nextBtn.classList.remove("gray-btn");
        nextBtn.classList.add("blue-btn");
        nextBtn.classList.add("btn");
      }
    }
  });

  // active nextBtn
  const infoContainer = document.getElementById("sign-info-container");
  const codeContainer = document.getElementById("sign-code-container");
  const signUpmail = document.getElementById("mail");

  nextBtn.addEventListener("click", () => {
    if (validateSignUp(name, mail, dob)) {
      fetch(`${serverDir}/is_mail_exist.php?email=${signUpmail.value}`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.success) {
            localStorage.setItem("name", name.value);
            localStorage.setItem("mail", mail.value);
            localStorage.setItem("dob", dob.value);
            infoContainer.classList.add("display-none");
            codeContainer.classList.remove("display-none");
          } else {
            signUpMsg.innerHTML = "This email is alredy exist";
          }
        });
    }
  });

  // back to sign
  const changeBtn = document.getElementById("change-btn");

  changeBtn.addEventListener("click", () => {
    codeContainer.classList.add("display-none");
    infoContainer.classList.remove("display-none");
  });

  // sign done

  const signupBtn = document.getElementById("sign-up-btn");

  signupBtn.addEventListener("click", () => {
    window.location.replace("/frontend/profile.html");
  });

  const signInBtn = document.getElementById("sign-in-btn");

  signInBtn.addEventListener("click", () => {
    window.location.replace("/frontend/home.html");
  });
});

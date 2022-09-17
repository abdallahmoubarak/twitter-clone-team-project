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
      let formData = new FormData();
      formData.append("email", signUpmail.value);
      fetch(`${serverDir}/is_mail_exist.php`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.exist) {
            localStorage.setItem("name", name.value);
            localStorage.setItem("email", mail.value);
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

  const signUpBtn = document.getElementById("sign-up-btn");
  const userName = document.getElementById("user-name");
  const password = document.getElementById("password");
  const signUpLastMsg = document.getElementById("sign-up-last-msg");

  //  validating username while input
  userName.addEventListener("blur", () => {
    if (userName.value.length > 5) {
      userName.classList.remove("invalid-sign-input");
      signUpLastMsg.innerHTML = "";
    } else {
      userName.classList.add("invalid-sign-input");
      signUpLastMsg.innerHTML = "The user name is not valid";
    }
  });
  userName.addEventListener("input", () => {
    if (userName.value.length > 5) {
      userName.classList.remove("invalid-sign-input");
      signUpLastMsg.innerHTML = "";
    }
  });

  //  validating username while input
  password.addEventListener("blur", () => {
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,100}$/;
    if (regularExpression.test(password.value)) {
      password.classList.remove("invalid-sign-input");
      signUpLastMsg.innerHTML = "";
    } else {
      password.classList.add("invalid-sign-input");
      signUpLastMsg.innerHTML =
        "Your password should be min 8 letter, with at least a symbol, upper and lower case letters and a number.";
    }
  });

  // signUp btn

  signUpBtn.addEventListener("click", () => {
    if (validateUserNameAndPass(userName.value, password.value)) {
      let formData = new FormData();
      formData.append("username", userName.value);
      fetch(`${serverDir}/is_username_exist.php`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.exist) {
            window.location.replace("/frontend/profile.html");
          } else {
            signUpLastMsg.innerHTML = "This username is alredy exist";
          }
        });
    }
  });

  // sign in process
  const signInBtn = document.getElementById("sign-in-btn");

  signInBtn.addEventListener("click", () => {
    window.location.replace("/frontend/home.html");
  });
});

// validating username and password for sign up

const validateUserNameAndPass = (username, password) => {
  valid = false;
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,100}$/;

  if (username.length > 5 && regularExpression.test(password)) {
    valid = true;
  }
  return valid;
};

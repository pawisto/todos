import { auth } from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import renderHomePage from "../HomePage/renderHomePage.js";

export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const form = document.createElement("form");
  form.setAttribute("id", "register-form");

  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "email");
  inputEmail.setAttribute("id", "register-email-input");
  form.appendChild(inputEmail);

  const firstPasswordInput = document.createElement("input");
  firstPasswordInput.setAttribute("type", "password");
  firstPasswordInput.setAttribute("placeholder", "password");
  firstPasswordInput.setAttribute("id", "register-first-input-password");
  form.appendChild(firstPasswordInput);

  const secondPasswordInput = document.createElement("input");
  secondPasswordInput.setAttribute("type", "password");
  secondPasswordInput.setAttribute("placeholder", "password");
  secondPasswordInput.setAttribute("id", "register-second-input-password");
  form.appendChild(secondPasswordInput);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Register";
  form.appendChild(submitButton);

  contentContainer.appendChild(form);

  // Creating Password through submit button.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = inputEmail.value;
    const password1 = firstPasswordInput;
    const password2 = secondPasswordInput;
    console.log(email, password1, password2);
    if (password1 === password2) {
      console.log("Passwords are ok.");
      createUserWithEmailAndPassword(auth).then((userCredentials) => {
        console.log(userCredentials.user.metadata.lastSignInTime);
        renderHomePage();
      });
    } else {
      console.log("Passwords are wrong.");
    }
  });
}

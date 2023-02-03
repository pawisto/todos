import { app } from "./firebaseConfig.js";
import renderHomePage from "./components/HomePage/renderHomePage.js";
import renderRegisterForm from "./components/RegisterForm/renderRegisterForm.js";

// rendering HomePage on initial page load
renderHomePage();

// selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const aboutButton = document.getElementById("about-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

homeButton.addEventListener("click", renderHomePage());

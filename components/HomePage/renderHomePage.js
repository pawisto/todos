export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Welcome!";
  contentContainer.appendChild(h2);

  const p = document.createElement("p");
  p.textContent =
    "This is simple website written in vanilla JavaScript, used as a Firebase practice project.";
  contentContainer.appendChild(p);
}

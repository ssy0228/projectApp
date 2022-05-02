"use strict";

function login() {
  const form = document.querySelector("#form");
  const ID = document.querySelector("#form input[type='text']");
  const password = document.querySelector("#form input[type='password']");
  const USERNAME_KEY = "username";
  const USERPASSWORD_KEY = "userpassword";

  function onLoginSubmit(event) {
    event.preventDefault();
    const username = ID.value;
    const userpassword = password.value;
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(USERPASSWORD_KEY, userpassword);
    window.location.replace("main.html");
  }

  if (form !== null) {
    form.addEventListener("submit", onLoginSubmit);
  }
}

window.addEventListener("load", login);

function buttonclr() {
  const clrchng = document.querySelector("a.home");

  if (clrchng != null) {
    clrchng.addEventListener("click", () => {
      clrchng.classList.toggle("act");
      window.location.replace("main.html");
    });
  }
}
window.addEventListener("load", buttonclr);



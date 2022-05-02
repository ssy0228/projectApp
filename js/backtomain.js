function movePage() {
  const back2 = document.querySelector("#header_inner>a:first-child");

  if (back2 !== null) {
    back2.addEventListener("click", function (e) {
      e.preventDefault();
      window.history.back();
    });
  }

  const outBtn = document.querySelector("a.out");
  if (outBtn !== null) {
    outBtn.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.clear();
      window.location.replace("login.html");
    });
  }
}

window.addEventListener("load", movePage);


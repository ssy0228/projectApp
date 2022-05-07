function nextpage() {
  const main = document.querySelector("main");
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const btn = document.querySelector("section.page>button.next");
  const reset = document.querySelector("section.confirm>button[type='reset']");
  const submit = document.querySelector("section.confirm>button[type='submit']");


  btn.addEventListener("click", () => {
    main.style.transform = "translateX(-375px)";
    prev.style.opacity = 0;
    next.style.opacity = 1;
  });
  reset.addEventListener("click", () => {
    main.style.transform = "translateX(0)";
    window.history.back();
  });
  submit.addEventListener("click", () => {
    window.location.replace("login.html");
  });
}

window.addEventListener("load", nextpage);
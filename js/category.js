"use strict";

function category() {
  const navBtn = document.querySelector("button.category");
  const navi = document.querySelector("footer>nav");
  const categoryBtn = document.querySelectorAll("nav button[type='button']");
  const backdrop = document.querySelector("#backdrop");
  console.log(categoryBtn);
  let flag = true;
  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("is_open");
    navi.classList.toggle("gnb");
    backdrop.classList.toggle("is_active");
    for (let k = 0; k < categoryBtn.length; k++) {
      let papa = categoryBtn[k].parentElement;
      console.log(papa);
      categoryBtn[k].addEventListener("click", function () {
        for (let i = 0; i < categoryBtn.length; i++) {
          if (this != categoryBtn[i]) {
            if (flag != true) {
              papa.classList.remove("on_list");
              categoryBtn[i].parentElement.classList.remove("on_list");
            } else {
              categoryBtn[i].parentElement.classList.remove("on_list");
            }
          }
        }
        papa.classList.toggle("on_list");
      });
      papa.classList.remove("on_list");
    }
  });
}

window.addEventListener("load", category);


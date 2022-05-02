function filterOnOff() {
  const filterOn = document.querySelector("header>form>button[type='button']");
  const filter = document.querySelector("section.srch_filter");
  const filterOff = document.querySelector("section.srch_filter>button[type='button']");
  const backdrop = document.querySelector("#backdrop");
  filterOn.addEventListener("click", () => {
    filterOn.classList.add("is_on");
    filter.classList.add("is_on");
    backdrop.classList.add("is_active");
  });
  filterOff.addEventListener("click", () => {
    filterOn.classList.remove("is_on");
    filter.classList.remove("is_on");
    backdrop.classList.remove("is_active");
  });
}

window.addEventListener("load", filterOnOff);
function confirmSet() {
  const submitBtn = document.querySelector("section.wrap>button[type='submit']");
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.back();
  });
}

window.addEventListener("load", confirmSet);
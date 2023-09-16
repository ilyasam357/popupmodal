const btnShow = document.querySelector(".show_pupup");
const modal = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");

btnShow.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const bodySection = document.querySelectorAll('.main-content');

(function () {
  [...document.querySelectorAll(".control")].forEach(button => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    })
  });
  document.querySelector(".dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
})();

document.querySelector('.dark-mode').addEventListener('click', changeIcon);

function changeIcon(e) {
  const tgt = e.target.firstElementChild;
  tgt.classList.toggle('fa-sun');
  tgt.classList.toggle('fa-moon');
}

const slider = document.querySelector(".slides");
const buttonRight = document.querySelector(".arrow-right");
const buttonLeft = document.querySelector(".arrow-left");

let slidePosition = 0;

function setupSlider() {
  const illustrator = document.querySelector(".illustrator");
  const section2Container = document.getElementById("section2-container");
  const section3Container = document.getElementById("section3-container");

  buttonRight.removeEventListener("click", handleSliderRight);
  buttonLeft.removeEventListener("click", handleSliderLeft);

  if (window.innerWidth >= 600) {
    section2Container.appendChild(illustrator);
    buttonRight.addEventListener("click", handleSliderRight);
    buttonLeft.addEventListener("click", handleSliderLeft);
    slidePosition = 0;
    slider.style.transform = `translateX(${slidePosition}px)`;
  } else {
    section3Container.appendChild(illustrator);
    buttonRight.removeEventListener("click", handleSliderRight);
    buttonLeft.removeEventListener("click", handleSliderLeft);
    slidePosition = 0;
    slider.style.transform = `translateX(${slidePosition}px)`;
  }
}

function handleSliderRight() {
  if (slidePosition > -(slider.children.length - 2) * 270) {
    slidePosition -= 270;
    slider.style.transform = `translateX(${slidePosition}px)`;
    console.log(slider.style.transform);
  }
}

function handleSliderLeft() {
  if (slidePosition < 0) {
    slidePosition += 270;
    slider.style.transform = `translateX(${slidePosition}px)`;
  }
}

window.addEventListener("resize", function () {
  setupSlider();
});

setupSlider();

const hamburger = document.querySelector(`.hamburger`);
const nav = document.querySelector(`.nav`);
hamburger.addEventListener(`click`, () => {
  if (nav.style.display === `none`) {
    nav.style.display = `block`;
  } else {
    nav.style.display = `none`;
  }
});

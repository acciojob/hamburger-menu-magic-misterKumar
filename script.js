//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const ham = document.querySelector('.ham');
  const navLinks = document.querySelector('.nav-links');

  ham.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});
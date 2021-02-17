const toggleBtn = document.querySelector('.header__toggle-btn');

toggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('light-theme');
})
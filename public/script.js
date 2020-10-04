document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.carousel');
  M.Carousel.init(elems, {
    indicators: true,
    fullWidth: true,
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
});

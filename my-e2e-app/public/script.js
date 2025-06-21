document.getElementById('showFormBtn').addEventListener('click', () => {
  document.getElementById('contactForm').style.display = 'block';
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Formularz wysłany!');
});

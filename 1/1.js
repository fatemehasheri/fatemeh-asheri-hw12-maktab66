let form = document.querySelector('form');
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('modal').classList.remove('hidden');
  setTimeout(() => {
    form.submit();
  },8000)
})

const ACCESS_CODE = "wedwoje25";

function initAccessForm() {
  const form = document.querySelector('.access-card__form');
  const card = document.querySelector('.access-card');
  if (!form || !card) return;

  const input = form.querySelector('.access-card__input');
  const error = form.querySelector('.access-card__error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = (input?.value || '').trim();
    if (value === ACCESS_CODE) {
      const target = form.dataset.targetUrl;
      if (target) {
        window.location.href = target;
      }
    } else {
      if (error) {
        error.textContent = 'Niepoprawne hasło. Spróbuj ponownie.';
      }
      card.classList.remove('access-card--shake');
      void card.offsetWidth;
      card.classList.add('access-card--shake');
    }
  });
}

document.addEventListener('DOMContentLoaded', initAccessForm);

// Wspólny kod weryfikacji hasła dla wszystkich gier Momenty
const ACCESS_CODE = "wedwoje25";
if (typeof window !== "undefined") {
  window.ACCESS_CODE = ACCESS_CODE;
}

function initAccessForm() {
  const form = document.querySelector('.access-card__form');
  const card = document.querySelector('.access-card');
  if (!form || !card || !form.dataset.targetUrl) return;

  const input = form.querySelector('.access-card__input');
  const error = form.querySelector('.access-card__error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = (input?.value || '').trim();
    if (value === ACCESS_CODE) {
      const target = form.dataset.targetUrl;
      card.classList.add('access-card--success');
      setTimeout(() => {
        if (target) {
          window.location.href = target;
        }
      }, 220);
    } else {
      if (error) {
        error.textContent = 'Niepoprawne hasło. Sprawdź maila po zakupie lub spróbuj ponownie.';
      }
      card.classList.remove('access-card--shake');
      void card.offsetWidth;
      card.classList.add('access-card--shake');
    }
  });
}

document.addEventListener('DOMContentLoaded', initAccessForm);

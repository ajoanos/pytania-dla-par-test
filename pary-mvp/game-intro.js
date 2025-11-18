(function () {
  const root = document.querySelector('[data-game-id]');
  const overlay = document.querySelector('.game-intro-overlay');
  if (!root || !overlay) return;

  const gameId = root.dataset.gameId;
  const startButton = overlay.querySelector('[data-intro-start]');
  const storageKey = `momenty_intro_seen_${gameId}`;

  if (localStorage.getItem(storageKey) === '1') {
    overlay.remove();
    return;
  }

  startButton?.addEventListener('click', () => {
    localStorage.setItem(storageKey, '1');
    overlay.classList.add('game-intro-overlay--hide');
    setTimeout(() => overlay.remove(), 250);
  });
})();

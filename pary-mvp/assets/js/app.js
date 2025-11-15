const STORAGE_KEY_THEME = 'pary.theme';
const ACCESS_PASSWORD = 'wedwoje25';
const ACCESS_STORAGE_KEY = 'pary.access.pdp';
const PLAN_ACCESS_STORAGE_KEY = 'momenty.planWieczoru.access';
const LIVE_STATUS_URL = 'api/live-stats.json';

export async function postJson(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Błąd sieci ${response.status}`);
  }
  return response.json();
}

export async function getJson(url) {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Błąd sieci ${response.status}`);
  }
  return response.json();
}

async function requestNewRoomKey(options = {}) {
  const payload = await postJson('api/request_room.php', {
    deck: options.deck || undefined,
  });
  if (!payload || !payload.ok || !payload.room_key) {
    throw new Error(payload?.error || 'Nie udało się przygotować pokoju. Spróbuj ponownie.');
  }
  return payload.room_key;
}

export function initThemeToggle(button) {
  if (!button) return;

  const applyStoredTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY_THEME);
    if (stored) {
      document.body.dataset.theme = stored;
    } else if (!document.body.dataset.theme) {
      document.body.dataset.theme = 'light';
    }
  };

  const updateIcon = () => {
    if (document.body.dataset.theme === 'dark') {
      button.textContent = '☀️';
    } else {
      button.textContent = '🌙';
    }
  };

  applyStoredTheme();

  if (button.dataset.themeInit === 'true') {
    updateIcon();
    return;
  }

  button.dataset.themeInit = 'true';

  updateIcon();

  button.addEventListener('click', () => {
    const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = next;
    localStorage.setItem(STORAGE_KEY_THEME, next);
    updateIcon();
  });
}

function initScrollLinks() {
  const triggers = document.querySelectorAll('[data-scroll-target]');
  if (!triggers.length) return;
  triggers.forEach((trigger) => {
    const targetSelector = trigger.dataset.scrollTarget;
    if (!targetSelector) return;
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(targetSelector);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initLiveStatus(element) {
  if (!element || typeof fetch !== 'function') return;

  const updateValue = (value) => {
    element.textContent = value?.toString() || '—';
  };

  const load = async () => {
    try {
      const response = await fetch(LIVE_STATUS_URL, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }
      const payload = await response.json();
      const count = payload?.active_rooms ?? payload?.activeRooms;
      if (typeof count === 'number' && Number.isFinite(count)) {
        updateValue(count);
      }
    } catch (error) {
      console.warn('Nie udało się pobrać statusu pokojów', error);
    }
  };

  load();
  setInterval(load, 45000);
}

function focusElement(element) {
  if (!element) return;
  setTimeout(() => element.focus(), 50);
}

function initAccessGuide(context = {}) {
  const form = context.form || document.getElementById('password-form');
  const card = context.card || document.getElementById('password-card');
  const input = context.input || document.getElementById('access-password');
  if (!form || !card) {
    return;
  }

  const host = card.parentElement;
  if (!host) {
    return;
  }

  const passwordValue = form.dataset.password || ACCESS_PASSWORD;
  let guide = document.getElementById('access-guide');
  if (!guide) {
    const heroTitle = document.querySelector('.hero__text h1')?.textContent?.trim();
    const titleText = heroTitle ? `Dołącz do „${heroTitle}” w trzech krokach` : 'Dołącz do gry w trzech krokach';
    guide = document.createElement('section');
    guide.id = 'access-guide';
    guide.className = 'card card--guide';
    guide.innerHTML = `
      <p class="card__eyebrow">Nowa stylistyka Momenty</p>
      <h2>${titleText}</h2>
      <ol class="guide-steps" role="list">
        <li class="guide-steps__item" data-step="1">
          <div class="guide-steps__badge">1</div>
          <div class="guide-steps__body">
            <h3>Wpisz hasło wejścia</h3>
            <p>Jedno hasło działa we wszystkich kapsułach. Poniżej znajdziesz pole, które rozświetli się po kliknięciu.</p>
            <p class="guide-steps__password">${passwordValue}</p>
            <button type="button" class="btn btn--ghost btn--small" data-fill-password>Wklej hasło automatycznie</button>
          </div>
        </li>
        <li class="guide-steps__item" data-step="2">
          <div class="guide-steps__badge">2</div>
          <div class="guide-steps__body">
            <h3>Utwórz pokój</h3>
            <p>Po zatwierdzeniu hasła poprosimy Cię tylko o wpisanie swojego imienia i wciśnięcie „Wejdź do pokoju”.</p>
          </div>
        </li>
        <li class="guide-steps__item" data-step="3">
          <div class="guide-steps__badge">3</div>
          <div class="guide-steps__body">
            <h3>Zaproszenie partnera</h3>
            <p>Link do pokoju i kod QR pojawią się od razu. Możesz wysłać je SMS-em albo skopiować jednym kliknięciem.</p>
          </div>
        </li>
      </ol>
      <p class="password-hint" role="status">Hasło dla tej kapsuły: <strong>${passwordValue}</strong></p>
    `;
    host.insertBefore(guide, card);
  } else {
    const passwordElement = guide.querySelector('.guide-steps__password');
    if (passwordElement) {
      passwordElement.textContent = passwordValue;
    }
    const hint = guide.querySelector('.password-hint strong');
    if (hint) {
      hint.textContent = passwordValue;
    }
  }

  const applyFilledState = () => {
    if (!input || !card) return;
    if (input.value.trim()) {
      card.classList.add('card--password-filled');
    } else {
      card.classList.remove('card--password-filled');
    }
  };

  if (input) {
    input.addEventListener('input', applyFilledState);
    input.addEventListener('focus', () => card.classList.add('card--password-focused'));
    input.addEventListener('blur', () => card.classList.remove('card--password-focused'));
    applyFilledState();
  }

  const quickFillButtons = guide.querySelectorAll('[data-fill-password]');
  quickFillButtons.forEach((button) => {
    if (!(button instanceof HTMLButtonElement) || button.dataset.enhanced === 'true') {
      return;
    }
    button.dataset.enhanced = 'true';
    const defaultLabel = button.textContent;
    button.addEventListener('click', () => {
      if (!input) {
        return;
      }
      input.value = passwordValue;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.focus();
      const length = passwordValue.length;
      try {
        input.setSelectionRange(length, length);
      } catch (error) {
        console.warn('Selection range not supported', error);
      }
      button.dataset.state = 'done';
      button.textContent = 'Hasło wklejone ✨';
      setTimeout(() => {
        button.removeAttribute('data-state');
        button.textContent = defaultLabel;
      }, 2600);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle(document.getElementById('theme-toggle'));
  initScrollLinks();
  initLiveStatus(document.getElementById('live-count'));

  const productButtons = document.querySelectorAll('[data-action="open-product"]');
  productButtons.forEach((button) => {
    const target = button.dataset.target;
    if (!target) return;
    button.addEventListener('click', (event) => {
      if (button.tagName.toLowerCase() === 'a') {
        return;
      }
      event.preventDefault();
      window.location.href = target;
    });
  });

  const passwordForm = document.getElementById('password-form');
  const passwordInput = document.getElementById('access-password');
  const passwordError = document.getElementById('password-error');
  const passwordCancel = document.getElementById('password-cancel');
  const passwordCard = document.getElementById('password-card');

  initAccessGuide({ form: passwordForm, card: passwordCard, input: passwordInput });

  if (passwordForm) {
    const formPassword = passwordForm.dataset.password || ACCESS_PASSWORD;
    const storageKey = passwordForm.dataset.storageKey || ACCESS_STORAGE_KEY;
    const successTarget = passwordForm.dataset.success || 'pytania-dla-par-room.html';
    const skipRoomKey = passwordForm.dataset.skipRoomKey === 'true';
    const requestedDeck = (passwordForm.dataset.deck || '').trim().toLowerCase();
    const defaultErrorMessage = passwordError?.textContent || 'Niepoprawne hasło. Spróbuj ponownie.';

    if (passwordInput) {
      passwordInput.value = '';
      focusElement(passwordInput);
      passwordInput.addEventListener('input', () => {
        if (passwordError) {
          passwordError.textContent = defaultErrorMessage;
          passwordError.hidden = true;
        }
      });
    }

    passwordCancel?.addEventListener('click', () => {
      const backTarget = passwordCancel.dataset.back;
      if (backTarget) {
        window.location.href = backTarget;
      }
    });

    passwordForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const value = passwordInput?.value.trim() || '';
      if (!value) {
        if (passwordError) {
          passwordError.textContent = defaultErrorMessage;
          passwordError.hidden = false;
        }
        return;
      }
      if (value !== formPassword) {
        if (passwordError) {
          passwordError.textContent = defaultErrorMessage;
          passwordError.hidden = false;
        }
        return;
      }

      const submitButton = passwordForm.querySelector('button[type="submit"]');
      try {
        if (submitButton) {
          submitButton.disabled = true;
        }
        let roomKey = '';
        if (!skipRoomKey) {
          roomKey = await requestNewRoomKey({ deck: requestedDeck });
        }
        sessionStorage.setItem(storageKey, 'true');
        const targetUrl = new URL(successTarget, window.location.href);
        if (!skipRoomKey && roomKey) {
          targetUrl.searchParams.set('room_key', roomKey);
        }
        if (requestedDeck) {
          targetUrl.searchParams.set('deck', requestedDeck);
        }
        window.location.href = targetUrl.toString();
      } catch (error) {
        console.error(error);
        if (passwordError) {
          passwordError.textContent = error.message || 'Nie udało się przygotować pokoju. Spróbuj ponownie.';
          passwordError.hidden = false;
        } else {
          alert(error.message || 'Nie udało się przygotować pokoju. Spróbuj ponownie.');
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }

  const joinForm = document.getElementById('join-form');
  if (joinForm) {
    const requiredAccessKey = joinForm.dataset.storageKey || ACCESS_STORAGE_KEY;
    const accessRedirect = joinForm.dataset.accessRedirect || 'pytania-dla-par.html';
    const params = new URLSearchParams(window.location.search);

    if (params.has('auto')) {
      sessionStorage.setItem(requiredAccessKey, 'true');
    }

    if (sessionStorage.getItem(requiredAccessKey) !== 'true') {
      window.location.replace(accessRedirect);
      return;
    }

    const roomKeyField = joinForm.elements.namedItem('room_key');
    const displayNameField = joinForm.elements.namedItem('display_name');
    const successActive = joinForm.dataset.successActive || 'room.html';
    const successPending = joinForm.dataset.successPending || 'room-waiting.html';
    const autoApprove = joinForm.dataset.autoApprove === 'true';
    const requireRoomKey = joinForm.dataset.requireRoomKey === 'true';
    const submitMode = (joinForm.dataset.submitMode || (autoApprove ? 'invite' : 'host')).trim().toLowerCase();

    const focusCandidate = Array.from(joinForm.querySelectorAll('input, select, textarea')).find(
      (element) => element instanceof HTMLElement && element.type !== 'hidden' && !element.disabled,
    );
    focusElement(focusCandidate);

    const presetRoomKey = (params.get('room_key') || '').trim().toUpperCase();
    const presetName = (params.get('display_name') || '').trim();
    const shouldAutoSubmit = params.has('auto');
    let activeRoomKey = presetRoomKey;

    if (roomKeyField instanceof HTMLInputElement || roomKeyField instanceof HTMLTextAreaElement) {
      if (presetRoomKey) {
        roomKeyField.value = presetRoomKey;
      } else if (joinForm.dataset.roomKey) {
        roomKeyField.value = joinForm.dataset.roomKey.trim().toUpperCase();
      }
      if (roomKeyField.value) {
        roomKeyField.value = roomKeyField.value.trim().toUpperCase();
        activeRoomKey = roomKeyField.value;
      }
    } else if (!activeRoomKey && joinForm.dataset.roomKey) {
      activeRoomKey = joinForm.dataset.roomKey.trim().toUpperCase();
    }

    const roomNotice = joinForm.querySelector('[data-role="room-ready"]');
    if (roomNotice instanceof HTMLElement) {
      const roomDisplay = roomNotice.querySelector('[data-role="generated-room-key"]');
      if (activeRoomKey) {
        if (roomDisplay instanceof HTMLElement) {
          roomDisplay.textContent = activeRoomKey;
        }
        roomNotice.hidden = false;
      } else {
        roomNotice.hidden = true;
      }
    }

    if (requireRoomKey) {
      const currentKey = activeRoomKey || roomKeyField?.value?.trim().toUpperCase() || presetRoomKey;
      if (!currentKey) {
        window.location.replace(accessRedirect);
        return;
      }
    }
    if (displayNameField instanceof HTMLInputElement || displayNameField instanceof HTMLTextAreaElement) {
      if (presetName) {
        displayNameField.value = presetName;
      }
    }
    joinForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const submitButton = joinForm.querySelector('button[type="submit"]');
      const roomKey = (roomKeyField?.value || '').trim().toUpperCase();
      const displayName = (displayNameField?.value || '').trim();
      const mode = submitMode;
      if (!roomKey || !displayName) {
        alert('Uzupełnij wszystkie pola.');
        return;
      }
      try {
        if (submitButton) {
          submitButton.disabled = true;
        }
        const payload = await postJson('api/create_or_join.php', {
          room_key: roomKey,
          display_name: displayName,
          mode,
        });
        if (!payload.ok) {
          throw new Error(payload.error || 'Nie udało się dołączyć do pokoju.');
        }
        const nextParams = new URLSearchParams({
          room_key: payload.room_key,
          pid: payload.participant_id,
          name: displayName,
        });
        if (payload.deck) {
          nextParams.set('deck', payload.deck);
        }
        const target = payload.requires_approval ? successPending : successActive;
        const targetUrl = new URL(target, window.location.href);
        nextParams.forEach((value, key) => {
          targetUrl.searchParams.set(key, value);
        });
        window.location.href = targetUrl.toString();
      } catch (error) {
        console.error(error);
        alert(error.message);
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });

    if (
      shouldAutoSubmit &&
      roomKeyField &&
      displayNameField &&
      roomKeyField.value &&
      displayNameField.value
    ) {
      setTimeout(() => {
        if (typeof joinForm.requestSubmit === 'function') {
          joinForm.requestSubmit();
        } else {
          joinForm.dispatchEvent(new Event('submit', { cancelable: true }));
        }
      }, 150);

      if (window.history.replaceState) {
        const cleanUrl = new URL(window.location.href);
        ['room_key', 'display_name', 'mode', 'auto'].forEach((key) => cleanUrl.searchParams.delete(key));
        const nextSearch = cleanUrl.searchParams.toString();
        const nextUrl = `${cleanUrl.pathname}${nextSearch ? `?${nextSearch}` : ''}${cleanUrl.hash}`;
        window.history.replaceState({}, '', nextUrl);
      }
    }
  }

  const declineForm = document.getElementById('decline-proposal-form');
  if (declineForm) {
    const nameInput = declineForm.querySelector('input[name="display_name"]');
    const errorBox = declineForm.querySelector('[data-role="error"]');
    const successTarget = declineForm.dataset.success || 'plan-wieczoru-play.html';
    const storageKey = declineForm.dataset.storageKey || PLAN_ACCESS_STORAGE_KEY;

    focusElement(nameInput);

    declineForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!(nameInput instanceof HTMLInputElement)) {
        return;
      }
      const submitButton = declineForm.querySelector('button[type="submit"]');
      const displayName = nameInput.value.trim();
      if (!displayName) {
        if (errorBox) {
          errorBox.textContent = 'Podaj swoje imię, aby kontynuować.';
          errorBox.hidden = false;
        }
        nameInput.focus();
        return;
      }
      try {
        if (errorBox) {
          errorBox.hidden = true;
          errorBox.textContent = '';
        }
        if (submitButton) {
          submitButton.disabled = true;
        }
        const roomKey = await requestNewRoomKey();
        const joinPayload = await postJson('api/create_or_join.php', {
          room_key: roomKey,
          display_name: displayName,
          mode: 'host',
        });
        if (!joinPayload || !joinPayload.ok) {
          throw new Error(joinPayload?.error || 'Nie udało się dołączyć do pokoju. Spróbuj ponownie.');
        }
        sessionStorage.setItem(storageKey, 'true');
        const params = new URLSearchParams({
          room_key: joinPayload.room_key,
          pid: joinPayload.participant_id,
          name: displayName,
          auto: '1',
        });
        if (joinPayload.deck) {
          params.set('deck', joinPayload.deck);
        }
        window.location.href = `${successTarget}?${params.toString()}`;
      } catch (error) {
        console.error(error);
        if (errorBox) {
          errorBox.textContent = error.message || 'Nie udało się rozpocząć zabawy. Spróbuj ponownie.';
          errorBox.hidden = false;
        } else {
          alert(error.message || 'Nie udało się rozpocząć zabawy. Spróbuj ponownie.');
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch((err) => {
      console.warn('SW registration failed', err);
    });
  });
}

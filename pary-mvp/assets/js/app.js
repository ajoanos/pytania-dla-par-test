const STORAGE_KEY_THEME = 'pary.theme';
const ACCESS_PASSWORD = 'wedwoje25';
const ACCESS_STORAGE_KEY = 'pary.access.pdp';
const PLAN_ACCESS_STORAGE_KEY = 'momenty.planWieczoru.access';

const HOW_TO_PLAY = {
  index: {
    title: 'Jak korzystać z Momentów',
    steps: [
      'Wybierz grę z listy i włącz motyw, który pasuje do Waszego nastroju.',
      'Wpisz hasło, żeby odblokować pokój i wygenerować link do wspólnej zabawy.',
      'Udostępnij link partnerowi lub znajomym – wszyscy widzą to samo w czasie rzeczywistym.',
      'Korzystaj z jasnych kart instrukcji na każdej stronie, aby płynnie przechodzić do rozgrywki.',
    ],
    meta: {
      vibe: 'Premium + neon',
      duration: '5–60 min',
      players: '2–6 graczy',
    },
  },
  'pytania-dla-par': {
    title: 'Jak grać: Pytania dla par',
    steps: [
      'Podaj hasło i pozwól aplikacji wygenerować pokój z linkiem.',
      'Na zmianę losuj pytania i odpowiadaj bez podglądania partnera.',
      'Oznacz najciekawsze tematy gwiazdką, aby wrócić do nich później.',
      'Po zakończeniu zapisz wrażenia lub zrób zdjęcie ekranu, żeby zachować wspomnienia.',
    ],
    meta: {
      duration: '10–30 min',
      vibe: 'Szczere rozmowy',
      players: 'Dwie osoby',
    },
  },
  'nigdy-przenigdy': {
    title: 'Jak grać: Nigdy przenigdy',
    steps: [
      'Odblokuj pokój i dodaj uczestników – mogą grać zdalnie.',
      'Losuj stwierdzenia, a każdy głosuje kciukiem w górę lub w dół.',
      'Po głosowaniu system wyświetla podsumowanie – przegrany może wylosować zadanie.',
      'Zmień talie, aby przeskoczyć między tematami lekkimi i pikantnymi.',
    ],
    meta: {
      duration: '10–25 min',
      vibe: 'Szybkie wyznania',
      players: '2–8 graczy',
    },
  },
  '5-7-10': {
    title: 'Jak grać: 5 • 7 • 10 sekund',
    steps: [
      'Dodaj graczy i wybierz ulubione kategorie pytań.',
      'Kliknij start – timer od razu pokazuje 5, 7 lub 10 sekund na odpowiedź.',
      'Po każdej rundzie zaznacz, kto zdążył odpowiedzieć na czas.',
      'Na koniec zobacz ranking i wybierz następną kategorię bez wychodzenia z pokoju.',
    ],
    meta: {
      duration: '8–20 min',
      vibe: 'Błyskawiczne decyzje',
      players: '2–6 graczy',
    },
  },
  'prawda-wyzwanie': {
    title: 'Jak grać: Prawda czy wyzwanie',
    steps: [
      'Wybierz talie (delikatne, imprezowe lub pikantne) i odblokuj pokój.',
      'Losuj pytania lub wyzwania, a reszta ocenia wykonanie jak w 5•7•10.',
      'Skorzystaj z licznika, aby utrzymać tempo i uniknąć przestojów.',
      'Jeśli ktoś odmówi, kliknij „pomiń” – aplikacja sama przejdzie do kolejnej karty.',
    ],
    meta: {
      duration: '12–30 min',
      vibe: 'Adrenalina + śmiech',
      players: '2–8 graczy',
    },
  },
  'plan-wieczoru': {
    title: 'Jak grać: Plan Wieczoru',
    steps: [
      'Podaj hasło i odpowiedz na szybkie pytania o nastrój, energię i dostępny czas.',
      'Aplikacja generuje gotowy scenariusz – od przygotowania po finał.',
      'Kliknij „Wyślij” i podziel się planem z partnerem SMS-em lub mailem.',
      'Po spotkaniu wróć do planu i zaznacz, co zadziałało, aby kolejne wieczory były jeszcze lepsze.',
    ],
    meta: {
      duration: '15–90 min',
      vibe: 'Kameralnie',
      players: 'Dwie osoby',
    },
  },
  planszowa: {
    title: 'Jak grać: Planszówka dla dwojga (dla dorosłych)',
    steps: [
      'Odblokuj pokój i dołączcie oboje – aplikacja zsynchronizuje ruchy pionków.',
      'Rzuć wirtualną kostką i przesuwaj się po planszy, zbierając serduszka.',
      'Po wejściu na pole otwórz kartę zadania i wykonaj je razem lub solo.',
      'Po wygranej zapisz punkty, a jeśli macie czas, zacznijcie kolejną rundę z nową talią.',
    ],
    meta: {
      duration: '20–40 min',
      vibe: 'Rywalizacja + bliskość',
      players: '2 osoby',
    },
  },
  'planszowa-romantyczna': {
    title: 'Jak grać: Planszówka romantyczna',
    steps: [
      'Utwórz pokój, dodaj partnera i wybierz poziom czułości.',
      'Kolejne pola prowadzą przez pytania, rytuały i mikro-wyzwania w parze.',
      'Oznacz ulubione pola serduszkiem, żeby aplikacja proponowała podobne w przyszłości.',
      'Po przejściu całej planszy wyświetl podsumowanie i wybierz rytuał zakończenia.',
    ],
    meta: {
      duration: '25–45 min',
      vibe: 'Czułe tempo',
      players: 'Dwie osoby',
    },
  },
  'trio-challenge': {
    title: 'Jak grać: Kółko i krzyżyk Wyzwanie',
    steps: [
      'Stwórz pokój 4×4 i zaproś rywala – każdy wybiera swój znak.',
      'Tryb sekretny ukrywa część pól; odkryjecie je, gdy ktoś postawi tam swój znak.',
      'Ułóż linię z trzech symboli; przegrany losuje zadanie z talii.',
      'Jeżeli remis, kliknij „restart” – nowa plansza ma świeże ukryte pola.',
    ],
    meta: {
      duration: '8–18 min',
      vibe: 'Rywalizacja',
      players: '2 osoby',
    },
  },
  'niegrzeczne-kolo': {
    title: 'Jak grać: Niegrzeczne koło',
    steps: [
      'Wybierzcie, kto pierwszy kręci i kliknijcie, aby zakręcić kołem.',
      'Kiedy koło się zatrzyma, odczytaj wylosowaną pozycję lub scenariusz.',
      'Jeśli macie ochotę, kliknij „kręć jeszcze raz” i mieszajcie kategorie.',
      'Dodajcie własne zasady punktacji lub kary, by podbić emocje.',
    ],
    meta: {
      duration: '5–20 min',
      vibe: 'Luźno i pikantnie',
      players: '2–4 graczy',
    },
  },
  'zdrapka-pozycji': {
    title: 'Jak grać: Zdrapka pozycji',
    steps: [
      'Kliknij, aby odkryć kolor zdrapki – potrzyj ekran, żeby odsłonić pozycję.',
      'Po odkryciu użyj przycisku, by wylosować kolejną kartę bez cofania się.',
      'Jeśli pozycja Wam pasuje, przypnij ją do ulubionych i udostępnij link.',
      'Dla większej losowości włącz tryb ciemny – kolory zdrapek zmieniają klimat.',
    ],
    meta: {
      duration: '5–15 min',
      vibe: 'Element zaskoczenia',
      players: '2 osoby',
    },
  },
  'pozycje-na-czas': {
    title: 'Jak grać: Pozycje na czas',
    steps: [
      'Losuj pozycję, wybierz 60 lub 120 sekund i kliknij start.',
      'Timer kończy się pulsującą ramką – wtedy możecie zmienić lub powtórzyć pozę.',
      'Dodajcie własne reguły: punkty za kreatywność albo „rewanż” dla drugiej osoby.',
      'Jeśli coś nie pasuje, wylosujcie nową kartę bez zatrzymywania zegara.',
    ],
    meta: {
      duration: '10–25 min',
      vibe: 'Dynamiczna energia',
      players: '2 osoby',
    },
  },
  'poznaj-wszystkie-pozycje': {
    title: 'Jak grać: Poznaj wszystkie pozycje',
    steps: [
      'Przeglądaj katalog pozycji i czytaj wskazówki ruchu oraz bezpieczeństwa.',
      'Kliknij serduszko przy ulubionych, aby zbudować własną shortlistę.',
      'Udostępnij listę partnerowi – to Wasza wspólna mapa inspiracji.',
      'Wróć do katalogu i odkrywaj filtry tempa oraz poziomu intensywności.',
    ],
    meta: {
      duration: '15–40 min',
      vibe: 'Eksploracja',
      players: '2 osoby',
    },
  },
  'tinder-dla-sexu': {
    title: 'Jak grać: Tinder z pozycjami',
    steps: [
      'Utwórz wspólny pokój i ustal liczbę pozycji do przetestowania.',
      'Swipujcie w prawo, jeśli coś Was kręci, w lewo – jeżeli nie macie ochoty.',
      'Aplikacja wyłoni „match” tam, gdzie oboje daliście serduszko.',
      'Zapiszcie matchlistę i odpalcie timer z poziomu pokoju, by przejść do działania.',
    ],
    meta: {
      duration: '10–30 min',
      vibe: 'Szybkie decyzje',
      players: '2 osoby',
    },
  },
};

const HOW_TO_ALIASES = {
  'pytania-dla-par-room': 'pytania-dla-par',
  'pytania-dla-par-waiting': 'pytania-dla-par',
  'plan-wieczoru-room': 'plan-wieczoru',
  'plan-wieczoru-play': 'plan-wieczoru',
  'plan-wieczoru-accept': 'plan-wieczoru',
  'plan-wieczoru-accept.php': 'plan-wieczoru',
  'planszowa-room': 'planszowa',
  'planszowa-board': 'planszowa',
  'planszowa-invite': 'planszowa',
  'planszowa-waiting': 'planszowa',
  'planszowa-romantyczna-room': 'planszowa-romantyczna',
  'planszowa-romantyczna-board': 'planszowa-romantyczna',
  'planszowa-romantyczna-invite': 'planszowa-romantyczna',
  'planszowa-romantyczna-waiting': 'planszowa-romantyczna',
  'trio-challenge-room': 'trio-challenge',
  'trio-challenge-board': 'trio-challenge',
  'trio-challenge-invite': 'trio-challenge',
  'trio-challenge-waiting': 'trio-challenge',
  'niegrzeczne-kolo-play': 'niegrzeczne-kolo',
  'zdrapka-pozycji-play': 'zdrapka-pozycji',
  'pozycje-na-czas-play': 'pozycje-na-czas',
  'poznaj-wszystkie-pozycje-play': 'poznaj-wszystkie-pozycje',
  'tinder-dla-sexu-room': 'tinder-dla-sexu',
  'tinder-dla-sexu-waiting': 'tinder-dla-sexu',
  'tinder-dla-sexu-invite': 'tinder-dla-sexu',
  '5-7-10-room': '5-7-10',
};

function resolvePageKey() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const name = path.replace(/\.(html|php)$/i, '');
  const normalized = name.replace(/-(room|waiting|board|invite|play)$/i, '');
  return HOW_TO_ALIASES[name] || HOW_TO_ALIASES[normalized] || normalized || 'index';
}

function renderHowToCard() {
  const key = resolvePageKey();
  const data = HOW_TO_PLAY[key];
  const container = document.querySelector('.container');
  const hero = document.querySelector('.hero');
  if (!data || !container) return;

  const section = document.createElement('section');
  section.className = 'card card--howto';
  section.setAttribute('aria-label', 'Jak grać');

  const header = document.createElement('div');
  header.className = 'howto__header';

  const title = document.createElement('h2');
  title.className = 'howto__title';
  title.textContent = data.title;
  header.appendChild(title);

  if (data.meta) {
    const meta = document.createElement('div');
    meta.className = 'howto__meta';
    Object.entries(data.meta).forEach(([label, value]) => {
      const chip = document.createElement('span');
      chip.className = 'howto__chip';
      chip.textContent = `${label.toUpperCase()}: ${value}`;
      meta.appendChild(chip);
    });
    header.appendChild(meta);
  }

  section.appendChild(header);

  const list = document.createElement('ol');
  list.className = 'howto__list';
  data.steps.forEach((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    list.appendChild(li);
  });
  section.appendChild(list);

  const note = document.createElement('p');
  note.className = 'howto__note';
  note.textContent = 'Chcesz zacząć szybciej? Udostępnij link z pokoju i włącz tryb pełnoekranowy.';
  section.appendChild(note);

  if (hero && hero.parentNode) {
    hero.insertAdjacentElement('afterend', section);
  } else {
    container.prepend(section);
  }
}

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

function focusElement(element) {
  if (!element) return;
  setTimeout(() => element.focus(), 50);
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle(document.getElementById('theme-toggle'));
  renderHowToCard();

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

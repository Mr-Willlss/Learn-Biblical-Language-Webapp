
    (function () {
      const greekCard = document.getElementById('greekCard');
      const hebrewCard = document.getElementById('hebrewCard');
      const continueBtn = document.getElementById('continueBtn');
      const switchBtn = document.getElementById('switchBtn');
      const statUser = document.getElementById('statUser');
      const authLoader = document.getElementById('auth-loader');
      const appContent = document.getElementById('app-content');
      let authReadySeen = false;

      const fallbackTimer = setTimeout(() => {
        if (!authReadySeen) {
          if (authLoader) authLoader.style.display = 'none';
          if (appContent) appContent.style.display = 'grid';
        }
      }, 1500);

      function selectLanguage(lang) {
        const isGreek = lang === 'greek';
        greekCard.classList.toggle('selected', isGreek);
        hebrewCard.classList.toggle('selected', !isGreek);
        continueBtn.textContent = isGreek ? 'Continue to Greek' : 'Continue to Hebrew';
        switchBtn.textContent = isGreek ? 'Save Greek as active language' : 'Save Hebrew as active language';
        try { localStorage.setItem('activeLanguage', lang); } catch (_) {}
      }

      greekCard.addEventListener('click', () => selectLanguage('greek'));
      hebrewCard.addEventListener('click', () => selectLanguage('hebrew'));
      continueBtn.addEventListener('click', () => {
        const active = localStorage.getItem('activeLanguage') || 'greek';
        window.location.href = active === 'hebrew' ? 'dashboard-hebrew.html' : 'dashboard.html';
      });
      switchBtn.addEventListener('click', () => {
        const active = localStorage.getItem('activeLanguage') || 'greek';
        window.location.href = active === 'hebrew' ? 'dashboard-hebrew.html' : 'dashboard.html';
      });

      document.addEventListener('authReady', function (ev) {
        authReadySeen = true;
        clearTimeout(fallbackTimer);
        const user = ev && ev.detail ? ev.detail : null;
        if (authLoader) authLoader.style.display = 'none';
        if (appContent) appContent.style.display = 'grid';
        if (user) {
          const name = user.displayName || (user.email ? user.email.split('@')[0] : 'friend');
          statUser.textContent = name;
        } else {
          statUser.textContent = 'Guest';
        }
      }, { once: true });

      selectLanguage('greek');
      try {
        const saved = localStorage.getItem('activeLanguage');
        if (saved === 'hebrew' || saved === 'greek') selectLanguage(saved);
      } catch (_) {}

      if (window.AuthGuard && typeof window.AuthGuard.start === 'function') {
        window.AuthGuard.start({ loginUrl: 'index.html' });
      }
    })();
  
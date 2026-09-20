(function () {
  'use strict';

  const initializedPlayers = new WeakSet();

  function collapseLyrics(player) {
    if (initializedPlayers.has(player)) return;

    const lyrics = player.querySelector('.aplayer-lrc');
    const toggle = player.querySelector('.aplayer-icon-lrc');
    if (!lyrics || !toggle) return;

    initializedPlayers.add(player);
    window.requestAnimationFrame(function () {
      if (window.getComputedStyle(lyrics).display !== 'none') {
        toggle.click();
      }
    });
  }

  function scanPlayers() {
    document.querySelectorAll('.aplayer').forEach(collapseLyrics);
  }

  const observer = new MutationObserver(scanPlayers);

  function initialize() {
    scanPlayers();
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();

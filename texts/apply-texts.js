(function () {
  'use strict';

  var TEXTS = window.TEXTS || {};

  function resolve(obj, path) {
    if (!obj || typeof path !== 'string') return undefined;
    return path.split('.').reduce(function (o, key) {
      return o == null ? o : o[key];
    }, obj);
  }

  document.querySelectorAll('[data-text]').forEach(function (el) {
    var value = resolve(TEXTS, el.getAttribute('data-text'));
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-html]').forEach(function (el) {
    var value = resolve(TEXTS, el.getAttribute('data-html'));
    if (typeof value === 'string') el.innerHTML = value;
  });

  document.querySelectorAll('[data-href]').forEach(function (el) {
    var value = resolve(TEXTS, el.getAttribute('data-href'));
    if (typeof value === 'string') el.setAttribute('href', value);
  });

  var pageEl = document.querySelector('[data-page]');
  if (pageEl) {
    var page = resolve(TEXTS, 'pages.' + pageEl.getAttribute('data-page') + '.title');
    if (typeof page === 'string') document.title = page;
  }
})();
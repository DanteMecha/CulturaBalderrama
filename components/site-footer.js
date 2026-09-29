(function () {
  'use strict';

  var TEXTS = window.TEXTS || {};
  var SHARED = TEXTS.shared || {};
  var FOOTER = TEXTS.footer || {};
  var NAV = TEXTS.nav || {};

  function navLinks() {
    var all = [NAV.home].concat(NAV.items || []);
    return all.map(function (item) {
      return '<a href="' + item.href + '">' + item.label + '</a>';
    }).join('\n    ');
  }

  class SiteFooter extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = [
        '<style>',
        '  :host{ display: block; }',
        '  footer{',
        '    padding: 60px 40px 40px;',
        '    border-top: 1px solid rgba(255,255,255,0.08);',
        '    display: flex;',
        '    flex-wrap: wrap;',
        '    justify-content: space-between;',
        '    gap: 40px;',
        '  }',
        '  footer .col{',
        '    display: flex;',
        '    flex-direction: column;',
        '    gap: 6px;',
        '    font-size: 0.9rem;',
        '    color: var(--dim);',
        '  }',
        '  footer .col .head{',
        '    font-size: 0.75rem;',
        '    letter-spacing: 1.5px;',
        '    color: var(--white);',
        '    margin-bottom: 8px;',
        '  }',
        '  footer .col a{ color: inherit; text-decoration: none; }',
        '  footer a:hover{ color: var(--white); }',
        '  footer .subscribe{ flex: 1 1 260px; max-width: 380px; }',
        '  footer .subscribe form{ display: flex; align-items: stretch; }',
        '  footer .subscribe .field{ flex: 1; min-width: 0; }',
        '  footer .subscribe input[type="email"]{',
        '    width: 100%;',
        '    background: #000000;',
        '    border: 1px solid rgba(255,255,255,0.2);',
        '    border-right: none;',
        '    color: var(--white);',
        '    font-family: var(--font-body);',
        '    font-size: 0.9rem;',
        '    padding: 12px 14px;',
        '    outline: none;',
        '    transition: border-color 0.3s ease;',
        '  }',
        '  footer .subscribe input[type="email"]::placeholder{ color: var(--dim); }',
        '  footer .subscribe input[type="email"]:focus{ border-color: var(--white); }',
        '  footer .subscribe input[type="submit"]{',
        '    border: 1px solid rgba(255,255,255,0.2);',
        '    background: var(--white);',
        '    color: #000000;',
        '    font-family: var(--font-title);',
        '    text-transform: uppercase;',
        '    font-size: 0.8rem;',
        '    letter-spacing: 1px;',
        '    padding: 12px 20px;',
        '    cursor: pointer;',
        '    transition: background 0.3s ease, color 0.3s ease;',
        '  }',
        '  footer .subscribe input[type="submit"]:hover{ background: #B3D4FF; border-color: #B3D4FF; }',
        '  footer .subscribe .message{',
        '    display: block;',
        '    min-height: 1.1em;',
        '    margin-top: 10px;',
        '    font-size: 0.8rem;',
        '    color: var(--dim);',
        '  }',
        '  footer .subscribe .message.is-error{ color: #B3D4FF; }',
        '  footer .copy{',
        '    width: 100%;',
        '    text-align: center;',
        '    margin-top: 40px;',
        '    font-size: 0.75rem;',
        '    color: #3a3a3a;',
        '  }',
        '  @media (max-width: 700px){ footer{ padding: 40px 20px; } }',
        '</style>',
        '<footer>',
        '  <div class="col">',
        '    <div class="head">' + FOOTER.culturaTitle + '</div>',
        '    <span>' + SHARED.location + '</span>',
        '    <a href="mailto:' + SHARED.email + '">' + SHARED.email + '</a>',
        '  </div>',
        '  <div class="col">',
        '    <div class="head">' + FOOTER.explorarTitle + '</div>',
        '    ' + navLinks(),
        '  </div>',
        '  <div class="col">',
        '    <div class="head">' + FOOTER.seguinosTitle + '</div>',
        '    <a href="' + SHARED.instagramUrl + '" target="_blank" rel="noopener">' + FOOTER.instagram + '</a>',
        '    <a href="#">' + FOOTER.vimeo + '</a>',
        '  </div>',
        '  <div class="col subscribe">',
        '    <div class="head">' + FOOTER.stayInLoopTitle + '</div>',
        '    <form novalidate>',
        '      <div class="field">',
        '        <input type="email" name="email" placeholder="' + FOOTER.emailPlaceholder + '" required>',
        '      </div>',
        '      <input type="submit" value="' + FOOTER.submitLabel + '">',
        '    </form>',
        '    <span class="message"></span>',
        '  </div>',
        '  <div class="copy">' + SHARED.copyright + '</div>',
        '</footer>'
      ].join('\n');
      this._form = shadow.querySelector('form');
      this._message = shadow.querySelector('.message');

      this._onSubmit = (ev) => {
        ev.preventDefault();
        var input = this._form.querySelector('input[type="email"]');
        var value = (input.value || '').trim();
        var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        this._message.textContent = ok ? FOOTER.subscribeSuccess : FOOTER.subscribeError;
        this._message.classList.toggle('is-error', !ok);
        if (ok) this._form.reset();
      };
      this._form.addEventListener('submit', this._onSubmit);
    }

    disconnectedCallback() {
      this._form.removeEventListener('submit', this._onSubmit);
    }
  }

  customElements.define('site-footer', SiteFooter);
})();
(function () {
  'use strict';

  var TEXTS = window.TEXTS || {};
  var SHARED = TEXTS.shared || {};
  var FOOTER = TEXTS.footer || {};
  var NAV = TEXTS.nav || {};
  var FORM_ENDPOINT = 'https://api.web3forms.com/submit';
  var WEB3FORMS_ACCESS_KEY = 'c8d722e1-5ec0-4893-a8a3-0b80c87a0b2d';
  var WEB3FORMS_FROM_NAME = 'Landing Page Contact';

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
        '  footer .subscribe input[type="submit"]:disabled{',
        '    background: #4a4a4a;',
        '    border-color: rgba(255,255,255,0.2);',
        '    color: var(--dim);',
        '    cursor: not-allowed;',
        '  }',
        '  footer .subscribe .message{',
        '    display: block;',
        '    min-height: 1.1em;',
        '    margin-top: 10px;',
        '    font-size: 0.8rem;',
        '    line-height: 1.4;',
        '    color: var(--dim);',
        '  }',
        '  footer .subscribe .message.is-success{ color: var(--white); }',
        '  footer .subscribe .message.is-error{ color: #FF7A7A; }',
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
        '    <form action="' + FORM_ENDPOINT + '" method="POST" novalidate>',
        '      <input type="text" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">',
        '      <input type="hidden" name="access_key" value="' + WEB3FORMS_ACCESS_KEY + '">',
        '      <input type="hidden" name="from_name" value="' + WEB3FORMS_FROM_NAME + '">',
        '      <input type="hidden" name="captcha" value="false">',
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
      this._submit = shadow.querySelector('input[type="submit"]');
      this._submitLabel = this._submit.value;

      this._setMessage = (text, state) => {
        this._message.textContent = text;
        this._message.classList.toggle('is-success', state === 'success');
        this._message.classList.toggle('is-error', state === 'error');
      };

      this._endSubmit = () => {
        this._submit.disabled = false;
        this._submit.value = this._submitLabel;
      };

      this._post = (payload, attempt) => {
        var self = this;
        fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: payload
        })
          .then(function (res) {
            return res.json().catch(function () { return {}; })
              .then(function (data) { return { status: res.status, data: data }; });
          })
          .then(function (r) {
            if (r.status === 429 || r.status >= 500) {
              var transient = new Error('HTTP ' + r.status);
              transient.retryable = true;
              throw transient;
            }
            if (r.status < 200 || r.status >= 300) {
              throw new Error('HTTP ' + r.status + (r.data.message ? ' — ' + r.data.message : ''));
            }
            if (!(r.data.success === true || r.data.success === 'true')) {
              throw new Error(r.data.message || r.data.success || 'Respuesta inesperada del servidor');
            }
            self._form.reset();
            self._setMessage(FOOTER.subscribeSuccess, 'success');
            self._endSubmit();
          })
          .catch(function (err) {
            if (err.retryable && attempt < 3) {
              setTimeout(function () { self._post(payload, attempt + 1); }, 1500 * attempt);
              return;
            }
            console.error('[site-footer] submission failed:', err);
            self._setMessage(
              FOOTER.subscribeFailed + (err && err.message ? ' (' + err.message + ')' : ''),
              'error'
            );
            self._endSubmit();
          });
      };

      this._onSubmit = (ev) => {
        ev.preventDefault();
        var input = this._form.querySelector('input[type="email"]');
        var value = (input.value || '').trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          this._setMessage(FOOTER.subscribeError, 'error');
          input.focus();
          return;
        }

        this._submit.disabled = true;
        this._submit.value = FOOTER.subscribeSending;
        this._setMessage('', null);

        var payload = {
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: WEB3FORMS_FROM_NAME,
          captcha: false,
          botcheck: this._form.querySelector('input[name="botcheck"]').value,
          email: value
        };

        this._post(JSON.stringify(payload), 1);
      };
      this._form.addEventListener('submit', this._onSubmit);
    }

    disconnectedCallback() {
      this._form.removeEventListener('submit', this._onSubmit);
    }
  }

  customElements.define('site-footer', SiteFooter);
})();
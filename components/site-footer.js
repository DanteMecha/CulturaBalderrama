(function () {
  'use strict';

  var TEXTS = window.TEXTS || {};
  var SHARED = TEXTS.shared || {};
  var FOOTER = TEXTS.footer || {};
  var NAV = TEXTS.nav || {};
  var FORM_ENDPOINT = 'https://api.web3forms.com/submit';
  var WEB3FORMS_ACCESS_KEY = 'c8d722e1-5ec0-4893-a8a3-0b80c87a0b2d';
  var WEB3FORMS_FROM_NAME = 'Landing Page Contact';
  // Banner institucional: cierra todas las paginas desde el footer.
  var BANNER_IMAGE = 'Banner_1_recortado.jpeg';

  function navLinks() {
    // Los items marcados como `hidden` no se muestran todavia (merch).
    var items = (NAV.items || []).filter(function (item) { return !item.hidden; });
    var all = [NAV.home].concat(items);
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
        '  /* El reset de cada pagina no atraviesa el shadow root: sin esto los',
        '     inputs quedan en content-box y se pasan del ancho del contenedor. */',
        '  *, *::before, *::after{ box-sizing: border-box; }',
        '  footer{',
        '    padding: 0 40px 40px;',
        '  }',
        /* El banner se escapa del padding para llegar de borde a borde. */
        '  footer .banner{',
        '    margin: 0 -40px 48px;',
        '    line-height: 0;',
        '  }',
        '  footer .banner img{',
        '    display: block;',
        '    width: 100%;',
        '    height: auto;',
        '  }',
        '  footer .cols{',
        '    display: flex;',
        '    flex-wrap: wrap;',
        '    justify-content: space-between;',
        '    gap: 40px;',
        '    padding-top: 40px;',
        '    border-top: 1px solid rgba(255,255,255,0.08);',
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
        '  @media (hover: hover) and (pointer: fine){',
        '    footer a:hover{ color: var(--white); }',
        '  }',
        '  @media (hover: none){',
        '    footer a:active{ color: var(--white); }',
        '  }',
        /* Mas ancho para que "Ingresá tu email" entre sin cortarse. */
        '  footer .subscribe{ flex: 1 1 320px; max-width: 440px; }',
        '  footer .subscribe form{ display: flex; align-items: stretch; }',
        '  footer .subscribe .field{ flex: 1 1 auto; min-width: 0; }',
        '  footer .subscribe input[type="email"]{',
        '    width: 100%;',
        '    min-width: 0;',
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
        '  footer .subscribe input[type="submit"]:disabled{',
        '    background: #4a4a4a;',
        '    border-color: rgba(255,255,255,0.2);',
        '    color: var(--dim);',
        '    cursor: not-allowed;',
        '  }',
        '  @media (hover: hover) and (pointer: fine){',
        '    footer .subscribe input[type="submit"]:hover{ background: #B3D4FF; border-color: #B3D4FF; }',
        '  }',
        '  @media (hover: none){',
        '    footer .subscribe input[type="submit"]:active{ background: #B3D4FF; border-color: #B3D4FF; }',
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
        '  @media (max-width: 900px){',
        '    /* Input y boton uno al lado del otro no entran: se apilan. */',
        '    footer .subscribe{ max-width: none; }',
        '    footer .subscribe form{ flex-direction: column; gap: 10px; }',
        '    footer .subscribe input[type="email"]{ border-right: 1px solid rgba(255,255,255,0.2); }',
        '    footer .subscribe input[type="submit"]{ width: 100%; min-height: 46px; }',
        '  }',
        '  @media (max-width: 700px){',
        '    :host{ display: block; margin-top: auto; }',
        '    footer{ padding: 0 16px 16px; }',
        '    footer .banner{ margin: 0 -16px 24px; }',
        '    footer .banner img{ width: 100%; height: auto; object-fit: cover; }',
        '    footer .cols{ gap: 28px; padding-top: 24px; }',
        '    footer .subscribe{ flex: 1 1 100%; max-width: 100%; }',
        '  }',
        '  @media (min-width: 701px) and (max-width: 900px){',
        '    footer{ padding: 0 28px 36px; }',
        '    footer .banner{ margin: 0 -28px 40px; }',
        '    footer .cols{ padding-top: 36px; }',
        '  }',
        '</style>',
        '<footer>',
        '  <div class="banner">',
        '    <img src="images/' + BANNER_IMAGE + '" alt="' + (SHARED.brandLogo || SHARED.projectName || '') + '" loading="lazy" decoding="async">',
        '  </div>',
        '  <div class="cols">',
        '    <div class="col">',
        '      <div class="head">' + FOOTER.explorarTitle + '</div>',
        '      ' + navLinks(),
        '    </div>',
        '    <div class="col">',
        '      <div class="head">' + FOOTER.seguinosTitle + '</div>',
        '      <a href="' + SHARED.instagramUrl + '" target="_blank" rel="noopener">' + FOOTER.instagram + '</a>',
        '      <a href="' + SHARED.youtubeUrl + '" target="_blank" rel="noopener">' + FOOTER.youtube + '</a>',
        '      <a href="' + SHARED.tiktokUrl + '" target="_blank" rel="noopener">' + FOOTER.tiktok + '</a>',
        '    </div>',
        '    <div class="col subscribe">',
        '      <div class="head">' + FOOTER.stayInLoopTitle + '</div>',
        '      <form action="' + FORM_ENDPOINT + '" method="POST" novalidate>',
        '        <input type="text" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">',
        '        <input type="hidden" name="access_key" value="' + WEB3FORMS_ACCESS_KEY + '">',
        '        <input type="hidden" name="from_name" value="' + WEB3FORMS_FROM_NAME + '">',
        '        <input type="hidden" name="captcha" value="false">',
        '        <div class="field">',
        '          <input type="email" name="email" placeholder="' + FOOTER.emailPlaceholder + '" required>',
        '        </div>',
        '        <input type="submit" value="' + FOOTER.submitLabel + '">',
        '      </form>',
        '      <span class="message"></span>',
        '    </div>',
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
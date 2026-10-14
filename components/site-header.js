(function () {
  'use strict';

  var TEXTS = window.TEXTS || {};
  var HDR = TEXTS.header || {};
  var SHARED = TEXTS.shared || {};

  class SiteHeader extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = [
        '<style>',
        '  *, *::before, *::after{ box-sizing: border-box; }',
        '  :host{',
        '    position: fixed;',
        '    top: 0; left: 0; right: 0;',
        '    z-index: 50;',
        '    display: flex;',
        '    align-items: center;',
        '    justify-content: space-between;',
        '    padding: 28px 56px;',
        '    mix-blend-mode: difference;',
        '  }',
        '  .logo{',
        '    display: inline-block;',
        '    padding: 20px 0 0 30px;',
        '    font-family: var(--font-brand);',
        '    text-transform: uppercase;',
        '    font-size: clamp(1.5rem, 6.5vw, 2.6rem);',
        '    line-height: 0.9;',
        '    letter-spacing: -0.02em;',
        '    color: #B3D4FF;',
        '    text-decoration: none;',
        '  }',
        '  .menu-toggle{',
        '    background: none;',
        '    border: none;',
        '    color: var(--white);',
        '    font-family: var(--font-body);',
'    font-size: 1.3rem;',
'    letter-spacing: 2px;',
        '    cursor: pointer;',
        '    display: flex;',
        '    align-items: center;',
        '    gap: 12px;',
        '    padding: 20px 24px 0 0;',
        '  }',
        '  .menu-toggle .menu-label{ display: inline-block; }',
        '  .menu-toggle .menu-label::before{ content: "' + HDR.menuLabel + '"; }',
        '  .menu-toggle .menu-burger{',
        '    position: relative;',
        '    width: 22px;',
        '    height: 20px;',
        '  }',
        '  .menu-toggle .menu-burger .top,',
        '  .menu-toggle .menu-burger .bottom{',
        '    position: absolute;',
        '    left: 0;',
        '    width: 22px;',
        '    height: 1px;',
        '    background: var(--white);',
        '    transition: transform 0.2s ease, top 0.2s ease;',
        '  }',
        '  .menu-toggle .menu-burger .top{ top: 6px; }',
        '  .menu-toggle .menu-burger .bottom{ top: 13px; }',
        '  :host([open]) .menu-toggle .menu-burger .top{ transform: rotate(45deg); top: 10px; }',
        '  :host([open]) .menu-toggle .menu-burger .bottom{ transform: rotate(-45deg); top: 10px; }',
        '  :host([open]) .menu-toggle .menu-label::before{ content: "' + HDR.closeLabel + '"; }',
        '  @media (max-width: 700px){',
        '    :host{ padding: 20px 28px; }',
        '    .logo{ padding: 16px 0 0 20px; }',
        '    /* Se mantiene el padding derecho del desktop: si no el burger queda pegado al borde. */',
        '    .menu-toggle{ padding: 16px 24px 0 0; }',
        '    /* En el celu solo queda el burger: la palabra ya no entra. */',
        '    .menu-toggle .menu-label{ display: none; }',
        '  }',
        '  @media (max-height: 500px) and (orientation: landscape){',
        '    :host{ padding: 12px 24px; }',
        '    .logo{ padding: 10px 0 0 20px; font-size: clamp(1.3rem, 5vw, 1.8rem); }',
        '    .menu-toggle{ padding: 10px 24px 0 0; }',
        '  }',
        '</style>',
        '<a class="logo"></a>',
        '<button class="menu-toggle" aria-label="' + HDR.ariaLabel + '" aria-expanded="false">',
        '  <span class="menu-label"></span>',
        '  <span class="menu-burger"><span class="top"></span><span class="bottom"></span></span>',
        '</button>'
      ].join('\n');
      this._logo = shadow.querySelector('.logo');
      this._toggle = shadow.querySelector('.menu-toggle');
      this._openAria = HDR.closeLabel || HDR.ariaLabel;
      this._closedAria = HDR.ariaLabel;
    }

    _setOpen(open) {
      this.toggleAttribute('open', open);
      this._toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      this._toggle.setAttribute('aria-label', open ? this._openAria : this._closedAria);
    }

    connectedCallback() {
      this._logo.textContent = SHARED.brandLogo || SHARED.projectName || '';
      this._logo.setAttribute('href', this.getAttribute('href') || 'index.html');
      this._onToggle = () => document.dispatchEvent(new CustomEvent('menu:toggle'));
      // En el celu la palabra MENU no se ve, asi que el estado abierto/cerrado
      // tiene que quedar en el nombre accesible y en aria-expanded.
      this._onOpen = () => this._setOpen(true);
      this._onClose = () => this._setOpen(false);
      this._toggle.addEventListener('click', this._onToggle);
      document.addEventListener('menu:open', this._onOpen);
      document.addEventListener('menu:close', this._onClose);

      // El header es el unico que sabe cuanto mide: publica --header-h para que
      // cada pagina offsette su contenido sin numeros magicos. Se redondea a
      // pixel entero y solo se escribe cuando cambia el valor, asi el scroll
      // (que en mobile dispara resize) nunca puede provocar un salto de layout.
      this._syncHeight = () => {
        const h = Math.round(this.offsetHeight) + 'px';
        if (h === this._headerH) return;
        this._headerH = h;
        document.documentElement.style.setProperty('--header-h', h);
      };
      if (window.ResizeObserver) {
        this._ro = new ResizeObserver(this._syncHeight);
        this._ro.observe(this);
      } else {
        window.addEventListener('resize', this._syncHeight);
      }
      this._syncHeight();
    }

    disconnectedCallback() {
      this._toggle.removeEventListener('click', this._onToggle);
      document.removeEventListener('menu:toggle', this._onOpen);
      document.removeEventListener('menu:close', this._onClose);
      if (this._ro) this._ro.disconnect();
      else window.removeEventListener('resize', this._syncHeight);
    }
  }

  customElements.define('site-header', SiteHeader);
})();
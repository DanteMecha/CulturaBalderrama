(function () {
  'use strict';

  class SiteHeader extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = [
        '<style>',
        '  :host{',
        '    position: fixed;',
        '    top: 0; left: 0; right: 0;',
        '    z-index: 50;',
        '    display: flex;',
        '    align-items: center;',
        '    justify-content: space-between;',
        '    padding: 28px 40px;',
        '    mix-blend-mode: difference;',
        '  }',
        '  .logo{',
        '    font-family: var(--font-title);',
        '    font-size: 1rem;',
        '    letter-spacing: 0.5px;',
        '    color: var(--white);',
        '    text-decoration: none;',
        '  }',
        '  .menu-toggle{',
        '    background: none;',
        '    border: none;',
        '    color: var(--white);',
        '    font-family: var(--font-body);',
        '    font-size: 1rem;',
        '    letter-spacing: 2px;',
        '    cursor: pointer;',
        '    display: flex;',
        '    align-items: center;',
        '    gap: 12px;',
        '  }',
        '  .menu-toggle .menu-label::before{ content: "MENU"; }',
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
        '  :host([open]) .menu-toggle .menu-label::before{ content: "CERRAR"; }',
        '  @media (max-width: 700px){ :host{ padding: 20px; } }',
        '</style>',
        '<a class="logo"></a>',
        '<button class="menu-toggle" aria-label="Abrir menú">',
        '  <span class="menu-label"></span>',
        '  <span class="menu-burger"><span class="top"></span><span class="bottom"></span></span>',
        '</button>'
      ].join('\n');
      this._logo = shadow.querySelector('.logo');
      this._toggle = shadow.querySelector('.menu-toggle');
    }

    connectedCallback() {
      this._logo.textContent = 'Dónde iremos a parar';
      this._logo.setAttribute('href', this.getAttribute('href') || 'index.html');
      this._onToggle = () => document.dispatchEvent(new CustomEvent('menu:toggle'));
      this._onOpen = () => this.toggleAttribute('open');
      this._onClose = () => this.removeAttribute('open');
      this._toggle.addEventListener('click', this._onToggle);
      document.addEventListener('menu:toggle', this._onOpen);
      document.addEventListener('menu:close', this._onClose);
    }

    disconnectedCallback() {
      this._toggle.removeEventListener('click', this._onToggle);
      document.removeEventListener('menu:toggle', this._onOpen);
      document.removeEventListener('menu:close', this._onClose);
    }
  }

  customElements.define('site-header', SiteHeader);
})();
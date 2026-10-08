(function () {
  'use strict';

  var TEXTS = window.TEXTS || {};
  var NAV = TEXTS.nav || {};
  var MENU_LINKS = NAV.items || [];

  function closeMenu() {
    document.dispatchEvent(new CustomEvent('menu:close'));
  }

  class SiteMenu extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = [
        '<style>',
        '  *, *::before, *::after{ box-sizing: border-box; }',
        '  :host{',
        '    position: fixed;',
        '    inset: 0;',
        '    z-index: 30;',
        '    pointer-events: none;',
        '  }',
        '  .menu_background{',
        '    position: fixed;',
        '    inset: 0;',
        '    z-index: 30;',
        '    display: none;',
        '    pointer-events: auto;',
        '  }',
        '  :host([open]) .menu_background{ display: block; }',
        '  .side-menu{',
        '    position: fixed;',
        '    right: 0; top: 0; bottom: 0;',
        '    width: 100%;',
        '    z-index: 40;',
        '    background: rgba(0,0,0,0.5);',
        '    -webkit-backdrop-filter: saturate(180%) blur(20px);',
        '    backdrop-filter: saturate(180%) blur(20px);',
        '    padding: 0 20px;',
        '    pointer-events: auto;',
        '    overflow-y: auto;',
        '    overscroll-behavior: contain;',
        '    -webkit-overflow-scrolling: touch;',
        '    transform: translate3d(calc(100% + 40px), 0, 0);',
        '    transition: transform 0.3s cubic-bezier(0.55, 0, 0.34, 1);',
        '  }',
        '  :host([open]) .side-menu{ transform: translate3d(0, 0, 0); }',
        '  .side-menu .content{',
        '    position: relative;',
        '    height: 100%;',
        '    opacity: 0;',
        '    transform: translate3d(0, 12px, 0);',
        '    transition: transform 0.55s cubic-bezier(0.55, 0, 0.34, 1), opacity 0.55s cubic-bezier(0.55, 0, 0.34, 1);',
        '  }',
        '  :host([open]) .side-menu .content{',
        '    opacity: 1;',
        '    transform: translate3d(0, 0, 0);',
        '    transition-delay: 0.2s;',
        '  }',
        '  .side-menu nav{',
        '    position: absolute;',
        '    top: 0;',
        '    left: 20px;',
        '    display: flex;',
        '    flex-direction: column;',
        '    height: 100%;',
        '    padding-top: 6rem;',
        '    gap: 1rem;',
        '  }',
        '  .side-menu nav a{',
        '    font-family: var(--font-title);',
        '    text-transform: uppercase;',
        '    font-size: clamp(2rem, 4.5vw, 4rem);',
        '    line-height: 0.98;',
        '    color: var(--white);',
        '    text-decoration: none;',
        '    transition: color 0.2s ease;',
        '  }',
        '  @media (hover: hover) and (pointer: fine){',
        '    .side-menu nav a:hover{color: #B3D4FF;}',
        '  }',
        '  @media (hover: none){',
        '    .side-menu nav a:active{color: #B3D4FF;}',
        '  }',
        '  /* Tablet: panel parcial para que se siga viendo la pagina detras. */',
        '  @media (min-width: 701px) and (max-width: 899px){',
        '    .side-menu{ width: 78%; padding: 0 28px; }',
        '    .side-menu nav{ left: 28px; }',
        '  }',
        '  @media (min-width: 900px){',
        '    .side-menu{ width: 56.5%; padding: 0 40px; }',
        '    .side-menu nav{ left: 40px; }',
        '  }',
        '  /* Celular apaisado: entra muy poco alto. El nav pasa a flujo normal',
        '     para que el panel scrollee en vez de recortar los links. */',
        '  @media (max-height: 500px) and (orientation: landscape){',
        '    .side-menu .content{ height: auto; min-height: 100%; }',
        '    .side-menu nav{',
        '      position: static;',
        '      height: auto;',
        '      padding-top: 4.5rem;',
        '      padding-bottom: 1.5rem;',
        '      gap: 0.5rem;',
        '    }',
        '    .side-menu nav a{ font-size: clamp(1.4rem, 4vw, 2rem); }',
        '  }',
        '</style>',
        '<div class="menu_background"></div>',
        '<div class="side-menu">',
        '  <div class="content">',
        '    <nav></nav>',
        '  </div>',
        '</div>'
      ].join('\n');
      this._nav = shadow.querySelector('nav');
      this._backdrop = shadow.querySelector('.menu_background');
    }

    connectedCallback() {
      this._nav.innerHTML = [NAV.home].concat(MENU_LINKS)
        .map((item) => '<a href="' + item.href + '">' + item.label + '</a>')
        .join('');

      this._onToggle = () => this.toggleAttribute('open');
      this._onClose = () => this.removeAttribute('open');
      this._onLink = (ev) => {
        if (ev.target.closest('a')) closeMenu();
      };
      this._onBackdrop = () => closeMenu();
      document.addEventListener('menu:toggle', this._onToggle);
      document.addEventListener('menu:close', this._onClose);
      this._nav.addEventListener('click', this._onLink);
      this._backdrop.addEventListener('click', this._onBackdrop);
    }

    disconnectedCallback() {
      document.removeEventListener('menu:toggle', this._onToggle);
      document.removeEventListener('menu:close', this._onClose);
      this._nav.removeEventListener('click', this._onLink);
      this._backdrop.removeEventListener('click', this._onBackdrop);
    }
  }

  customElements.define('site-menu', SiteMenu);
})();
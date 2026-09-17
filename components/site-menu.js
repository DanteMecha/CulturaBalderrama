(function () {
  'use strict';

  const MENU_LINKS = [
    ['eventos-proximos.html', 'Eventos próximos'],
    ['eventos-pasados.html', 'Eventos pasados'],
    ['merch.html', 'Merch'],
    ['contenido.html', 'Contenido'],
    ['nosotros.html', 'Sobre nosotros'],
    ['contacto.html', 'Contacto']
  ];

  function closeMenu() {
    document.dispatchEvent(new CustomEvent('menu:close'));
  }

  class SiteMenu extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = [
        '<style>',
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
        '  .side-menu nav a:hover{color: #B3D4FF;}',
        '  @media (min-width: 900px){',
        '    .side-menu{ width: 56.5%; padding: 0 40px; }',
        '    .side-menu nav{ left: 40px; }',
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
      const links = [];
      if (this.hasAttribute('home')) {
        links.push(['index.html', 'Inicio']);
      }
      links.push(...MENU_LINKS);
      this._nav.innerHTML = links
        .map((item) => '<a href="' + item[0] + '">' + item[1] + '</a>')
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
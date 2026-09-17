(function () {
  'use strict';

  var MENU_LINKS = [
    ['eventos-proximos.html', 'Eventos próximos'],
    ['eventos-pasados.html', 'Eventos pasados'],
    ['merch.html', 'Merch'],
    ['contenido.html', 'Contenido'],
    ['nosotros.html', 'Sobre nosotros'],
    ['contacto.html', 'Contacto']
  ];

  function openMenu() {
    document.dispatchEvent(new CustomEvent('menu:toggle'));
  }
  function closeMenu() {
    document.dispatchEvent(new CustomEvent('menu:close'));
  }

  /* ---------- header ---------- */
  var SiteHeader = function () {
    var shadow = this.attachShadow({ mode: 'open' });
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
  };

  SiteHeader.prototype = Object.create(HTMLElement.prototype);
  SiteHeader.prototype.constructor = SiteHeader;

  SiteHeader.prototype.connectedCallback = function () {
    this._logo.textContent = 'Dónde iremos a parar';
    this._logo.setAttribute('href', this.getAttribute('href') || 'index.html');
    this._onToggle = function () { openMenu(); };
    this._onClose = function () { this.removeAttribute('open'); };
    this._toggle.addEventListener('click', this._onToggle);
    document.addEventListener('menu:close', this._onClose);
  };
  SiteHeader.prototype.disconnectedCallback = function () {
    this._toggle.removeEventListener('click', this._onToggle);
    document.removeEventListener('menu:close', this._onClose);
  };

  customElements.define('site-header', SiteHeader);

  /* ---------- side menu ---------- */
  var SiteMenu = function () {
    var shadow = this.attachShadow({ mode: 'open' });
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
      '  .side-menu nav a:hover{ color: #B3D4FF; }',
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
  };

  SiteMenu.prototype = Object.create(HTMLElement.prototype);
  SiteMenu.prototype.constructor = SiteMenu;

  SiteMenu.prototype.connectedCallback = function () {
    var links = [];
    if (this.hasAttribute('home')) {
      links.push(['index.html', 'Inicio']);
    }
    links = links.concat(MENU_LINKS);
    this._nav.innerHTML = links.map(function (item) {
      return '<a href="' + item[0] + '">' + item[1] + '</a>';
    }).join('');

    var self = this;
    this._onToggle = function () { self.toggleAttribute('open'); };
    this._onClose = function () { self.removeAttribute('open'); };
    this._onLink = function (ev) {
      if (ev.target.closest('a')) closeMenu();
    };
    this._onBackdrop = function () { closeMenu(); };
    document.addEventListener('menu:toggle', this._onToggle);
    document.addEventListener('menu:close', this._onClose);
    this._nav.addEventListener('click', this._onLink);
    this._backdrop.addEventListener('click', this._onBackdrop);
  };
  SiteMenu.prototype.disconnectedCallback = function () {
    document.removeEventListener('menu:toggle', this._onToggle);
    document.removeEventListener('menu:close', this._onClose);
    this._nav.removeEventListener('click', this._onLink);
    this._backdrop.removeEventListener('click', this._onBackdrop);
  };

  customElements.define('site-menu', SiteMenu);

  /* ---------- footer ---------- */
  var SiteFooter = function () {
    var shadow = this.attachShadow({ mode: 'open' });
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
      '    <div class="head">CULTURA Y POLÍTICA</div>',
      '    <span>Buenos Aires, Argentina</span>',
      '    <a href="mailto:info@estudio.com">info@estudio.com</a>',
      '  </div>',
      '  <div class="col">',
      '    <div class="head">EXPLORAR</div>',
      '    <a href="index.html">Inicio</a>',
      '    <a href="eventos-proximos.html">Eventos próximos</a>',
      '    <a href="eventos-pasados.html">Eventos pasados</a>',
      '    <a href="merch.html">Merch</a>',
      '    <a href="contenido.html">Contenido</a>',
      '    <a href="nosotros.html">Sobre nosotros</a>',
      '  </div>',
      '  <div class="col">',
      '    <div class="head">SEGUINOS</div>',
      '    <a href="https://www.instagram.com/culturabalderrama/" target="_blank" rel="noopener">Instagram</a>',
      '    <a href="#">Vimeo</a>',
      '  </div>',
      '  <div class="copy">Copyright © 2026 Dónde iremos a parar</div>',
      '</footer>'
    ].join('\n');
  };

  SiteFooter.prototype = Object.create(HTMLElement.prototype);
  SiteFooter.prototype.constructor = SiteFooter;

  customElements.define('site-footer', SiteFooter);
})();
(function () {
  'use strict';

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
    }
  }

  customElements.define('site-footer', SiteFooter);
})();
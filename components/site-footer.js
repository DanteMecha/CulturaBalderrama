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
        '  <div class="copy">' + SHARED.copyright + '</div>',
        '</footer>'
      ].join('\n');
    }
  }

  customElements.define('site-footer', SiteFooter);
})();
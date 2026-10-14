(function () {
  'use strict';

  window.TEXTS = {
    shared: {
      projectName: 'Balderrama',
      brandLogo: 'BALDERRAMA',
      slogan: 'Dónde iremos a parar',
      location: 'Buenos Aires, Argentina',
      email: 'info@estudio.com',
      mailtoEmail: 'mailto:info@estudio.com',
      instagramHandle: '@culturabalderrama',
      instagramUrl: 'https://www.instagram.com/culturabalderrama/',
      youtubeHandle: '@culturabalderrama',
      youtubeUrl: 'https://www.youtube.com/@culturabalderrama',
      copyright: 'Copyright © 2026 Dónde iremos a parar',
      limitedEdition: '$ — Edición limitada'
    },

    header: {
      menuLabel: 'MENU',
      closeLabel: 'CERRAR',
      ariaLabel: 'Abrir menú'
    },

    nav: {
      home: { href: 'index.html', label: 'Inicio' },
      items: [
        { href: 'eventos.html', label: 'Eventos' },
        { href: 'merch.html', label: 'Merch' },
        { href: 'contenido.html', label: 'Contenido' },
        { href: 'nosotros.html', label: 'Sobre nosotros' },
        { href: 'contacto.html', label: 'Contacto' }
      ]
    },

    footer: {
      culturaTitle: 'CULTURA Y POLÍTICA',
      explorarTitle: 'EXPLORAR',
      seguinosTitle: 'SEGUINOS',
      instagram: 'Instagram',
      youtube: 'YouTube',
      youtubeUrl: 'https://www.youtube.com/@culturabalderrama',
      stayInLoopTitle: 'STAY IN THE LOOP',
      emailPlaceholder: 'Ingresá tu email',
      submitLabel: 'Enviar',
      subscribeSending: 'Sending...',
      subscribeSuccess: 'Thank you! Your message has been sent successfully.',
      subscribeError: 'Ingresá un email válido.',
      subscribeFailed: 'No se pudo enviar el mensaje. Intentá de nuevo.'
    },

    pages: {
      home: {
        title: 'Cultura Balderrama',
        heroTitle: 'BALDERRAMA',
        aboutTitle: 'Nosotros',
        aboutText: 'La cultura es política. Bajo esta idea, tan simple como compleja y desafiante, armamos Balderrama: un espacio pensado para generar encuentros en los que se debata y se propague el arte y nuestra cultura nacional.<br><br>Creemos en la discusión política dentro del campo artístico para defender el rol de la cultura como elemento de transformación y de constitución de nuestra identidad.<br><br>Por eso, armamos encuentros donde invitamos a diferentes artistas a conversar sobre el escenario cultural de nuestro país. Además, abrimos el espacio a proyecciones y música en vivo, para seguir difundiendo y conservando nuestro arte nacional.<br><br>Balderrama nace para que discutamos. Creemos que es importante entender de dónde venimos para pensar hacia dónde vamos.'
      },

      nosotros: {
        title: 'Sobre nosotros — Balderrama',
        heading: 'Nosotros',
        blocks: [
          {
            num: '01',
            heading: 'Nosotros',
            content: [
              'La cultura es política. Bajo esta idea, tan simple como compleja y desafiante, armamos Balderrama: un espacio pensado para generar encuentros en los que se debata y se propague el arte y nuestra cultura nacional.',
              'Creemos en la discusión política dentro del campo artístico para defender el rol de la cultura como elemento de transformación y de constitución de nuestra identidad.',
              'Por eso, armamos encuentros donde invitamos a diferentes artistas a conversar sobre el escenario cultural de nuestro país. Además, abrimos el espacio a proyecciones y música en vivo, para seguir difundiendo y conservando nuestro arte nacional.',
              'Balderrama nace para que discutamos. Creemos que es importante entender de dónde venimos para pensar hacia dónde vamos.'
            ]
          },
          {
            num: '02',
            heading: 'Por qué Balderrama',
            content: [
              'Balderrama es una histórica Peña fundada en 1953, en Salta, por los hermanos Juan, Daria y Celestino Balderrama. Punto de encuentro de músicos y poetas, fue conocida como "Templo mayor del folclore".',
              'Conocimos la peña por la zamba "Balderrama" y su estribillo que expresa el miedo a perder ese espacio cultural.',
              '"Lucero solito, brote del alba ¿dónde iremos a parar si se apaga Balderrama?"',
              'En honor al encuentro y a la cultura y en tiempos donde el arte y lo colectivo están en juego, decidimos nombrar a este proyecto; Balderrama.'
            ]
          }
        ]
      },

      contacto: {
        title: 'Contacto — Balderrama',
        heading: 'Contacto',
        labels: {
          email: 'Email',
          instagram: 'Instagram',
          youtube: 'YouTube',
          location: 'Ubicación'
        }
      },

      contenido: {
        title: 'Contenido — Balderrama',
        heading: 'Contenido',
        viewerPrevLabel: 'Foto anterior',
        viewerNextLabel: 'Foto siguiente',
        viewerCloseLabel: 'Cerrar galería',
        viewerOfLabel: 'de',
        items: [
          { title: 'Lucrecia Martel', sub: 'Serie — 2026' },
          { title: 'Lucrecia Martel', sub: 'Detrás de escena — 2026' },
          { title: 'Lucrecia Martel', sub: 'Producción — 2026' },
          { title: 'Lucrecia Martel', sub: 'Detrás de escena — 2026' },
          { title: 'Lucrecia Martel', sub: 'Producción — 2026' },
          { title: 'Lucrecia Martel', sub: 'Serie — 2026' },
          { title: 'Lucrecia Martel', sub: 'Producción — 2026' },
          { title: 'Lucrecia Martel', sub: 'Detrás de escena — 2026' },
          { title: 'Marttein', sub: 'Serie — 2026' },
          { title: 'Marttein', sub: 'Detrás de escena — 2026' },
          { title: 'Marttein', sub: 'Producción — 2026' },
          { title: 'Marttein', sub: 'Serie — 2026' },
          { title: 'Marttein', sub: 'Detrás de escena — 2026' },
          { title: 'Marttein', sub: 'Producción — 2026' },
          { title: 'Marttein', sub: 'Serie — 2026' },
          { title: 'Marttein', sub: 'Detrás de escena — 2026' },
          { title: 'Marttein', sub: 'Producción — 2026' },
          { title: 'Marttein', sub: 'Serie — 2026' }
        ]
      },

      eventos: {
        title: 'Eventos — Balderrama',
        heading: 'Eventos',
        closeLabel: 'CERRAR',
        fallbackLabel: 'ABRIR EN OTRA PESTAÑA',
        items: [
          { title: 'Charla con Lucrecia Martel', sub: 'Buenos Aires — 2026' },
          { title: 'Charla con Marttein', sub: 'Buenos Aires — 2026' }
        ],
        sections: [
          {
            number: '02',
            kicker: 'Charla / Cine',
            title: 'Lucrecia Martel',
            meta: 'Buenos Aires — 2026',
            content: [
              'En nuestro primer encuentro del 2026 invitamos a Lucrecia Martel para que nos comparta su mirada sobre <span class="highlight-gold">cómo se fue modificando el panorama cultural a lo largo de los últimos años.</span>',
              'Lucrecia nos abrió camino a pensar no solo cómo fueron las cosas, sino cómo modificarlas para que se conviertan en eso que deseamos.',
              '<span class="highlight-celeste">Pueden ver la charla completa y algunos recortes acá:</span>'
            ],
            watchLabel: 'Ver la charla',
            clipsLabel: 'Ver clips del evento'
          },
          {
            number: '03',
            kicker: 'Charla / Música',
            title: 'Marttein',
            meta: 'Buenos Aires — 2026',
            content: [
              'En agosto nos acompañó Marttein, con quién conversamos sobre <span class="highlight-gold">el panorama de la juventud y la música actualmente.</span>',
              'Marttein nos resaltó la importancia de que se brinden herramientas para formarse en lo que cada uno desea, así después se desarrolla y contribuye a la construcción de una identidad colectiva.',
              '<span class="highlight-celeste">Pueden ver la charla completa y algunos recortes acá:</span>'
            ],
            watchLabel: 'Ver la charla',
            clipsLabel: 'Ver clips del evento'
          }
        ]
      },

      merch: {
        title: 'Merch — Balderrama',
        heading: 'Merch',
        sections: [
          {
            kicker: 'Tienda',
            title: 'Remeras',
            meta: 'Edición limitada',
            content: [
              'Llevá Balderrama con vos. Nuestras remeras forman parte de la identidad del proyecto y están disponibles en edición limitada.'
            ]
          }
        ]
      }
    }
  };
})();
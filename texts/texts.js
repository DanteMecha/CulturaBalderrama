(function () {
  'use strict';

  window.TEXTS = {
    shared: {
      projectName: 'Balderrama',
      brandLogo: 'BALDERRAMA',
      // Version del logo partido en silabas: se usa en el header de las
      // paginas que no son el index.
      brandLogoSyllables: 'BALDERRAMA.',
      slogan: 'Dónde iremos a parar',
      location: 'Buenos Aires, Argentina',
      email: 'info@estudio.com',
      mailtoEmail: 'mailto:info@estudio.com',
      instagramHandle: '@culturabalderrama',
      instagramUrl: 'https://www.instagram.com/culturabalderrama/',
      youtubeHandle: '@culturabalderrama',
      youtubeUrl: 'https://www.youtube.com/@culturabalderrama',
      tiktokHandle: '@culturabalderrama',
      tiktokUrl: 'https://www.tiktok.com/@culturabalderrama?_r=1&_t=ZS-9AkpTqMeApc',
      copyright: 'Copyright © 2026 Cultura Balderrama',
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
        // Merch todavia no se publica: faltan las fotos y los textos finales.
        // Sacar el flag `hidden` (o ponerlo en false) cuando este listo.
        { href: 'merch.html', label: 'Merch', hidden: true },
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
      tiktok: 'TikTok',
      stayInLoopTitle: 'ANOTATE PARA ENTERARTE DE NUESTROS EVENTOS',
      emailPlaceholder: 'Ingresá tu email',
      submitLabel: 'Enviar',
      subscribeSending: 'Enviado...',
      subscribeSuccess: 'Gracias! Te mandamos un mail cuando tengamos nuevas charlas o novedades.',
      subscribeError: 'Ingresá un email válido.',
      subscribeFailed: 'No se pudo enviar el mensaje. Intentá de nuevo.'
    },

    pages: {
      home: {
        title: 'Cultura Balderrama',
        heroTitle: 'BALDERRAMA',
        aboutTitle: 'Nosotros',
        // Los spans .highlight son las frases que van en amarillo.
        aboutText: 'La <span class="highlight">cultura es política</span>. Bajo esta idea (tan simple como compleja y desafiante) armamos este espacio que busca generar <span class="highlight">encuentros en los que se debata y se propague el arte y nuestra cultura nacional</span>. Creemos en la discusión política dentro del campo artístico para defender el rol de la cultura como elemento de transformación y de constitución de nuestra identidad.'
      },

      nosotros: {
        title: 'Sobre nosotros — Balderrama',
        heading: 'Nosotros',
        blocks: [
          {
            num: '01',
            heading: 'Nosotros',
            content: [
              'La <span class="highlight">cultura es política</span>. Bajo esta idea, tan simple como compleja y desafiante, armamos Balderrama: un espacio pensado para generar <span class="highlight">encuentros en los que se debata y se propague el arte y nuestra cultura nacional</span>.',
              'Creemos en la discusión política dentro del campo artístico para defender el rol de la cultura como elemento de transformación y de constitución de nuestra identidad.',
              'Por eso, armamos encuentros donde invitamos a diferentes artistas a conversar sobre el escenario cultural de nuestro país. Además, abrimos el espacio a proyecciones y música en vivo, para seguir difundiendo y conservando nuestro arte nacional.',
              '<span class="highlight">Balderrama nace para que discutamos. Creemos que es importante entender de dónde venimos para pensar hacia dónde vamos</span>.'
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
          tiktok: 'TikTok',
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
            lede: 'En nuestro primer encuentro del 2026 invitamos a Lucrecia Martel para que nos comparta su mirada sobre cómo se fue modificando el panorama cultural a lo largo de los últimos años.',
            body: 'Lucrecia nos abrió camino a pensar no solo cómo fueron las cosas, sino cómo modificarlas para que se conviertan en eso que deseamos.',
            quote: 'Pueden ver la charla completa y algunos recortes acá:',
            watchLabel: 'Ver la charla',
            clipsLabel: 'Ver clips del evento'
          },
          {
            number: '03',
            kicker: 'Charla / Música',
            title: 'Marttein',
            meta: 'Buenos Aires — 2026',
            lede: 'En agosto nos acompañó Marttein, con quién conversamos sobre el panorama de la juventud y la música actualmente.',
            body: 'Marttein nos resaltó la importancia de que se brinden herramientas para formarse en lo que cada uno desea, así después se desarrolla y contribuye a la construcción de una identidad colectiva.',
            quote: 'Pueden ver la charla completa y algunos recortes acá:',
            watchLabel: 'Ver la charla',
            clipsLabel: 'Ver clips del evento'
          }
        ]
      },

      merch: {
        title: 'Merch — Balderrama',
        heading: 'Merch',
        items: [
          { title: 'Remera — Logo negro' },
          { title: 'Remera — Logo celeste' },
          { title: 'Buzo — Logo largo' },
          { title: 'Tote — Logo largo' }
        ],
        // Las secciones son las que lee merch.html. Cada bloque es una
        // slide con su texto a la izquierda y la galeria a la derecha.
        sections: [
          {
            kicker: 'Merch / Remeras',
            meta: 'Colección 2026',
            title: 'Remeras Balderrama',
            content: [
              'Remeras con el logo de Balderrama en distintas variantes: logo negro, logo celeste y logo largo en negro o en celeste.',
              '<em>Próximamente vas a poder comprarlas acá.</em>'
            ]
          }
        ]
      }
    }
  };
})();
(function () {
  'use strict';

  window.TEXTS = {
    shared: {
      projectName: 'Balderrama',
      slogan: 'Dónde iremos a parar',
      location: 'Buenos Aires, Argentina',
      email: 'info@estudio.com',
      mailtoEmail: 'mailto:info@estudio.com',
      instagramHandle: '@culturabalderrama',
      instagramUrl: 'https://www.instagram.com/culturabalderrama/',
      copyright: 'Copyright © 2026 Dónde iremos a parar',
      upcoming: 'Próximamente — Buenos Aires',
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
        { href: 'eventos-proximos.html', label: 'Eventos próximos' },
        { href: 'eventos-pasados.html', label: 'Eventos pasados' },
        { href: 'merch.html', label: 'Merch' },
        // { href: 'contenido.html', label: 'Contenido' },
        { href: 'nosotros.html', label: 'Sobre nosotros' },
        { href: 'contacto.html', label: 'Contacto' }
      ]
    },

    footer: {
      culturaTitle: 'CULTURA Y POLÍTICA',
      explorarTitle: 'EXPLORAR',
      seguinosTitle: 'SEGUINOS',
      instagram: 'Instagram',
      vimeo: 'Vimeo'
    },

    pages: {
      home: {
        title: 'Cultura Balderrama',
        heroTitle: 'BALDERRAMA',
        aboutTitle: 'Nosotros',
        aboutText: 'La cultura es política. Bajo esta idea (tan simple como compleja y desafiante) armamos este espacio que busca generar encuentros en los que se debata y se propague el arte y nuestra cultura nacional. Creemos en la discusión política dentro del campo artístico para defender el rol de la cultura como elemento de transformación y de constitución de nuestra identidad.'
      },

      nosotros: {
        title: 'Sobre nosotros — Balderrama',
        heading: 'Nosotros',
        blocks: [
          {
            num: '01',
            heading: 'Por qué Balderrama',
            content: [
              'Balderrama es una histórica Peña fundada en 1953, en Salta, por los hermanos Juan, Daria y Celestino Balderrama. Punto de encuentro de músicos y poetas, fue conocida como "Templo mayor del folclore".',
              'Conocimos la peña por la zamba "Balderrama" y su estribillo que expresa el miedo a perder ese espacio cultural.',
              '"Lucero solito, brote del alba ¿dónde iremos a parar si se apaga Balderrama?"',
              'En honor al encuentro, a la cultura, a quienes crearon esos espacios (como la familia Balderrama) y en tiempos donde el arte y lo colectivo esta en juego, decidimos nombrarnos de ésta forma.'
            ]
          },
          {
            num: '02',
            heading: 'Balderrama',
            content: [
              'La cultura es política. Bajo esta idea (tan simple como compleja y desafiante) armamos este espacio que busca <span class="highlight">generar encuentros</span> en los que se debata y se propague el arte y nuestra cultura nacional. Creemos en la discusión política dentro del campo artístico para defender el rol de la cultura como elemento de transformación y de constitución de nuestra identidad.'
            ]
          },
          {
            num: '03',
            heading: '¿Qué hacemos?',
            content: [
              'Balderrama propone <span class="highlight">acercarnos a discutir cultura y política</span> en clave. Conversaciones con artistas, Proyecciones, Música en vivo. Debatir de dónde venimos y hacia dónde vamos. Difundir y conservar el arte nacional.'
            ]
          }
        ]
      },

      contacto: {
        title: 'Contacto — Balderrama',
        heading: 'Contacto'
      },

      contenido: {
        title: 'Contenido — Balderrama',
        heading: 'Contenido',
        description: 'Producción y realización audiovisual. Una mirada plástica y sensible sobre lo que creamos.',
        items: [
          { title: 'Lucrecia Martel', sub: 'Serie — 2026' },
          { title: 'Lucrecia Martel', sub: 'Detrás de escena — 2026' },
          { title: 'Lucrecia Martel', sub: 'Producción — 2026' },
          { title: 'Marttein', sub: 'Serie — 2026' },
          { title: 'Marttein', sub: 'Detrás de escena — 2026' },
          { title: 'Marttein', sub: 'Producción — 2026' },
          { title: 'Marttein', sub: 'Producción — 2026' }
        ]
      },

      eventosPasados: {
        title: 'Eventos pasados — Balderrama',
        heading: 'Eventos pasados',
        description: 'Lo que ya vivimos. Registro de las fechas, funciones y presentaciones que nos dejaron marca.',
        closeLabel: 'CERRAR',
        items: [
          { title: 'Charla con Lucrecia Martel', sub: 'Buenos Aires — 2026' },
          { title: 'Charla con Marttein', sub: 'Buenos Aires — 2026' }
        ]
      },

      eventosProximos: {
        title: 'Eventos próximos — Balderrama',
        heading: 'Eventos próximos',
        description: 'La agenda que se viene. Proyecciones, presentaciones y fechas por confirmar.',
        items: [
          { title: 'Lucrecia Martel' },
          { title: 'Marttein' },
          { title: 'Nuevo ciclo' }
        ]
      },

      merch: {
        title: 'Merch — Balderrama',
        heading: 'Merch',
        description: 'La tienda. Piezas editadas en ediciones cortas y numeradas.',
        items: [
          { title: 'Remera — Logo negro' },
          { title: 'Remera — Logo celeste' },
          { title: 'Buzo — Logo largo' },
          { title: 'Tote — Logo largo' }
        ]
      }
    }
  };
})();
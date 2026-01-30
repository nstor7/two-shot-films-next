
const videoclip = {
    id: "videoclip",
    nombre: "Producción de Videos Musicales en Panamá",
    hero: "/images/Persiana_Americana_Thumnail.jpg",
    subtitulo: "Haz que tu música muestre tu escencia mediante una experiencia visual impactante",
    descripcion: "Tu canción merece más que una cámara fija. Creamos videoclips cinematográficos que amplifican el mensaje de tu música y elevan tu imagen como artista. No importa si eres una banda independiente o un solista emergente: cada proyecto recibe el mismo nivel de producción visual que fortalece tu identidad artística y te hace destacar en plataformas digitales. Tu música ya tiene calidad; nosotros nos aseguramos de que tu imagen también.",
    ventajas: [
      {
        numero: 1,
        titulo: "Estética cinematográfica al alcance de artistas independientes",
        descripcion: "No necesitas un presupuesto de disquera para tener un videoclip que se vea profesional. Aplicamos técnicas de iluminación, composición y color grading de alto nivel para que tu video compita visualmente con producciones de mayor presupuesto. ",
        imagen: "/images/Instinto_Thumnail.jpg",
        inspiracional:"Tu marca como artista se fortalece cuando tu contenido visual refleja la calidad de tu música."
      },
      {
        numero: 2,
        titulo: "Entendemos tu propuesta artística",
        descripcion: "Antes de grabar, escuchamos!! Analizamos tu música, tu estética y tu mensaje. No imponemos un estilo genérico; creamos un concepto visual que es auténtico a tu identidad como artista. ",
        imagen: "/images/Quizas_Thumnail.jpg",
        inspiracional: "Crea un  videoclip que se sienta genuino, no forzado, y que tu audiencia reconozca como tuyo."
      },
      {
        numero: 3,
        titulo: "Producción con tu presupuesto sin sacrificar calidad",
        descripcion: "Cada proyecto musical es diferente: algunas canciones piden locaciones múltiples, otras necesitan actores y algunas funcionan con minimalismo creativo. Nos adaptamos a tu presupuesto y visión sin comprometer la calidad cinematográfica.",
        imagen: "/images/En_Algun_Lugar_Thumnail.jpg",
        inspiracional: "Tomar decisiones creativas maximiza el impacto visual de tu arte dentro de tus posibilidades."
      }
    ],
    paquetes: [
      {
        id: "performance",
        nombre: "Performance",
        imagen: "/images/videoClipMedianera1.jpg",
        subtitulo: "Captura la energía pura de tu música",
        objetivos: [
          "Un videoclip visualmente potente centrado en tu presencia como artista",
          "Fortalecer tu imagen de marca musical",
          "Contenido perfecto para lanzamientos, redes y plataformas de streaming",
          "Video que funciona con presupuesto independiente"
        ],
        incluye: [
          "Video grabado en exterior del artista interpretando su canción",
          "3 piezas de Marketing para promocionar el lanzamiento",
          "1 día de rodaje",
          "2 rondas de revisiones",
          "Profesional pendiente a la imagen del artista y a los retoques necesarios",
          "Videos y fotos del detrás de cámara para postear en redes"
        ],
        noIncluye: [
          "Locaciones",
          "Extras (actores)",
          "Utilería o escenografía especializada",
          "Efectos visuales complejos",
          "Transporte entre locaciones",
          "Servicios de comida y cathering",
          "Maquillista",
          "Vestuarista y vestuario",
          "Pre-producción avanzada",
          "Equipo técnico adicional (drones, grúas, steadicam, luces, lentes, etc.)"
        ],
        precio: {
          minimo: 800,
          maximo: 4000,
          moneda: "USD",
          nota: "El precio final depende de la locación, número de integrantes, complejidad técnica y necesidades específicas del concepto"
        }
      },
      {
        id: "storyline",
        nombre: "Storyline",
        imagen: "/images/videoClipMedianera2.jpg",
        subtitulo: "Crea una historia que amplifique tu canción",
        objetivos: [
          "Un videoclip narrativo que conecta emocionalmente con tu audiencia",
          "Expandir el universo de tu canción más allá de la letra",
          "Contenido que genera conversación y shares",
          "Producción profesional que evidencia tu compromiso con tu arte"
        ],
        incluye: [
          "Videoclip narrativo completo de 3-4 minutos",
          "Desarrollo de concepto",
          "Mezcla de performance + historia narrativa",
          "1 actor o actriz",
          "1 locación",
          "Stylist básico para el artista y actores ",
          "1 día de rodaje",
          "Edición narrativa sincronizada con la música",
          "2 rondas de revisiones",
          "3 piezas de mercadeo para promocionar en redes",
          "Making of básico",
        ],
        noIncluye: [
          "Actores adicionales",
          "Extras",
          "Preproducción avanzada",
          "Locaciones adicionales",
          "Utilería especializada, vestuario de época, escenografía compleja",
          "Efectos visuales avanzados o CGI",
          "Equipo técnico adicional (drones, grúas, steadicam, luces, lentes, etc.)",
          "Maquillaje/vestuarista profesional"
        ],
        precio: {
          minimo: 1700,
          maximo: 8000,
          moneda: "USD",
          nota: "El precio varía significativamente según: número de actores, locaciones, complejidad narrativa, días de rodaje necesarios y nivel de producción requerido"
        }
      }
    ],
    proceso: [
      { paso: "Planeación", descripcion: "Definimos el concepto contigo." },
      { paso: "Grabación", descripcion: "Filmamos en locaciones seleccionadas." },
      { paso: "Entrega", descripcion: "Editamos y entregamos tu video." },
    ],
    meta: {
      title: "Producción de Videos Musicales en Panamá",
      metaDescription: "Creación de videos Musicales con calidad cinematográfica. Nuestra misión es resaltar tu imágen, valores y visión como artista, usando el video para contar historias impactantes o creando experiencias que enaltescan tus canciones",
    },
    Categorías: [ 'artistas'],
    Genero: 'Video Musical'
  }

  export default videoclip
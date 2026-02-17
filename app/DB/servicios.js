var custom = {nombre: 'custom', precio: 'por definir', detalles:['Crearemos un servicio que se ajuste a tus necesidades.'] }
import cobertura from './servicios/cobertura'
import corporativo from  './servicios/corporativo'
import videoclip from './servicios/videoclip'
import redes from './servicios/redes'
export const Servicios = [
  videoclip,
  cobertura,
  // corporativo,
  // redes,
  //comercial,
  //podcast
];

export const serviciosCategorias = [
  {
    id: 'empresas',
    titulo: 'Servicios Audiovisuales Para Empresas',
    subtitulo: 'Eleva tu marca con un video cinematográfico que conecte con tus clientes'
  },
  {
    id: 'artistas',
    titulo: 'Servicios Audiovisuales Para Artistas',
    subtitulo: 'Conecta con tus fanáticos a traves de videos que expresen tu visión artística'
  },
  {
    id: 'fundaciones',
    titulo: 'Servicios Audiovisuales para Fundaciones',
    subtitulo: 'Muestra la visión de tu proyecto e impacta con un video cinematográfico'
  }
]
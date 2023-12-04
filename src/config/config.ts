import { Orientation, Process, Service } from "@/datamodels/models";

export const CONTENT = {
  section_1 : {
    title: 'Juntos en la transformación digital',
    description: 'Te ayudamos a darle despegue a tus ideas. En merliteam, transformamos tu visión en soluciones digitales de calidad. Con pasión, tecnología y conexiones sólidas, impulsamos tus proyectos hacia el éxito. Descubre cómo podemos hacer que tus ideas despeguen hoy mismo.'
  },
  section_2 : {
    title: 'Nuestro proceso en acción',
    description: 'Desde la idea hasta el despegue, descubre cómo transformamos tus visiones en éxitos tangibles, paso a paso. Cada fase de nuestro proceso está cuidadosamente diseñada para garantizar que tu proyecto avance sin contratiempos y alcance nuevas alturas.'
  },
  section_3 : {
    title: 'Queremos ayudarte a darle despegue a tus ideas',
    description: 'Nuestro equipo está listo para escuchar tus proyectos y responder a tus preguntas. Contáctanos y empecemos juntos este emocionante viaje.'
  },
}

export const FOOTER_CONTENT = {
  contact: {
    t1: 'Datos de registro. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  copyright: {
    t1: '© 2023 merliteam – Todos los derechos reservados'
  }
}

export const processes : Process[] = [
  {
    number: '01',
    title: '01. Discovery',
    description: 'En esta fase inicial, trabajaremos estrechamente contigo para comprender tus necesidades y objetivos. Exploraremos tus ideas, desafíos y visiones para el producto que deseas crear. Esta etapa es esencial para establecer una base sólida y asegurarnos de que estemos alineados con tus expectativas desde el principio.'
  },
  {
    number: '02',
    title: '02. Research',
    description: 'Luego, nos sumergiremos en un proceso exhaustivo de investigación. Analizaremos el mercado, la competencia y las tendencias relevantes para tu producto. Esta investigación nos proporcionará información valiosa que guiará nuestras decisiones en las etapas posteriores del proyecto.'
  },
  {
    number: '03',
    title: '03. Diseño',
    description: 'Con una comprensión sólida de tus necesidades y los datos de investigación en mano, nuestro equipo de diseñadores comenzará a dar forma a tu producto. Crearemos bocetos, prototipos y diseños visuales que reflejen tus ideas y proporcionen una experiencia de usuario excepcional.'
  },
  {
    number: '04',
    title: '04. Ejecución',
    description: 'Después de validar el diseño, nos preparamos para enfrentar cualquier desafío en la siguiente fase: el desarrollo. En merliteam, convertimos tus ideas en realidad, asegurando que tu producto supere tus expectativas y alcance el éxito deseado. ¡Estamos emocionados de que tu idea despegue en este apasionante viaje!'
  },
  {
    number: '05',
    title: '05. Desarrollo',
    description: 'Aquí es donde realmente cobrará vida tu producto. Los desarrolladores trabajarán en la construcción de todas las características y funcionalidades, asegurándose de que todo funcione sin problemas y esté listo para su implementación.'
  },
  {
    number: '06',
    title: '06. Testeo',
    description: 'Antes de lanzar el producto al público, realizaremos un riguroso proceso de pruebas. Identificaremos y resolveremos cualquier problema o error, asegurándonos de que el producto esté en su mejor forma. El testeo garantiza la calidad y la funcionalidad antes de su lanzamiento.'
  },
]

export const services : Service[] = [
  {
    number: '01',
    title: 'cotizador',
    description: 'Contamos con un equipo experimentado en la gestión de proyectos clásicos y ágiles, certificados en PMP y Scrum, no tenemos barreras para gestionar tus proyectos, actualmente colaboramos y sumamos valor en varios países de LATAM.',
    image: '/radiomitre.png',
    orientation: Orientation.right,
    link: 'https://radiomitre.cienradios.com/'
  },
  {
    number: '02',
    title: 'power bi',
    description: 'Actualmente tenemos un equipo dedicado a ayudar empresas a tomar decisiones a través de tableros de power BI, nos conectamos a tus bases de datos y te ayudamos a interpretar tus KPIs de manera eficiente y con una interfaz super sencilla.',
    image: '/stockshipping.png',
    orientation: Orientation.left,
    link: 'https://stockshipping.com/'
  },
  {
    number: '03',
    title: 'diseño de UX/UI',
    description: 'Nuestro equipo cuenta con expertos en interfaz y experiencia de usuario que te van a ayudar a evolucionar tus productos, tenemos una visión moderna y fresca de los estándares mundiales para que cuentes con soluciones de vanguardia.',
    image: '/cotizador.png',
    orientation: Orientation.right,
    link: 'https://cotizador-online.vercel.app/'
  },
  {
    number: '04',
    title: 'imperiosanto',
    description: 'Contamos con una factory de desarrollo que es capaz de hacer realmente lo que necesites en tu empresa, hemos desarrollado una amplia variedad de productos personalizados, desde extensiones en tu navegador web que disparan acciones, hasta complejos sitios integrados con APIs.',
    image: '/imperiosanto.png',
    orientation: Orientation.left,
    link: 'https://imperiosanto.com/'
  },
]
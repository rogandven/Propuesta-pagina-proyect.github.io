export const metadatosPagina = {
  title: 'UBBike | Propuesta de Proyecto',
  description:
    'Aplicacion multiplataforma para control y trazabilidad en bicicleteros de la Universidad del Bio-Bio.',
};

export const enlacesNavegacion = [
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#problema', label: 'Problema' },
  { href: '#proceso-actual', label: 'Proceso actual' },
  { href: '#solucion', label: 'Solucion' },
  { href: '#registro-digital', label: 'Registro digital' },
  { href: '#datos', label: 'Datos y control' },
  { href: '#modulos', label: 'Modulos' },
  { href: '#actores', label: 'Actores' },
  { href: '#reglas', label: 'Reglas' },
  { href: '#stack', label: 'Stack' },
  { href: '#comparativa', label: 'Comparativa' },
  { href: '#justificacion', label: 'Justificacion' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#objetivo-software', label: 'Objetivo software' },
  { href: '#metodologia', label: 'Metodologia' },
  { href: '#subactividades', label: 'Subactividades' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#programacion', label: 'Programacion' },
  { href: '#impacto', label: 'Impacto' },
  { href: '#riesgo', label: 'Riesgo' },
  { href: '#referencias', label: 'Referencias' },
];

export const indicadoresHero = [
  { etiqueta: 'Modalidad', valor: 'Desarrollo de Software' },
  { etiqueta: 'Enfoque', valor: 'Control + trazabilidad con QR' },
  { etiqueta: 'Contexto', valor: 'Bicicleteros UBB' },
];

export const identidadProyecto = {
  title:
    'Aplicacion movil multiplataforma de control y trazabilidad para los bicicleteros de la Universidad del Bio-Bio.',
  modality: 'Desarrollo de Software',
};

export const contextoInstitucional = [
  {
    title: 'Institucion',
    detail:
      'La Universidad del Bio-Bio dispone de infraestructura de estacionamientos y bicicleteros para estudiantes, docentes y funcionarios.',
  },
  {
    title: 'Infraestructura actual',
    detail:
      'La propuesta describe dos bicicleteros operativos, cerrados con estructura tipo jaula, rejas y techo.',
  },
  {
    title: 'Area del proyecto',
    detail:
      'El foco es el proceso de registro y control de ingreso/retiro de bicicletas, incluyendo usuarios y personal de seguridad.',
  },
];

export const puntosCriticos = [
  'El registro manual en papel genera lentitud en horarios de alta demanda.',
  'El proceso actual esta expuesto a error humano en ingreso y salida.',
  'No existe trazabilidad centralizada en tiempo real del estado del bicicletero.',
  'La operacion depende de la presencia del guardia y del traspaso informal de informacion.',
];

export const procesoActual = [
  'Usuario llega al bicicletero con su bicicleta.',
  'Solicita acceso al guardia asignado.',
  'El guardia registra manualmente nombre, RUT, carrera/cargo y hora de ingreso.',
  'Se solicita asegurar la bicicleta con cadena/candado o U-Lock.',
  'Si no existe candado/U-Lock, el usuario deja la bicicleta bajo su responsabilidad.',
  'Para retirar, el usuario vuelve al guardia para registrar hora de salida.',
  'Si no hay guardia en el sector, se debe llamar a central para solicitar apoyo.',
  'El control opera por turnos diurnos y vespertinos durante todo el dia.',
];

export const flujoPropuesto = [
  'Registro previo del usuario con sus datos institucionales.',
  'Registro de una o mas bicicletas asociadas al usuario.',
  'Generacion de codigo QR para ingreso y retiro.',
  'Validación por guardia mediante escaneo QR y verificacion visual.',
  'Registro digital de fecha, hora, usuario, bicicleta, guardia y observaciones.',
  'Consulta administrativa de historial, incidencias, reportes y demanda.',
];

export const textoPropuestaSolucion = [
  'Se propone el desarrollo de una aplicacion movil de control de acceso y retiro de bicicletas para los bicicleteros de la Universidad del Bio-Bio. Esta aplicacion permitira reemplazar el registro manual en papel de este proceso por un flujo digital, rapido, centralizado y con alta trazabilidad.',
  'Esta aplicacion movil sera orientada a operar en formato multiplataforma, con el fin de que esta solucion tecnologica pueda utilizarse tanto desde una aplicacion para usuarios Android y iOS, como tambien desde un navegador web. Esto permitira su uso en distintos dispositivos moviles y computadores.',
];

export const camposRegistroDigital = [
  'Fecha',
  'Hora',
  'Usuario',
  'Bicicleta',
  'Guardia responsable',
  'Bicicletero',
  'Observaciones (si corresponde)',
  'Condicion de seguridad de la bicicleta',
];

export const camposRegistroUsuario = [
  'RUT',
  'Nombre',
  'Apellidos',
  'Carrera o cargo',
  'Correo electronico',
];

export const camposRegistroBicicleta = [
  'Tipo',
  'Color',
  'Marca',
  'Modelo (opcional)',
  'Caracteristicas distintivas (opcional)',
  'Fotografia',
];

export const opcionesEstadoBicicleta = [
  'Se encuentra dentro del bicicletero',
  'Fue retirada',
  'Presenta observaciones',
  'Fue ingresada sin proteccion antirrobo',
];

export const consultasAdministrativas = [
  'Historial de movimientos',
  'Bicicletas actualmente dentro del bicicletero',
  'Incidencias',
  'Reportes de uso',
  'Horarios de mayor demanda',
  'Trazabilidad por guardia',
];

export const modulosPrincipales = [
  'Registro previo de usuario',
  'Registro de bicicletas',
  'Generacion de codigo QR',
  'Validación asistida por guardia',
  'Registro digital de ingreso y salida',
  'Control de estado de cada bicicletero',
  'Operacion manual de respaldo',
  'Gestion administrativa y reportes',
  'Atencion de situaciones excepcionales',
];

export const actoresSistema = [
  {
    role: 'Estudiantes y funcionarios',
    action: 'Registran datos y bicicletas, y presentan QR para operar ingreso/retiro.',
    value: 'Proceso mas rapido y con menor repeticion de datos.',
  },
  {
    role: 'Guardias de bicicletero',
    action: 'Escanean QR, validan correspondencia usuario-bicicleta y registran observaciones.',
    value: 'Mayor control operativo con apoyo digital.',
  },
  {
    role: 'Administracion',
    action: 'Consulta movimientos, incidencias, trazabilidad y horarios de demanda.',
    value: 'Mejor seguimiento para gestion del servicio.',
  },
];

export const reglasNegocio = [
  'El usuario debe registrarse una sola vez y asociar su(s) bicicleta(s).',
  'Ingreso y retiro se validan con QR y verificacion del guardia.',
  'Si no hay celular, bateria o QR, se usa respaldo manual por busqueda.',
  'Cada movimiento registra usuario, bicicleta, guardia, fecha, hora y bicicletero.',
  'Se registra condicion de seguridad de la bicicleta al ingreso.',
];

export const stackPropuesto = [
  {
    block: 'Tecnologia base indicada en la propuesta',
    option: 'Kotlin Multiplatform en primera instancia',
    reason:
      'La propuesta establece KMP como alternativa inicial, con posibilidad de ajustar stack segun requerimientos y complejidad del analisis.',
  },
];

export const tecnologiasEvaluadas = [
  {
    nombre: 'Kotlin Multiplatform',
    logo: '/logos/kotlin.svg',
    descripcion: 'Base inicial planteada en la propuesta.',
  },
  {
    nombre: 'Flutter',
    logo: '/logos/flutter.svg',
    descripcion: 'Alternativa para UI multiplataforma segun analisis.',
  },
  {
    nombre: 'Dart',
    logo: '/logos/dart.svg',
    descripcion: 'Lenguaje asociado a Flutter para desarrollo movil.',
  },
  {
    nombre: 'React Native',
    logo: '/logos/react.svg',
    descripcion: 'Opcion evaluable para clientes moviles.',
  },
  {
    nombre: 'Expo',
    logo: '/logos/expo.svg',
    descripcion: 'Flujo de desarrollo sobre ecosistema React Native.',
  },
  {
    nombre: 'JavaScript',
    logo: '/logos/javascript.svg',
    descripcion: 'Base del ecosistema web y alternativas de stack.',
  },
];

export const comparativaSoluciones = [
  {
    name: 'UdeCMovil (Universidad de Concepcion)',
    model: 'Enrolamiento institucional + QR temporal para acceso.',
    userCost: 'Sin costo para comunidad interna.',
    institutionalCost: 'No informado publicamente en las fuentes revisadas.',
    rating: 'App Store: 2.3 de 5 (85 calificaciones).',
    fit: 'Integra bicicletero como parte de app institucional amplia.',
  },
  {
    name: 'UH Go + Bikeep (University of Houston)',
    model: 'App institucional integrada a racks inteligentes.',
    userCost: 'Sin costo para estudiantes, faculty y staff.',
    institutionalCost: 'No informado publicamente en las fuentes revisadas.',
    rating: 'App Store: 4.3 de 5 (146 valoraciones).',
    fit: 'Depende de infraestructura inteligente dedicada.',
  },
  {
    name: 'UC Davis Bicycle Program',
    model: 'Bike lockers y bike cages con modalidad de arriendo.',
    userCost: 'Servicio tarifado segun modalidad.',
    institutionalCost: 'No informado publicamente en las fuentes revisadas.',
    rating: 'No se reporta app especifica con valoracion publica comparable.',
    fit: 'Enfoque de almacenamiento con cobro.',
  },
  {
    name: 'Bikeep plataforma comercial',
    model: 'Solucion comercial hardware + software para operadores.',
    userCost: 'Variable segun operador y plan.',
    institutionalCost: 'Tarifa institucional variable segun operador y configuracion.',
    rating: 'App Store: 3.8 de 5 (17 valoraciones).',
    fit: 'Modelo comercial, no especifico al flujo UBB.',
  },
];

export const puntosJustificacion = [
  {
    title: 'Problema de origen',
    detail:
      'El proceso actual opera en papel y depende completamente del guardia, con demoras, repeticion de datos y exposicion a errores en ingreso y retiro.',
  },
  {
    title: 'Impacto en usuarios',
    detail:
      'Estudiantes y funcionarios repiten el mismo procedimiento en cada acceso, afectando tiempos y experiencia de uso.',
  },
  {
    title: 'Impacto operativo',
    detail:
      'No existe registro digital persistente ni consulta en tiempo real para cambios de turno, incidentes o verificacion de estado.',
  },
  {
    title: 'Diferencia de la propuesta UBB',
    detail:
      'La solucion se ajusta al flujo real del bicicletero UBB, reutiliza infraestructura existente y mantiene validacion asistida por guardias.',
  },
  {
    title: 'Sostenibilidad y gradualidad',
    detail:
      'El documento destaca que la operacion requiere sostenibilidad y propone adopcion gradual para evitar alta inversion inicial en infraestructura inteligente.',
  },
  {
    title: 'Resultado esperado',
    detail:
      'Reducir tiempos de atencion, disminuir errores, automatizar tareas repetitivas y mejorar trazabilidad del servicio.',
  },
];

export const pasosMetodologia = [
  'Analisis del modulo a desarrollar',
  'Diseño de la solucion',
  'Implementacion del modulo',
  'Pruebas funcionales',
  'Evaluacion y ajustes',
  'Integracion con el sistema existente',
];

export const razonesMetodologia = [
  'Permite construir el sistema por incrementos funcionales y validables.',
  'Facilita detectar errores tempranamente y ajustar durante el desarrollo.',
  'Se adapta mejor que cascada a cambios de requerimientos de multiples actores.',
  'Reduce riesgo tecnico al integrar modulos de forma progresiva.',
  'Entrega versiones parciales operativas en cada iteracion.',
  'Favorece mejora continua con retroalimentacion constante.',
];

export const objetivoSoftware =
  'El software permitira a la Universidad del Bio-Bio mejorar la gestion del servicio de bicicleteros, reducir tiempos de atencion, disminuir errores de registro, automatizar el proceso y aumentar la trazabilidad del ingreso y retiro de bicicletas.';

export const actividadesProyecto = [
  {
    name: 'Actividad 1',
    title: 'Analisis del proceso actual',
    detail: 'Revision del flujo, actores, problemas y oportunidades de mejora.',
  },
  {
    name: 'Actividad 2',
    title: 'Revision de soluciones similares',
    detail: 'Analisis comparativo de soluciones universitarias y externas.',
  },
  {
    name: 'Actividad 3',
    title: 'Definicion de requisitos',
    detail: 'Requisitos funcionales, no funcionales y reglas de negocio.',
  },
  {
    name: 'Actividad 4',
    title: 'Desarrollo del MVP',
    detail: 'Registro de usuarios, bicicletas, QR y control basico de ingreso/retiro.',
  },
  {
    name: 'Actividad 5',
    title: 'Integracion y evaluacion final',
    detail: 'Historial, incidencias, reportes, pruebas integrales e informe final.',
  },
];

export const desgloseActividades = [
  {
    title: 'Actividad 1 | Analisis del proceso actual',
    tasks: [
      '1.1 Revision del proceso actual de ingreso y retiro de bicicletas.',
      '1.2 Identificacion de actores involucrados en el sistema actual.',
      '1.3 Recopilacion de problemas, restricciones y debilidades del proceso manual.',
      '1.4 Analisis de oportunidades de mejora en el control y registro de bicicletas.',
    ],
  },
  {
    title: 'Actividad 2 | Revision de soluciones similares',
    tasks: [
      '2.1 Revision de aplicaciones moviles y web similares en Google y Store.',
      '2.2 Revision de soluciones universitarias chilenas y extranjeras relacionadas con bicicleteros.',
      '2.3 Revision de plataformas externas orientadas a estacionamiento seguro de bicicletas.',
      '2.4 Comparacion de funciones, caracteristicas, costos y valoracion de usuarios.',
      '2.5 Identificacion de diferencias entre soluciones existentes y la propuesta del proyecto.',
    ],
  },
  {
    title: 'Actividad 3 | Definicion de requisitos del sistema',
    tasks: [
      '3.1 Recopilacion de necesidades de usuarios clave.',
      '3.2 Identificacion de requisitos funcionales del sistema.',
      '3.3 Identificacion de requisitos no funcionales del sistema.',
      '3.4 Definicion de reglas de negocio para ingreso, permanencia y retiro de bicicletas.',
      '3.5 Definicion de propuesta funcional preliminar del sistema.',
      '3.6 Validación de la propuesta funcional.',
    ],
  },
  {
    title: 'Actividad 4 | Desarrollo del producto minimo viable',
    tasks: [
      '4.1 Diseño de interfaces y flujo principal de uso.',
      '4.2 Diseño de arquitectura preliminar del sistema.',
      '4.3 Modelado de datos de usuarios, bicicletas e ingresos y retiros.',
      '4.4 Implementacion del modulo de registro de usuarios.',
      '4.5 Implementacion del modulo de registro de bicicletas.',
      '4.6 Implementacion del modulo de generacion y validacion de QR.',
      '4.7 Implementacion del control basico de ingreso y retiro.',
      '4.8 Pruebas funcionales del producto minimo viable.',
      '4.9 Ajustes y correcciones del producto minimo viable.',
    ],
  },
  {
    title: 'Actividad 5 | Integracion y evaluacion final del sistema',
    tasks: [
      '5.1 Diseño del modulo administrativo web.',
      '5.2 Implementacion del historial de movimientos.',
      '5.3 Implementacion del registro de incidencias.',
      '5.4 Implementacion de funcionalidades de trazabilidad y reportes.',
      '5.5 Pruebas integrales del sistema.',
      '5.6 Ajustes finales de integracion.',
      '5.7 Redaccion del informe final del proyecto.',
      '5.8 Preparacion de la presentacion y defensa.',
    ],
  },
];

export const fasesRuta = [
  {
    period: 'Abril - Julio 2026',
    focus: 'Definicion de requisitos, Diseño UX y desarrollo del MVP.',
  },
  {
    period: 'Agosto - Octubre 2026',
    focus: 'Integracion de historial, incidencias, trazabilidad y reportes.',
  },
  {
    period: 'Noviembre - Diciembre 2026',
    focus: 'Pruebas finales, ajustes de integracion, informe y defensa.',
  },
];

export const detalleProgramacion = [
  { stage: 'Anteproyecto', activity: 'Act No 1.1', start: '24-03-2026', end: '24-03-2026', days: 1 },
  { stage: 'Anteproyecto', activity: 'Act No 1.2', start: '24-03-2026', end: '24-03-2026', days: 1 },
  { stage: 'Anteproyecto', activity: 'Act No 1.3', start: '25-03-2026', end: '25-03-2026', days: 1 },
  { stage: 'Anteproyecto', activity: 'Act No 1.4', start: '25-03-2026', end: '25-03-2026', days: 1 },
  { stage: 'Anteproyecto', activity: 'Act No 2.1', start: '26-03-2026', end: '26-03-2026', days: 1 },
  { stage: 'Anteproyecto', activity: 'Act No 2.2', start: '26-03-2026', end: '26-03-2026', days: 1 },
  { stage: 'Anteproyecto', activity: 'Act No 2.3', start: '26-03-2026', end: '26-03-2026', days: 1 },
  { stage: 'Anteproyecto', activity: 'Act No 2.4', start: '27-03-2026', end: '27-03-2026', days: 1 },
  { stage: 'Anteproyecto', activity: 'Act No 2.5', start: '27-03-2026', end: '27-03-2026', days: 1 },
  { stage: 'Anteproyecto', activity: 'Act No 3.1', start: '30-03-2026', end: '31-03-2026', days: 2 },
  { stage: 'Anteproyecto', activity: 'Act No 3.2', start: '01-04-2026', end: '04-04-2026', days: 4 },
  { stage: 'Anteproyecto', activity: 'Act No 3.3', start: '06-04-2026', end: '08-04-2026', days: 3 },
  { stage: 'Anteproyecto', activity: 'Act No 3.4', start: '09-04-2026', end: '13-04-2026', days: 5 },
  { stage: 'Anteproyecto', activity: 'Act No 3.5', start: '14-04-2026', end: '15-04-2026', days: 2 },
  { stage: 'Anteproyecto', activity: 'Act No 3.6', start: '16-04-2026', end: '17-04-2026', days: 2 },
  { stage: 'Anteproyecto', activity: 'Act No 4.1', start: '20-04-2026', end: '26-04-2026', days: 7 },
  { stage: 'Anteproyecto', activity: 'Act No 4.2', start: '27-04-2026', end: '03-05-2026', days: 7 },
  { stage: 'Anteproyecto', activity: 'Act No 4.3', start: '04-05-2026', end: '10-05-2026', days: 7 },
  { stage: 'Anteproyecto', activity: 'Act No 4.4', start: '11-05-2026', end: '24-05-2026', days: 14 },
  { stage: 'Anteproyecto', activity: 'Act No 4.5', start: '25-05-2026', end: '07-06-2026', days: 14 },
  { stage: 'Anteproyecto', activity: 'Act No 4.6', start: '08-06-2026', end: '21-06-2026', days: 14 },
  { stage: 'Anteproyecto', activity: 'Act No 4.7', start: '22-06-2026', end: '05-07-2026', days: 14 },
  { stage: 'Anteproyecto', activity: 'Act No 4.8', start: '06-07-2026', end: '10-07-2026', days: 5 },
  { stage: 'Anteproyecto', activity: 'Act No 4.9', start: '11-07-2026', end: '15-07-2026', days: 5 },
  { stage: 'PT', activity: 'Act No 5.1', start: '03-08-2026', end: '14-08-2026', days: 12 },
  { stage: 'PT', activity: 'Act No 5.2', start: '17-08-2026', end: '31-08-2026', days: 15 },
  { stage: 'PT', activity: 'Act No 5.3', start: '01-09-2026', end: '11-09-2026', days: 11 },
  { stage: 'PT', activity: 'Act No 5.4', start: '14-09-2026', end: '02-10-2026', days: 19 },
  { stage: 'PT', activity: 'Act No 5.5', start: '05-10-2026', end: '16-10-2026', days: 12 },
  { stage: 'PT', activity: 'Act No 5.6', start: '19-10-2026', end: '30-10-2026', days: 12 },
  { stage: 'PT', activity: 'Act No 5.7', start: '02-11-2026', end: '20-11-2026', days: 19 },
  { stage: 'PT', activity: 'Act No 5.8', start: '23-11-2026', end: '05-12-2026', days: 13 },
];

export const impactoEsperado = [
  {
    metric: 'Rapidez operativa',
    detail: 'Disminucion de tiempos de atencion con identificacion QR y datos precargados.',
  },
  {
    metric: 'Menor error humano',
    detail: 'Reemplazo del formulario manual por validaciones y estados definidos.',
  },
  {
    metric: 'Mayor trazabilidad',
    detail: 'Registro por usuario, bicicleta, guardia, fecha y hora.',
  },
  {
    metric: 'Continuidad del servicio',
    detail: 'Estado del bicicletero consultable en cualquier momento.',
  },
];

export const caracterizacionProyecto = [
  {
    item: 'Experiencia en el problema',
    level: 'Alta',
    description: 'La necesidad es conocida y observable en el contexto universitario.',
  },
  {
    item: 'Tamano del problema',
    level: 'Medio',
    description: 'Involucra varios actores y reglas, acotado al servicio de bicicleteros.',
  },
  {
    item: 'Complejidad del problema',
    level: 'Media',
    description: 'Flujo entendible, con escenarios y validaciones que deben considerarse.',
  },
  {
    item: 'Tamano del software',
    level: 'Medio',
    description: 'Incluye aplicacion, control QR, historial, incidencias y administracion.',
  },
  {
    item: 'Complejidad del software',
    level: 'Alta',
    description: 'Requiere integrar modulos y mantener consistencia en trazabilidad.',
  },
  {
    item: 'Experiencia en el software',
    level: 'Baja/Media',
    description: 'Se requiere aprendizaje progresivo en componentes nuevos de la solucion.',
  },
  {
    item: 'Modularidad',
    level: 'Alta',
    description: 'El sistema puede dividirse en modulos funcionales relativamente independientes.',
  },
];

export const referenciasProyecto = [
  {
    label: 'Universidad de Concepcion | Enrolamiento para Bicicleteros',
    href: 'https://vraeaweb.udec.cl/servicios/enrolamiento-para-bicicleteros/',
  },
  {
    label: 'Noticias UdeC | Bicicleteros cerrados',
    href: 'https://noticias.udec.cl/udec-inaugura-bicicleteros-cerrados-y-con-altos-estandares-de-seguridad-en-dos-puntos-del-campus-concepcion/',
  },
  {
    label: 'Noticias UdeC | Ahora es con eTudec',
    href: 'https://noticias.udec.cl/ahora-es-con-etudec-comienza-marcha-blanca-de-nuevo-sistema-de-acceso-a-biblioteca-central/',
  },
  {
    label: 'Apple App Store | UdeCMovil',
    href: 'https://apps.apple.com/cl/app/udecm%C3%B3vil/id6670761228',
  },
  {
    label: 'University of Houston | Bikeep CougarSAFE',
    href: 'https://www.uh.edu/cougarsafe/bikeep/index.php',
  },
  {
    label: 'Apple App Store | UH Go',
    href: 'https://apps.apple.com/us/app/uh-go/id1350490089',
  },
  {
    label: 'UC Davis | Bicycle Program',
    href: 'https://transportation.ucdavis.edu/bicycleprogram',
  },
  {
    label: 'Bikeep | Smart Bike Parking',
    href: 'https://bikeep.com/rent-smart-bike-parking-station',
  },
  {
    label: 'Apple App Store | Bikeep',
    href: 'https://apps.apple.com/us/app/bikeep/id1320858642',
  },
  {
    label: 'University of Illinois | Register Your Bike',
    href: 'https://bike.illinois.edu/register-your-bike/',
  },
  {
    label: 'University of Illinois | Bicycle Friendly University Application 2023',
    href: 'https://icap.sustainability.illinois.edu/files/projectupdate/8756/Bicycle%20Friendly%20University%20Application%202023.pdf',
  },
  {
    label: 'BikeLink | Getting Access Comparison',
    href: 'https://www.bikelink.org/get_access',
  },
  {
    label: 'Apple App Store | BikeLink Bike Parking',
    href: 'https://apps.apple.com/us/app/bikelink-bike-parking/id1501041932',
  },
];

export const creditosVisuales = [
  {
    recurso: 'Logo oficial de la app UBBike',
    fuente: 'Diseño propio',
    href: '#inicio',
  },
  {
    recurso: 'Foto real del bicicletero UBB (hero)',
    fuente: 'Captura propia',
    href: '#proyecto',
  },
  {
    recurso: 'Foto de bicicleteros (contexto)',
    fuente: 'Pixabay',
    href: 'https://pixabay.com/photos/bike-racks-bike-bikes-bicycles-5604281/',
  },
  {
    recurso: 'Logos de tecnologias',
    fuente: 'Simple Icons',
    href: 'https://simpleicons.org/',
  },
];



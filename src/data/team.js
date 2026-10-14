/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} summary
 * @property {string} solution
 * @property {string[]} technologies
 * @property {string[]} features
 * @property {string} status
 * @property {string|null} repository
 * @property {string|null} demo
 */

/**
 * @typedef {Object} Profile
 * @property {string} id
 * @property {string} name
 * @property {string|null} role
 * @property {string|null} introduction
 * @property {string[]} education
 * @property {string[]} skills
 * @property {string[]} experience
 * @property {Project[]} projects
 * @property {string[]} certifications
 * @property {{github: string|null, linkedin: string|null, email: string|null, resume: string|null}} links
 * @property {string|null} photo
 */

export const brand = {
  name: 'Portafolio colaborativo',
  description: 'Portafolio colaborativo de perfiles y proyectos de tecnología.',
  provisional: true,
}

/** @type {Profile[]} */
export const team = [
  {
    id: 'yojhan',
    name: 'Yojhan Arias Correa',
    role: 'Ingeniero de software',
    introduction:
      'Ingeniero de software con experiencia en desarrollo full-stack con Java, Spring Boot, React y SQL, además de soporte a sistemas institucionales del sector público. Desarrolla herramientas para automatizar procesos, validar datos y reducir errores operativos; también cuenta con experiencia en QA y soporte técnico de niveles I y II.',
    education: [
      'Ingeniería de Software — Tecnológico de Antioquia (2021–2026)',
    ],
    skills: [
      'Python',
      'Java',
      'Spring Boot',
      'React',
      'JavaScript',
      'HTML',
      'SQL',
      'Bases de datos relacionales',
      'Excel avanzado',
      'Desarrollo de aplicaciones web',
      'Importación y procesamiento de archivos Excel',
      'Validación y normalización de datos',
      'Conciliación de registros operativos',
      'Pruebas de calidad (QA)',
      'Soporte técnico de niveles I y II',
      'Gestión de usuarios, roles y permisos',
      'Automatización de procesos e informes',
      'Código limpio y mantenibilidad',
      'Arquitectura de software',
    ],
    experience: [
      'Auxiliar administrativo / desarrollador (contratista) — Secretaría de Educación de Medellín, convenio ITM (2026–actualidad). Conciliación y validación de registros operativos; coordinación logística; diseño y desarrollo de herramientas internas para automatización y reporte. Tecnologías: Python, Java, Spring Boot, React, SQL y Excel avanzado.',
      'Practicante de Excelencia — Alcaldía de Medellín, Secretaría de Suministros y Servicios (julio–diciembre de 2025). Soporte técnico y funcional de niveles I y II en SIGAI, gestión de usuarios, roles y permisos, validación de ajustes en QA y participación en módulos del proyecto Rocky con React y Spring Boot.',
    ],
    certifications: [
      'Launching into Machine Learning — Google Cloud Skills Boost (septiembre de 2024)',
      'Introduction to AI and Machine Learning on Google Cloud — Google Cloud Skills Boost (septiembre de 2024)',
      'Machine Learning Operations (MLOps): Getting Started — Google Cloud Skills Boost (octubre de 2024)',
      'Business Intelligence Foundation — Certiprof (octubre de 2024)',
      'Programación Nivel Avanzado — MinTIC y Unión Temporal IU Training (abril de 2025)',
      'Spring Framework 6 & Spring Boot 3 desde cero a experto — Udemy (mayo de 2025)',
    ],
    links: {
      github: null,
      linkedin: null,
      email: null,
      resume: '/docs/yojhan-arias-correa-cv.pdf',
    },
    photo: null,
    projects: [
      {
        id: 'informes-reintegros',
        title: 'Aplicación de informes de reintegros',
        summary:
          'Aplicación web para importar archivos Excel, extraer y normalizar información, e identificar artículos y cantidades para facilitar la generación de informes de reintegros.',
        solution:
          'El proyecto cuenta con frontend y backend separados. La información disponible identifica Python en el backend; las demás tecnologías y detalles de implementación están pendientes de verificación.',
        technologies: ['Python (backend)', 'Excel', 'Aplicación web'],
        features: [
          'Importación de archivos Excel',
          'Extracción y normalización de información',
          'Identificación de artículos y cantidades',
          'Apoyo a la generación de informes de reintegros',
        ],
        status: 'Detalles técnicos por verificar',
        repository: null,
        demo: null,
      },
      {
        id: 'conversor-afnd-afd',
        title: 'Conversor de AFND a AFD',
        summary:
          'Aplicación educativa para representar y convertir autómatas finitos no deterministas en autómatas finitos deterministas.',
        solution:
          'La información disponible indica trabajo con React, Vite y herramientas de visualización de grafos. El alcance implementado y las herramientas exactas están pendientes de verificación.',
        technologies: ['React', 'Vite', 'Visualización de grafos'],
        features: [
          'Representación de autómatas finitos',
          'Conversión de AFND a AFD',
        ],
        status: 'Funcionalidades y estado actual por verificar',
        repository: null,
        demo: null,
      },
    ],
  },
    {
    id: 'marcela',
    name: 'Dina Marcela Ríos Madrigal',
    role: 'Analista y Soporte TI | Ingeniería en Software',
    introduction:
      'Profesional en formación de Ingeniería en Software del Tecnológico de Antioquia, con materias terminadas (grado en marzo de 2027), tecnóloga y técnica en sistemas. Realizó su práctica en la Dirección de Gestión Territorial de las TIC de la Gobernación de Antioquia, donde desarrolló herramientas de visualización de datos, consolidó la información TIC del departamento y automatizó procesos de aprobación documental con Power Automate y SharePoint. Cuenta con experiencia en atención y soporte a usuarios, desarrollo web y bases de datos relacionales, con enfoque en la calidad de la información y la mejora de procesos.',
    education: [
      'Ingeniería en Software — Tecnológico de Antioquia (2020–2026, grado en marzo de 2027)',
      'Tecnología en Sistemas — Tecnológico de Antioquia',
      'Técnico en Sistemas',
    ],
    skills: [
      'Python',
      'PHP',
      'JavaScript',
      'Flask',
      'React',
      'Bootstrap',
      'MySQL',
      'SQL Server',
      'Bases de datos relacionales',
      'Excel avanzado',
      'Power Automate',
      'SharePoint',
      'Outlook',
      'Git',
      'GitHub Pages',
      'XAMPP',
      'Apache',
      'Visualización de datos',
      'Consolidación y normalización de datos',
      'Automatización de flujos de aprobación',
      'Atención y soporte a usuarios',
      'Trabajo en equipo',
      'Inglés (intermedio)',
    ],
    experience: [
      'Practicante de excelencia de Ingeniería en Software — Gobernación de Antioquia, Dirección de Gestión Territorial de las TIC (2026). Desarrollo y publicación del Observatorio de Conectividad de Antioquia con indicadores por municipio e integración de 125 archivos KMZ de fibra óptica; consolidación y normalización de la base de datos TIC departamental (12 hojas, 125 municipios); análisis de conectividad de sedes educativas; automatización con Power Automate y SharePoint del flujo de aprobación de informes de supervisión, con control de estados y trazabilidad de rechazos.',
      'Asesora de atención al cliente y soporte — Webhelp – Concentrix, convenio Mercado Libre / Mercado Pago (septiembre de 2023 – mayo de 2024). Atención y resolución de solicitudes e incidencias, diagnóstico de problemas de uso de la plataforma, aplicación de procesos de seguridad en la gestión de casos y seguimiento con herramientas ofimáticas.',
      'Práctica de emprendimiento, proyecto académico — Tecnológico de Antioquia (2023). Desarrollo de una aplicación web con PHP y MySQL sobre XAMPP/Apache, diseño de la base de datos relacional y configuración del entorno de desarrollo.',
    ],
    certifications: [
      'Curso de Seguridad Informática (2025)',
    ],
    links: {
      github: 'https://github.com/DinaRios',
      linkedin: null,
      email: 'dinamarcelamadrigal@gmail.com',
      resume: null,
    },
    photo: null,
    projects: [
      {
        id: 'observatorio-conectividad',
        title: 'Observatorio de Conectividad de Antioquia',
        summary:
          'Mapa interactivo con indicadores por municipio en los ejes de salud, educación, seguridad y TIC para la Gobernación de Antioquia.',
        solution:
          'Integra 125 archivos KMZ con el trazado de fibra óptica del departamento y está desplegado sin costo en GitHub Pages.',
        technologies: ['JavaScript', 'KMZ', 'GitHub Pages'],
        features: [
          'Mapa interactivo por municipio',
          'Indicadores de salud, educación, seguridad y TIC',
          'Trazado de fibra óptica de 125 municipios',
        ],
        status: 'Publicado',
        repository: null,
        demo: null,
      },
      {
        id: 'aprobacion-informes-supervision',
        title: 'Flujo de aprobación de informes de supervisión',
        summary:
          'Automatización del proceso de aprobación de informes de supervisión que antes dependía de cambios manuales de estado.',
        solution:
          'Flujo en Power Automate sobre SharePoint con aprobación en paralelo, preaprobación, aprobación del director y notificaciones por Outlook.',
        technologies: ['Power Automate', 'SharePoint', 'Outlook'],
        features: [
          'Aprobación en paralelo y preaprobación',
          'Aprobación final del director',
          'Notificaciones automáticas por Outlook',
          'Control de estados y trazabilidad de rechazos',
        ],
        status: 'Implementado',
        repository: null,
        demo: null,
      },
      {
        id: 'app-web-emprendimiento',
        title: 'Aplicación web para emprendimiento',
        summary:
          'Aplicación web para gestionar la información de un emprendimiento, desarrollada como práctica académica.',
        solution:
          'Desarrollada con PHP y una base de datos relacional en MySQL, ejecutada en un servidor local con XAMPP/Apache.',
        technologies: ['PHP', 'MySQL', 'XAMPP', 'Apache'],
        features: [
          'Gestión de la información del negocio',
          'Base de datos relacional',
        ],
        status: 'Proyecto académico (2023)',
        repository: null,
        demo: null,
      },
    ],
  },
]

const isOptionalText = value => value === null || typeof value === 'string'

function isSafeUrl(value, allowedProtocols = ['https:']) {
  if (typeof value !== 'string' || !value.trim()) return false

  try {
    const url = new URL(value)
    return allowedProtocols.includes(url.protocol)
  } catch {
    return (value.startsWith('/') && !value.startsWith('//')) || value.startsWith('./')
  }
}

function isValidProject(project) {
  return (
    project &&
    typeof project.id === 'string' &&
    typeof project.title === 'string' &&
    typeof project.summary === 'string' &&
    typeof project.solution === 'string' &&
    typeof project.status === 'string' &&
    Array.isArray(project.technologies) &&
    project.technologies.every(value => typeof value === 'string') &&
    Array.isArray(project.features) &&
    project.features.every(value => typeof value === 'string') &&
    [project.repository, project.demo].every(
      value =>
        isOptionalText(value) &&
        (value === null || value.trim() === '' || isSafeUrl(value)),
    )
  )
}

export function validateTeamConfiguration(configuration = team) {
  const errors = []
  const ids = new Set()

  if (!Array.isArray(configuration)) return ['Los perfiles deben ser una lista.']

  for (const profile of configuration) {
    if (!profile || typeof profile !== 'object') {
      errors.push('Cada perfil debe ser un objeto.')
      continue
    }
    if (!profile.id || ids.has(profile.id)) {
      errors.push(`El identificador de perfil "${profile.id}" falta o está repetido.`)
    }
    ids.add(profile.id)

    if (typeof profile.name !== 'string' || !profile.name.trim()) {
      errors.push(`El perfil "${profile.id}" necesita un nombre visible.`)
    }
    if (!isOptionalText(profile.role) || !isOptionalText(profile.introduction)) {
      errors.push(`El título y la presentación de "${profile.id}" deben ser texto o null.`)
    }
    for (const field of ['education', 'skills', 'experience', 'projects', 'certifications']) {
      if (!Array.isArray(profile[field])) {
        errors.push(`El campo "${field}" de "${profile.id}" debe ser una lista.`)
      }
    }
    for (const field of ['education', 'skills', 'experience', 'certifications']) {
      if (Array.isArray(profile[field]) && !profile[field].every(value => typeof value === 'string')) {
        errors.push(`El campo "${field}" de "${profile.id}" solo admite texto.`)
      }
    }
    if (Array.isArray(profile.projects) && !profile.projects.every(isValidProject)) {
      errors.push(`Los proyectos de "${profile.id}" contienen campos inválidos.`)
    }

    const links = profile.links
    if (!links || typeof links !== 'object') {
      errors.push(`El perfil "${profile.id}" necesita su objeto de enlaces.`)
      continue
    }
    for (const field of ['github', 'linkedin']) {
      if (
        !isOptionalText(links[field]) ||
        (links[field] !== null && links[field].trim() !== '' && !isSafeUrl(links[field]))
      ) {
        errors.push(`El enlace "${field}" de "${profile.id}" debe ser una URL HTTPS o null.`)
      }
    }
    if (
      !isOptionalText(links.email) ||
      (links.email !== null &&
      links.email.trim() !== '' &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(links.email))
    ) {
      errors.push(`El correo de "${profile.id}" no tiene un formato válido.`)
    }
    if (
      !isOptionalText(links.resume) ||
      (links.resume !== null && links.resume.trim() !== '' && !isSafeUrl(links.resume))
    ) {
      errors.push(`La hoja de vida de "${profile.id}" debe ser una ruta local o URL web.`)
    }
    if (
      !isOptionalText(profile.photo) ||
      (profile.photo !== null && profile.photo.trim() !== '' && !isSafeUrl(profile.photo))
    ) {
      errors.push(`La fotografía de "${profile.id}" debe ser una URL HTTPS o ruta local.`)
    }
  }

  return errors
}

const configurationErrors = validateTeamConfiguration()
if (configurationErrors.length) {
  throw new Error(`Configuración de perfiles inválida:\n${configurationErrors.join('\n')}`)
}

export function getProfileLinks(profile) {
  const { github, linkedin, email, resume } = profile.links
  return [
    github && { label: 'GitHub', href: github },
    linkedin && { label: 'LinkedIn', href: linkedin },
    email && { label: 'Correo', href: `mailto:${email}` },
    resume && { label: 'Hoja de vida', href: resume },
  ].filter(Boolean)
}

// GLOBAL

export const opSiNo = [
    { value: "Si", label: "Si" },
    { value: "No", label: "No" }
]

// SECCIÓN 1 - IDENTIFICACIÓN

export const tiposRegistros = [
    { label: "Procedimiento Administrativo de función común", value: "Procedimiento Administrativo de función común" },
    { label: "Procedimiento Administrativo de función específica", value: "Procedimiento Administrativo de función específica" },
    { label: "Otras tramitaciones", value: "Otras tramitaciones" }
]
export const areasMunicipales = [
    { label: "Administración Municipal", value: "Administración Municipal" },
    { label: "Administración y Finanzas", value: "Administración y Finanzas" },
    { label: "Secretaría Municipal", value: "Secretaría Municipal" },
    { label: "Tránsito y Transporte Público", value: "Tránsito y Transporte Público" },
    { label: "DIDECO", value: "DIDECO" },
    { label: "DIDEL", value: "DIDEL" },
    { label: "Obras Municipales", value: "Obras Municipales" },
    { label: "SECPLAN", value: "SECPLAN" },
    { label: "Control Interno", value: "Control Interno" },
    { label: "Asesoría Jurídica", value: "Asesoría Jurídica" },
    { label: "Juzgado de Policía Local", value: "Juzgado de Policía Local" }
]
export const tiposInicio = [
    { value: "De oficio", label: "De oficio" },
    { value: "Solicitud de partes", label: "Solicitud de partes" },
    { value: "Ambos: De oficio y solicitud de partes", label: "Ambos: De oficio y solicitud de partes" }
]
export const productosInstitucionales = [
    { value: "Acreditación", label: "Acreditación" },
    { value: "Atención y/o información ciudadana", label: "Atención y/o información ciudadana" },
    { value: "Autorización", label: "Autorización" },
    { value: "Avalúo", label: "Avalúo" },
    { value: "Beca", label: "Beca" },
    { value: "Bienes fiscales", label: "Bienes fiscales" },
    { value: "Bonos", label: "Bonos" },
    { value: "Capacitación y asistencia técnica", label: "Capacitación y asistencia técnica" },
    { value: "Créditos", label: "Créditos" },
    { value: "Extensiones", label: "Extensiones" },
    { value: "Fiscalización", label: "Acreditación" },
    { value: "Fondos concursables y/o postulables", label: "Fondos concursables y/o postulables" },
    { value: "Pensiones", label: "Pensiones" },
    { value: "Prestaciones", label: "Prestaciones" },
    { value: "Pronunciamiento", label: "Pronunciamiento" },
    { value: "Subsidios", label: "Subsidios" },
    { value: "Recaudación y pagos", label: "Recaudación y pagos" },
    { value: "Registros", label: "Registros" },
    { value: "Otros", label: "Otros" }
]

// SECCIÓN 2 - MARCO NORMATIVO

export const fuentesNormativas = [
    { value: "Decreto (reglamento)", label: "Decreto (reglamento)" },
    { value: "Resolución", label: "Resolución" },
    { value: "Circular", label: "Circular" },
    { value: "Ordenanza", label: "Ordenanza" },
    { value: "Instrucciones generales", label: "Instrucciones generales" },
    { value: "Otro", label: "Otro" },
]

// SECCIÓN 3 - USUARIOS

export const opPagoAsociado = [
    { label: "Si", value: "Si" },
    { label: "No", value: "No" },
    { label: "En algunos casos", value: "En algunos casos" },
]
export const opTipoMoneda = [
    { label: "Peso Chileno (CLP)", value: "Peso Chileno (CLP)" },
    { label: "Unidad de Fomento (UF)", value: "Unidad de Fomento (UF)" },
    { label: "Unidad Tributaria Mensual (UTM)", value: "Unidad Tributaria Mensual (UTM)" },
]
export const opTipoUsuario = [
    { label: "Persona Natural", value: "Persona Natural" },
    { label: "Persona Jurídica", value: "Persona Jurídica" },
    { label: "Ambos tipos de personas", value: "Ambos tipos de personas" },
]
export const opSegmentoUsuarios = [
    { label: "Género", value: "Género" },
    { label: "Productividad y emprendimiento", value: "Productividad y emprendimiento" },
    { label: "Calidad Indígena", value: "Calidad Indígena" },
    { label: "Discapacidad", value: "Discapacidad" },
    { label: "Medio Ambiente", value: "Medio Ambiente" },
    { label: "Migración", value: "Migración" },
    { label: "Personas Mayores", value: "Personas Mayores" },
    { label: "Infancia", value: "Infancia" },
    { label: "No aplica", value: "No aplica" },
]
export const opRSH = [
    { label: "Si, se interopera con el Ministerio de Desarrollo Social y Familia", value: "Si, se interopera con el Ministerio de Desarrollo Social y Familia" },
    { label: "Si, se solicita a los(as) usuarios(as)", value: "Si, se solicita a los(as) usuarios(as)" },
    { label: "No se requiere información", value: "No se requiere información" },
]
export const opDisponibilidad = [
    { label: "Se puede realizar durante todo el año", value: "Se puede realizar durante todo el año" },
    { label: "Se puede realizar sólo en algunos períodos del año", value: "Se puede realizar sólo en algunos períodos del año" },
]

// SECCIÓN 4 - SOPORTE ELECTRÓNICO

export const opNivelDig = [
    { label: "Nivel 0", value: "Nivel 0" },
    { label: "Nivel 1", value: "Nivel 1" },
    { label: "Nivel 2", value: "Nivel 2" },
    { label: "Nivel 3", value: "Nivel 3" },
    { label: "Nivel 4 (Sólo aplica para PA de función específica y otras tramitaciones)", value: "Nivel 4 (Sólo aplica para PA de función específica y otras tramitaciones)" },
    { label: "Nivel 5", value: "Nivel 5" },
]
export const opTipoExpediente = [
    { label: "Expediente físico", value: "Expediente físico" },
    { label: "Expediente electrónico", value: "Expediente electrónico" },
    { label: "Expediente físico y electrónico", value: "Expediente físico y electrónico" },
    { label: "No genera un expediente", value: "No genera un expediente" },
]
export const opAccesoExp = [
    { label: "Si, los(as) interesados(as) tienen acceso al expediente electrónico", value: "Si, los(as) interesados(as) tienen acceso al expediente electrónico" },
    { label: "No, los(as) interesados(as) no tienen acceso al expediente", value: "No, los(as) interesados(as) no tienen acceso al expediente" },
]
export const opFicha = [
    { label: "Si", value: "Si" },
    { label: "No", value: "No" },
]
export const opAlcance = [
    { label: "Las plataformas electrónicas soportan todas las etapas de tramitación del procedimiento administrativo u otra tramitación", value: "Las plataformas electrónicas soportan todas las etapas de tramitación del procedimiento administrativo u otra tramitación" },
    { label: "Las plataformas electrónicas soportan parcialmente las etapas de tramitación del procedimiento administrativo u otra tramitación", value: "Las plataformas electrónicas soportan parcialmente las etapas de tramitación del procedimiento administrativo u otra tramitación" },
]

// SECCIÓN 5 - IDENTIDAD DIGITAL
export const opAuthUsuarios = [
    { label: "No utiliza mecanismo de autenticación digital", value: "No utiliza mecanismo de autenticación digital" },
    { label: "Utiliza ClaveÚnica", value: "Utiliza ClaveÚnica" },
    { label: "Utiliza Clave Tributaria", value: "Utiliza Clave Tributaria" },
    { label: "Utiliza un mecanismo de autenticación propio", value: "Utiliza un mecanismo de autenticación propio" },
]
export const opAuthFuncionarios = [
    { label: "No utiliza mecanismo de autenticación digital", value: "No utiliza mecanismo de autenticación digital" },
    { label: "Utiliza ClaveÚnica", value: "Utiliza ClaveÚnica" },
    { label: "Utiliza un mecanismo de autenticación propio", value: "Utiliza un mecanismo de autenticación propio" },
]
export const opFirmaElec = [
    { label: "No utiliza", value: "No utiliza" },
    { label: "Utiliza Firma Electrónica Avanzada del Estado (Firma Gob)", value: "Utiliza Firma Electrónica Avanzada del Estado (Firma Gob)" },
    { label: "Utiliza firma electrónica avanzada provista por un externo", value: "Utiliza firma electrónica avanzada provista por un externo" },
    { label: "Utiliza ambos tipos de firma (Firma Gob y provista por un externo)", value: "Utiliza ambos tipos de firma (Firma Gob y provista por un externo)" }
]

// SECCIÓN 6 - NOTIFICACIONES

export const opTiposNotif = [
    { value: "Notificación electrónica", label: "Notificación electrónica" },
    { value: "Notificación física", label: "Notificación física" },
    { value: "Ambos medios", label: "Ambos medios" },
]
export const opTiposNotifInstit = [
    { value: "Notificación electrónica", label: "Notificación electrónica" },
    { value: "Notificación física", label: "Notificación física" },
    { value: "Ambos medios", label: "Ambos medios" },
    { value: "No envía comunicaciones", label: "No envía comunicaciones" },
]

// SECCIÓN 7 - DOCUMENTOS

export const opMediosEstado = [
    { value: "No hay interoperabilidad, se solicita a sus usuarios(as)", label: "No hay interoperabilidad, se solicita a sus usuarios(as)" },
    { value: "No hay interoperabilidad, se intercambia manualmente con la institución", label: "No hay interoperabilidad, se intercambia manualmente con la institución" },
    { value: "Hay interoperabilidad electrónica con la institución", label: "Hay interoperabilidad electrónica con la institución" },
]
export const opMedioInterop = [
    { value: "Utiliza PISEE", label: "Utiliza PISEE" },
    { value: "Utiliza otros medios", label: "Utiliza otros medios" }
]
export const opMedioCom = [
    { value: "Si, realiza envíos por medio de la plataforma DOC Digital (DGD)", label: "Si, realiza envíos por medio de la plataforma DOC Digital (DGD)" },
    { value: "Si, realiza envíos por medios electrónicos propios", label: "Si, realiza envíos por medios electrónicos propios" },
    { value: "Si, realiza envíos por medios electrónicos propios y DOC Digital", label: "Si, realiza envíos por medios electrónicos propios y DOC Digital" },
    { value: "Si, realiza envíos por medios físicos", label: "Si, realiza envíos por medios físicos" },
    { value: "No considera comunicaciones oficiales", label: "No considera comunicaciones oficiales" },
]
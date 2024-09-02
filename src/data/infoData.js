// SECCIÓN 1
export const infoTipoRegistro = {
    title: "Tipo de registro",
    body: [
        "PA Función común: Se desprende de funciones comunes o transversales a los órganos de la administración del Estado",
        "PA Función específica: Se desprende de funciones propias y específicas del órgano, derivadas del cumplimiento del mandato institucional de cada uno de ellos",
        "Otras tramitaciones: Todas las acciones necesarias para que una persona, tanto natural y/o jurídica, obtenga un producto entregado por una institución pública (bienes y/o servicios), el cual se genera una respuesta final para quien lo solicita"
    ]
}
export const infoTipoInicio = {
    title: "Tipo de inicio",
    body: [
        "De oficio: Corresponden a aquellos iniciados a partir de la propia iniciativa de un órgano de la administración del Estado. La iniciación de oficio es resorte y decisión exclusiva del propio órgano competente.",
        "Solicitud de partes: Corresponden a aquellos que son solicitados por una parte interesada, cuya solicitud determina en principio y por sí misma el origen del procedimiento administrativo, estando obligada la Administración a dictar una resolución expresa (respuesta) sobre la misma."
    ]
}

export const infoActoInicio = {
    title: "Acto de inicio",
    body: [
        'Indique el acto que da inicio al procedimiento'
    ]
}
export const infoActoTermino = {
    title: "Acto de término",
    body: [
        'Indique el acto que da fin al procedimiento'
    ]
}


// SECCIÓN 2

export const infoNumLey = {
    title: "N° de ley",
    body: [
        'Indique el número de la Ley de la cual emana o se origina este registro.'
    ]
}

// SECCIÓN 3
export const infoSegmentoUsuarios = {
    title: "Segmento de usuarios(as)",
    body: [
        "Seleccione el segmento al cual se encuentra orientado este registro. En caso de no encontrarse dirigido a un grupo específico de usuarios(as) deberá seleccionar la alternativa 'No aplica'"
    ]
}

export const infoRsh = {
    title: "Relación con Registro Social de Hogares y/o Registro de Información Social",
    body: [
        "El Registro Social de Hogares es un sistema de información cuyo fin es apoyar los procesos de selección de beneficiarios de un conjunto amplio de subsidios y programas sociales (MINDES)",
        "Si, interopera: Esta información no se solicita a las personas, sino que la institución la consulta al órgano de la administración dueño de la información, en este caso al Ministerio de Desarrollo Social.",
        "Si, se solicita al usuario: Esta información se solicita directamente a las personas, quienes deben disponer de este antecedente.",
    ]
}

// SECCIÓN 4

export const infoNivelDig = {
    title: "Nivel de digitalización",
    body: [
        'Escala de 0 a 5 que permite clasificar cada registro, según disponga o no de soporte electrónico. En esta escala el nivel 4 sólo aplica a procedimientos administrativos de función específica y otras tramitaciones',
        "Nivel 0: No cuenta con soporte electrónico para informar y/o para gestionar las etapas asociadas a su tramitación.",
        "Nivel 1: Cuenta con soporte electrónico que permite entregar sólo información, sin poder gestionar las etapas asociadas a su tramitación.",
        "Nivel 2: Cuenta con soporte electrónico que permite descargar formularios, sin poder gestionar las etapas asociadas a su tramitación.",
        "Nivel 3: Cuenta con soporte electrónico que permite realizar una o más etapas de forma digital, manteniendo una de estas etapas en modalidad presencial.",
        "Nivel 4: Cuenta con soporte electrónico en las etapas que realiza su usuario(a) (persona), quien no debe realizar ninguna etapa de forma presencia",
        "Nivel 5: Cuenta con soporte electrónico que permite realizar todas las etapas de forma digital."
    ]
}
export const infoCanalesAtencion = {
    title: "Canales de atención",
    body: [
        'Medio(s) de contacto disponible para los usuarios(as) durante la tramitación del procedimiento administrativo u otras tramitaciones.'
    ]
}
export const infoCanalesTrans = {
    title: "Canales transaccionales",
    body: [
        'Medio(s) a través del cuál se puede realizar la totalidad del procedimiento administrativo u otras tramitaciones, desde su inicio hasta la entrega de la respuesta final. Para estos canales se solicitarán transacciones.'
    ]
}

export const infoTipoExp = {
    title: "Tipo de expediente",
    body: [
        "Indique el estado actual del expediente asociado a este registro. El expediente es el registro íntegro de todas las actuaciones de un procedimiento administrativo, documentos, resoluciones, notificaciones y comunicaciones que deriven de éste"
    ]
}
export const infoAccesoExp = {
    title: "Acceso al expediente",
    body: [
        "De acuerdo al artículo 18 de la Ley N° 19.880, los interesados tendrán acceso permanente a los expedientes electrónicos, el cuál contendrá un registro de todas las actuaciones del procedimiento. En este contexto, indique si los interesados pueden acceder al expediente en cualquier momento durante la tramitación del mismo."
    ]
}
export const infoUrlInicio = {
    title: "URL de inicio",
    body: [
        "Dirección de la plataforma electrónica donde la institución dispone de la información necesaria para que sus usuario/as puedan realizar el procedimiento administrativos de función específica u otra tramitación"
    ]
}
export const infoNumPlataformas = {
    title: "Número de plataformas",
    body: [
        "Indique todas las plataformas electrónicas que apoyan la tramitación del registro, entendiendo como plataforma electrónica el software o conjunto de software, datos e infraestructura tecnológica que sustenta procesos o procedimientos."
    ]
}
export const infoAlcancePlataformas = {
    title: "Alcance de las plataformas",
    body: [
        "Respecto de las plataformas indicadas en la pregunta anterior, señale si ellas cubren todo el procedimiento administrativo o algunas etapas de éste."
    ]
}

// SECCIÓN 5

export const infoAuthUsuario = {
    title: "Mecanismo de autenticación para los usuarios",
    body: [
        "Método o conjunto de procesos electrónicos que sustentan la autenticación con un nivel de confianza determinado, lo anterior de acuerdo con la norma técnica de autenticación. Indique el o los mecanismos de autenticación que permite corroborar la identidad de la persona que realiza este registro"
    ]
}
export const infoAuthFuncionario = {
    title: "Mecanismo de autenticación para los funcionarios",
    body: [
        "Método o conjunto de procesos electrónicos que sustentan la autenticación con un nivel de confianza determinado. Indique el o los mecanismos de autenticación que permite corroborar la identidad del funcionario"
    ]
}
export const infoFirmaElec = {
    title: "Firma Electrónica Avanzada",
    body: [
        "La firma electrónica avanzada es aquella certificada por un prestador acreditado, que ha sido creada usando medios que el titular mantiene bajo su exclusivo control, de manera que se vincule únicamente al mismo y a los datos a los que se refiere (Ley N°19.799)."
    ]
}

// SECCIÓN 6

export const infoNotif = {
    title: "Notificaciones practicadas",
    body: [
        'Indique si este registro requiere enviar notificaciones durante la tramitación, independiente si ellas se efectúan en papel o electrónicamente.',
        "Etapa de inicio: Inicio del procedimiento, ya sea a solicitud de parte o de oficio, en la cual el órgano de la administración practica notificaciones a sus usuario/as",
        "Etapa de instrucción: Los actos de instrucción son aquéllos necesarios para la determinación, conocimiento y comprobación de los datos en virtud de los cuales deba pronunciarse el acto, en la cual el órgano de la administración practica notificaciones a sus usuario/as",
        "Etapa de término: Conclusión del procedimiento por medio de la emisión de la resolución final, por desistimiento, declaración de abandono y la renuncia al derecho en que se funde la solicitud, en la cual el órgano de la administración practica notificaciones a sus usuario/as"
    ]
}
export const infoComInsti = {
    title: "Comunicaciones institucionales",
    body: [
        'Indique cómo se envían las comunicaciones institucionales, entendidas como información que se envía a los(as) usuario(as) sobre aspectos generales, por ejemplo información sobre beneficios, programas o fechas de convocatoria.'
    ]
}
export const infoComPer = {
    title: "Comunicaciones personales",
    body: [
        'Indique cómo se envían las comunicaciones personales o de seguimiento, entendidas como información específica que se envía a determinados usuario(as), por ejemplo sobre el estado de tramitación de una solicitud.'
    ]
}

// SECCIÓN 7

export const infoDocsOrganos = {
    title: "Documentos de otros órganos del Estado",
    body: [
        'Indique si para efectuar este procedimiento administrativo u otra tramitación requiere informacion que este en poder de otros órganos de la administración del Estado.'
    ]
}
export const infoMedioCom = {
    title: "Medio de comunicación oficial",
    body: [
        'Si este registro considera el envío y recepción de comunicaciones oficiales, indique a través de qué medio éstas se efectúan'
    ]
}
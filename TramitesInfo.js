// TramitesInfo.js
class TramitesInfo {
    constructor() {
        this.tramites = {
            
                // Saludos
                "hola": "¿Desea ver el menú de los posibles trámites? Responde 'sí' para continuar.",
                "si": "MENU:<br>◾Inglés<br>◾Constancias<br>◾Reposición de credencial<br>◾SIE<br>◾Reinscripción<br>◾Bajas de Materias<br>◾Baja Temporal<br>◾Justificante por Inasistencia<br>◾Actividades Complementarias<br>◾Titulación<br>◾Cambio de Carrera<br>◾Cursos de Verano<br>◾Traslado a ITVH",
                "Menu": "MENU:<br>◾Inglés<br>◾Constancias<br>◾Reposición de credencial<br>◾SIE<br>◾Reinscripción<br>◾Bajas de Materias<br>◾Baja Temporal<br>◾Justificante por Inasistencia<br>◾Actividades Complementarias<br>◾Titulación<br>◾Cambio de Carrera<br>◾Cursos de Verano<br>◾Traslado a ITVH",
                "tramites": "MENU:<br>◾Inglés<br>◾Constancias<br>◾Reposición de credencial<br>◾SIE<br>◾Reinscripción<br>◾Bajas de Materias<br>◾Baja Temporal<br>◾Justificante por Inasistencia<br>◾Actividades Complementarias<br>◾Titulación<br>◾Cambio de Carrera<br>◾Cursos de Verano<br>◾Traslado a ITVH",
                "buenos días": "¡Buenos días! ¿En qué puedo ayudarte hoy?",
                "buenas tardes": "¡Buenas tardes! ¿En qué puedo ayudarte hoy?",
                "buenas noches": "¡Buenas noches! ¿En qué puedo ayudarte hoy?",
                "qué tal": "¡Hola! Estoy aquí para ayudarte. ¿En qué puedo colaborarte?",
                "cómo estás": "¡Hola! Estoy muy bien, gracias por preguntar. ¿En qué puedo ayudarte?",
                "quién eres": "Soy TekoBot, tu asistente virtual para trámites. ¿En qué puedo ayudarte?",
                "qué puedes hacer": "Puedo ayudarte con información sobre trámites. Responde 'sí' para ver el menú.",
                "gracias": "¡De nada! Estoy aquí para ayudarte. ¿Necesitas algo más?",
                "adiós": "¡Hasta luego! Si necesitas más ayuda, no dudes en volver.",
                "hasta luego": "¡Nos vemos! Recuerda que estoy aquí para ayudarte cuando lo necesites.",
                "bienvenido": "¡Gracias! ¿En qué puedo ayudarte hoy?",
                "qué trámites hay": "Estos son los trámites disponibles: Inglés, Constancias, Reposición de credencial, SIE, Reinscripción, Bajas de Materias, Baja Temporal, Justificante por Inasistencia, Actividades Complementarias, Titulación, Cambio de Carrera, Cursos de Verano y Traslado a ITVH. Responde 'sí' para más detalles.",
                "ayuda": "Claro, estoy aquí para ayudarte. ¿Qué trámite necesitas?",
                "qué necesito": "Dime qué trámite necesitas y te guiaré paso a paso.",
                "cómo empezar": "Puedes empezar diciéndome qué trámite necesitas o respondiendo 'sí' para ver el menú.",
                "qué opciones tengo": "Puedes elegir entre estos trámites: Inglés, Constancias, Reposición de credencial, SIE, Reinscripción, Bajas de Materias, Baja Temporal, Justificante por Inasistencia, Actividades Complementarias, Titulación, Cambio de Carrera, Cursos de Verano y Traslado a ITVH. Responde 'sí' para más detalles.",
                "qué más puedes hacer": "Además de ayudarte con trámites, puedo darte información sobre fechas, requisitos y procesos. ¿Qué necesitas?",
                "qué es tecobot": "Soy TekoBot, tu asistente virtual para trámites en el Tecnológico, creado por el Equipo 1. ¿En qué puedo ayudarte?",
    
                // Trámites existentes (Inglés, Constancias, etc.)
                "ingles": "¿Qué desea saber de inglés?<br>◾Pago de módulos<br>◾Dónde pagar<br>◾Proceso de pago<br>◾Dónde entregar el comprobante<br>◾Inscripción al examen de colocación<br>◾Lugar del examen de colocación<br>◾Fecha del examen de colocación<br>◾Requisitos para el examen de colocación",
                "pago de modulos": "Para pagar los módulos de inglés, debes realizar el pago en el banco y llevar el comprobante a la oficina de Servicios Escolares.",
                "dónde pagar": "Debes realizar el pago en el banco y llevar el comprobante a la oficina de Servicios Escolares.",
                "proceso de pago": "Deberás bajar la referencia en el sistema de referencias bancarias (SRB) de la página del Tecnológico dentro del SWS.",
                "dónde entregar el comprobante": "El comprobante debe ser entregado en la oficina de Servicios Escolares.",
                "inscripción al examen de colocación": "Para inscribirte al examen de colocación, dirígete a la oficina de idiomas y presenta tu credencial.",
                "lugar del examen de colocación": "El examen de colocación se realiza en la institución, generalmente en el primer semestre. Acércate a la oficina de idiomas para más detalles.",
                "fecha del examen de colocación": "El examen de colocación se realiza en el primer semestre. Pregunta en el departamento de Lenguas Extranjeras por la fecha exacta.",
                "requisitos para el examen de colocación": "Necesitas presentar tu credencial en la oficina de idiomas para inscribirte.",
                "constancias": "¿Qué desea saber de Constancias?<br>◾Obtención de constancia de complementarias<br>◾Dónde obtener la constancia de complementarias<br>◾Requisitos para la constancia de complementarias<br>◾Obtención de constancia de estudios<br>◾Documentos para constancia de estudios",
                "obtención de constancia de complementarias": "La constancia de complementarias se obtiene solicitando una cita en el Departamento de Actividades Extraescolares, llevando tus actividades registradas.",
                "dónde obtener la constancia de complementarias": "La constancia de complementarias se solicita en el Departamento de Actividades Extraescolares.",
                "requisitos para la constancia de complementarias": "Debes llevar tus actividades registradas y solicitar una cita en el Departamento de Actividades Extraescolares.",
                "obtención de constancia de estudios": "Puedes solicitar tu constancia de estudios en la ventanilla de Servicios Escolares, proporcionando tu matrícula y una identificación.",
                "documentos para constancia de estudios": "Debes presentar tu matrícula y una identificación oficial para solicitar tu constancia de estudios.",
                "reposicioncredencial": "¿Qué desea saber sobre Reposición de credencial?<br>◾Proceso de reposición de credencial<br>◾Dónde reponer credencial<br>◾Documentos para reponer credencial",
                "proceso de reposición de credencial": "Para reponer tu credencial, acude a la Secretaría Administrativa con una foto reciente y una identificación oficial.",
                "dónde reponer credencial": "Debes acudir a la Secretaría Administrativa con una foto reciente y una identificación oficial.",
                "documentos para reponer credencial": "Necesitas una foto reciente y una identificación oficial para reponer tu credencial.",
                "sie": "¿Qué desea saber sobre el SIE?<br>◾Uso del SIE para trámites<br>◾Qué trámites se pueden hacer en el SIE<br>◾Dónde pedir ayuda sobre el SIE",
                "uso del sie para trámites": "El SIE es una plataforma en línea que te permite realizar varios trámites. Si tienes problemas, puedes solicitar ayuda en la oficina de Sistemas.",
                "qué trámites se pueden hacer en el sie": "En el SIE puedes realizar trámites como reinscripción, consulta de calificaciones y otros procesos administrativos.",
                "dónde pedir ayuda sobre el sie": "Si tienes problemas con el SIE, puedes solicitar ayuda en la oficina de Sistemas.",
                "reinscripcion": "¿Qué desea saber sobre Reinscripción?<br>◾Reinscripción a la universidad<br>◾Fecha de reinscripción<br>◾Cómo registrar materias para la reinscripción",
                "reinscripción a la universidad": "La reinscripción se realiza en línea a través del SIE. Recuerda realizar los pagos antes de registrar tus materias.",
                "fecha de reinscripción": "La reinscripción debe realizarse en las fechas asignadas por la universidad. Revisa el calendario académico para conocer las fechas exactas.",
                "cómo registrar materias para la reinscripción": "Debes registrar tus materias a través del SIE después de haber realizado los pagos correspondientes.",
    
                // Nuevos trámites
                "bajas de materias": "¿Qué desea saber sobre Bajas de Materias?<br>◾Primer paso para bajas de materias<br>◾Marcar materias y entregar documentos<br>◾Verificación y autorización de baja<br>◾Finalización del proceso",
                "primer paso para bajas de materias": "1. Consulta en el Calendario de Actividades el periodo para bajas de materias.<br>2. Saca dos fotocopias de tu Carga Académica (horario oficial).",
                "marcar materias y entregar documentos": "1. Marca las materias que deseas dar de baja en los 3 tantos de la Carga Académica.<br>2. Acude con el Coordinador de tu carrera y entrega el original y las copias.<br>3. Continúa asistiendo a clases mientras esperas el resultado.",
                "verificación y autorización de baja": "El Coordinador verificará si procede la baja. Si se autoriza, registrará la baja en el sistema y la marcará en tu Carga Académica.",
                "finalización del proceso": "1. Regresa por el original de tu Carga Académica.<br>2. Verifica en el sistema que la materia ya no aparezca.<br>3. Conserva tu Carga Académica para cualquier aclaración.",
    
                "baja temporal": "¿Qué desea saber sobre Baja Temporal?<br>◾Periodo para solicitar baja temporal<br>◾Iniciar el proceso de baja temporal<br>◾Entrega de la solicitud<br>◾Verificación de la baja temporal",
                "periodo para solicitar baja temporal": "Consulta en el Calendario de Actividades el periodo establecido (aproximadamente en la 4ª o 5ª semana de clases).",
                "iniciar el proceso de baja temporal": "1. Ingresa al Centro de Servicios del portal del ITVH.<br>2. Haz clic en 'Solicitud de Baja Temporal'.<br>3. Llena los datos y imprime 3 copias de la solicitud.",
                "entrega de la solicitud": "Entrega las 3 copias de la solicitud en la División de Estudios Profesionales. Conserva tu copia con el sello de recibido.",
                "verificación de la baja temporal": "Antes de finalizar el semestre, verifica en el SIE que no tengas materias cargadas y que tu situación sea 'BAJA TEMPORAL'.",
    
                "justificante por inasistencia": "¿Qué desea saber sobre Justificante por Inasistencia?<br>◾Documentación requerida<br>◾Preparación de la documentación<br>◾Entrega de la documentación<br>◾Recolección del justificante",
                "documentación requerida": "Recaba el documento original y una fotocopia que avale tu inasistencia.",
                "preparación de la documentación": "En la fotocopia, escribe tu número de control, carrera y el periodo por el que solicitas el justificante.",
                "entrega de la documentación": "Entrega las fotocopias en la jefatura de la División de Estudios Profesionales.",
                "recolección del justificante": "Regresa al siguiente día hábil a la División de Estudios Profesionales por el justificante elaborado.",
    
                "actividades complementarias": "¿Qué desea saber sobre Actividades Complementarias?<br>◾Iniciar el proceso<br>◾Registro de la solicitud<br>◾Desarrollo de actividades<br>◾Finalización del semestre<br>◾Entrega de la Constancia de Acreditación",
                "iniciar el proceso": "1. Ingresa al sistema de 'Actividades Complementarias' en el portal del ITVH durante la tercera semana de clases.<br>2. Imprime la solicitud correspondiente.",
                "registro de la solicitud": "Entrega 2 copias de la solicitud en la División de Estudios Profesionales para su registro.",
                "desarrollo de actividades": "1. Coordínate con los maestros que desarrollarán los proyectos.<br>2. Verifica en el sistema que el proyecto esté registrado.",
                "finalización del semestre": "1. Recaba las evidencias necesarias (constancias, reportes, etc.).<br>2. Imprime 4 copias de la Constancia de Acreditación.",
                "entrega de la constancia de acreditación": "1. Entrega las 4 copias y las evidencias en el Departamento responsable para firma y sello.<br>2. Entrega una copia en la División de Estudios Profesionales y otra en Servicios Escolares.",
            
    
                //Nuevo trámite: Titulación
                "titulacion": "¿Qué desea saber sobre el Procedimiento de Titulación?<br>◾Pre-registro y requisitos<br>◾Pago de apertura de expediente<br>◾Entrega de documentación<br>◾Solicitud de opción de titulación<br>◾Asignación de revisores<br>◾Impresión de trabajo (si aplica)<br>◾Integración de jurado y pagos<br>◾Acto de Recepción Profesional<br>◾Entrega de título y cédula",
                "pre-registro y requisitos": "1. Ingresa al SCOTT en el portal del ITVH y completa el pre-registro.<br>2. Descarga los formatos de apertura de expediente y verifica los requisitos.<br>3. Requisitos: Acta de nacimiento, CURP, fotografías, comprobantes de pago, constancias de inglés, servicio social, residencias y certificados.",
                "pago de apertura de expediente": "1. Realiza el pago del formato de título en el Depto. de Recursos Financieros.<br>2. Descarga la referencia bancaria para el pago de apertura de expediente.<br>3. Realiza el pago en Banamex.",
                "entrega de documentación": "1. Agenda cita en el SCOTT para entregar la documentación.<br>2. Acude a Servicios Estudiantiles con los requisitos completos.<br>3. Recibe la 'Carta de No Inconveniencia'.",
                "solicitud de opción de titulación": "1. Descarga y llena el formato de solicitud de opción en el SCOTT.<br>2. Entrega el formato y la documentación requerida en la Oficina de Apoyo a la Titulación.",
                "asignación de revisores": "1. Verifica en el SCOTT la asignación de revisores.<br>2. Acude con los revisores para las correcciones y firma del dictamen.",
                "impresión de trabajo (si aplica)": "1. Obtén el Oficio de Autorización de Impresión en la Oficina de Apoyo a la Titulación.<br>2. Realiza la impresión final del trabajo según el formato oficial.<br>3. Entrega los tantos requeridos.",
                "integración de jurado y pagos": "1. Verifica en el SCOTT la asignación de sinodales.<br>2. Realiza los pagos de derechos y entrega los comprobantes.",
                "acto de recepción profesional": "1. Recibe la 'Constancia de No Inconveniencia' en Servicios Estudiantiles.<br>2. Coordina con los sinodales la fecha y hora del acto.<br>3. Asiste puntualmente al Acto de Recepción Profesional.",
                "entrega de título y cédula": "1. Verifica en el SCOTT la carga del número de foja.<br>2. Recoge el Acta de Examen Profesional en Servicios Estudiantiles.<br>3. 90 días hábiles después, recoge tu título y cédula profesional.",
    
                // Opciones de Titulación
                "opciones de titulacion": "¿Qué opción de titulación deseas conocer?<br>◾Tesis profesional<br>◾Libros de texto o prototipos didácticos<br>◾Proyecto de investigación<br>◾Diseño o rediseño de equipo<br>◾Curso especial de titulación<br>◾Examen global por áreas<br>◾Memoria de experiencia profesional<br>◾Escolaridad por promedio<br>◾Escolaridad por posgrado<br>◾Memoria de Residencia Profesional",
                "tesis profesional": "Presentación de resultados de una investigación en un área del conocimiento científico o tecnológico.",
                "libros de texto o prototipos didácticos": "Elaboración de material educativo innovador para apoyar el proceso de enseñanza-aprendizaje.",
                "proyecto de investigación": "Desarrollo de un proyecto que aporte resultados científicos o tecnológicos útiles.",
                "diseño o rediseño de equipo": "Mejora o creación de equipo, aparato o maquinaria para optimizar procesos.",
                "curso especial de titulación": "Curso de nivel poslicenciatura que refuerza conocimientos y culmina con una monografía.",
                "examen global por áreas": "Examen sobre un área específica del conocimiento de la carrera, con un mínimo de 40 créditos.",
                "memoria de experiencia profesional": "Informe técnico de proyectos desarrollados en el sector productivo o de servicios.",
                "escolaridad por promedio": "Titulación automática al obtener un promedio general mayor o igual a 90.",
                "escolaridad por posgrado": "Titulación al acreditar una especialización o parte de una maestría reconocida.",
                "memoria de residencia profesional": "Informe final que acredita la experiencia adquirida durante la residencia profesional.",
    
                // Nuevo trámite: Cambio de Carrera
                "cambio de carrera": "¿Qué desea saber sobre el Procedimiento de Cambio de Carrera?<br>◾Pre-registro en SATME<br>◾Solicitud en línea<br>◾Entrega de formatos<br>◾Entrevista y test profesiográfico<br>◾Convalidación de materias<br>◾Reinscripción",
                "pre-registro en satme": "1. Acude a la División de Estudios Profesionales al finalizar el semestre para realizar el pre-registro en SATME.",
                "solicitud en línea": "1. Ingresa al SATME en el portal del ITVH.<br>2. Selecciona 'Cambio de Carrera', indica la carrera actual, la solicitada y los motivos.<br>3. Imprime 3 copias del 'Formato de Solicitud de Cambio de Carrera'.",
                "entrega de formatos": "1. Entrega un formato en el Depto. de Desarrollo Académico para agendar entrevista y test.<br>2. Entrega otro formato en la División de Estudios Profesionales.",
                "entrevista y test profesiográfico": "1. Acude a la entrevista y test en las fechas asignadas.<br>2. Si no te presentas, tu solicitud será cancelada.",
                "convalidación de materias": "1. Verifica los resultados en la División de Estudios Profesionales.<br>2. Ingresa al SATME para agregar las materias cursadas.<br>3. Obtén el 'Dictamen de Convalidación de Estudios'.",
                "reinscripción cambio de carrera": "1. Verifica tu nueva carrera en Servicios Escolares.<br>2. Realiza tu reinscripción normalmente.",
    
                // Nuevo trámite: Inscripción a Cursos de Verano
                "cursos de verano": "¿Qué desea saber sobre la Inscripción a Cursos de Verano?<br>◾Consulta de fechas<br>◾Solicitud en SICUVE<br>◾Confirmación de grupos<br>◾Pago de cursos<br>◾Verificación de reinscripción",
                "consulta de fechas": "1. Revisa el Calendario de Actividades Escolares para conocer las fechas de inscripción.",
                "solicitud en sicuve": "1. Ingresa al SICUVE en el portal del ITVH.<br>2. Selecciona 'Solicitar Materias', elige la materia, turno y propón un maestro.<br>3. Guarda tu solicitud.",
                "confirmación de grupos": "1. Verifica en el SICUVE los grupos autorizados.<br>2. Confirma los grupos que deseas cursar (máximo 2).",
                "pago de cursos": "1. Imprime la referencia bancaria y realiza el pago.<br>2. Entrega las fichas de depósito y el formato de solicitud al Coordinador.",
                "verificación de reinscripción": "1. Verifica en el SIE que estés reinscrito.<br>2. Recibe tu Carga Académica con el Coordinador.",
    
                // Nuevo trámite: Traslado de otro IT al ITVH
                "traslado a itvh": "¿Qué desea saber sobre el Traslado de otro IT al ITVH?<br>◾Solicitud de traslado<br>◾Envío de documentación<br>◾Oficio de aceptación<br>◾Constancia de no inconveniencia<br>◾Registro en Servicios Escolares<br>◾Pago de reinscripción<br>◾Reinscripción y carga académica",
                "solicitud de traslado": "1. Presenta la 'Solicitud de Traslado' en tu Instituto de origen al finalizar el semestre.",
                "envío de documentación": "1. Tu Instituto de origen envía la solicitud y el kárdex oficial al ITVH.",
                "oficio de aceptación": "1. El ITVH genera el 'Oficio de Aceptación' y lo envía a tu Instituto de origen.",
                "constancia de no inconveniencia": "1. Tu Instituto de origen elabora la 'Constancia de no Inconveniencia' y envía la documentación al ITVH.",
                "registro en servicios escolares": "1. Confirma que la documentación fue recibida en el ITVH.<br>2. Acude a Servicios Escolares para verificar tu registro.",
                "pago de reinscripción": "1. Acude a Recursos Financieros para darte de alta en el sistema de pagos.<br>2. Realiza el pago por concepto de reinscripción.",
                "reinscripción y carga académica": "1. Acude a la División de Estudios Profesionales para reinscribirte.<br>2. Recibe tu Carga Académica (horario)."
    
           };
    }

    obtenerRespuesta(tramite) {
        tramite = tramite.toLowerCase();
        return this.tramites[tramite] || null;
    }
}

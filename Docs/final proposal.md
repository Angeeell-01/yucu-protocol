# Propuesta final — Yucu Protocol

## 1. Resumen ejecutivo

Yucu Protocol es una propuesta de plataforma digital que busca facilitar la comunicación, organización y difusión de productos artesanales de la comunidad, utilizando herramientas tecnológicas para acercar a productores y compradores.

El proyecto busca apoyar a los artesanos mediante un espacio digital en el que puedan dar a conocer sus productos, mejorar la presentación de su información y facilitar el proceso de consulta e interacción con posibles compradores.

El módulo de trabajo correspondiente a esta propuesta se enfoca en mejorar el manejo de información durante las entrevistas y evitar el almacenamiento innecesario de datos personales de los compradores, especialmente nombres y números telefónicos.

La solución se plantea como un prototipo tecnológico que permitirá evaluar su funcionamiento, utilidad y viabilidad antes de considerar una implementación más amplia.

## 2. Problema y contexto

Durante el desarrollo del proyecto se identificó la necesidad de mejorar la forma en que se recopila, organiza y utiliza la información obtenida durante las entrevistas con compradores y personas interesadas en los productos artesanales.

El manejo de datos personales puede representar un riesgo si se almacenan datos que no son necesarios para el funcionamiento del sistema. Por esta razón, se busca que la pantalla de entrevistas permita registrar información útil para el análisis y seguimiento del proyecto, sin conservar nombres ni números telefónicos de los compradores.

Esta propuesta busca mejorar la privacidad de los participantes, reducir el manejo innecesario de información personal y establecer un proceso de recopilación de datos más seguro.

La evidencia específica del problema deberá respaldarse mediante las observaciones, entrevistas y actividades de campo realizadas durante los sprints anteriores.

## 3. Objetivo SMART y alcance

### Objetivo general

Desarrollar y probar un módulo de entrevistas dentro de Yucu Protocol que permita recopilar y organizar información relevante de compradores o personas interesadas, evitando almacenar nombres y números telefónicos, con el propósito de mejorar la privacidad y el manejo de los datos durante el desarrollo del prototipo.

### Objetivo SMART

Implementar y evaluar, durante el desarrollo de la Unidad 5, un módulo de entrevistas que permita registrar información necesaria para el análisis del proyecto sin almacenar nombres ni números telefónicos de los compradores, verificando su funcionamiento mediante pruebas y evidencias documentadas antes de la Feria de Integración programada para el 1 de diciembre.

### Alcance

El módulo contempla:

- Recopilación de información necesaria para las entrevistas.
- Registro de respuestas y datos relevantes para el análisis.
- Protección de la privacidad de los participantes.
- Eliminación del almacenamiento de nombres y números telefónicos de compradores.
- Validación del funcionamiento del módulo.
- Documentación de pruebas y resultados.

### Fuera del alcance

- Garantizar ventas o ingresos económicos.
- Implementar una solución comercial definitiva.
- Almacenar datos personales innecesarios.
- Garantizar certificaciones de productos artesanales.
- Administrar dinero de la organización.
- Considerar el prototipo como un sistema completamente terminado o en producción.

## 4. Solución y uso de Stellar

La solución consiste en desarrollar y adaptar el módulo de entrevistas de Yucu Protocol para que permita registrar información relevante sin almacenar nombres ni números telefónicos de los compradores.

El módulo permitirá que el equipo recopile información que pueda utilizarse para conocer las necesidades, opiniones e intereses de las personas participantes, manteniendo un enfoque de privacidad y minimización de datos.

Stellar se considera parte de la base tecnológica del proyecto Yucu Protocol, de acuerdo con la arquitectura y las funcionalidades que se encuentran documentadas en el repositorio.

Su uso se plantea como parte de la infraestructura tecnológica del proyecto y no como una garantía de ventas, ingresos, certificaciones o validación comercial.

### Estado de la solución

- **Real:** funcionalidades que ya se encuentran implementadas y pueden verificarse dentro del repositorio.
- **Simulado:** funcionalidades que se utilizan únicamente para demostrar el comportamiento del sistema.
- **Pendiente:** funcionalidades que todavía requieren implementación, validación o pruebas.

La clasificación deberá consultarse y mantenerse de acuerdo con la documentación del repositorio, especialmente el apartado `Qué es real y qué es simulado` del README.

## 5. Plan de trabajo y cronograma

| Actividad | Entregable | Método de verificación | Fecha | Responsable |
|---|---|---|---|---|
| Análisis del problema | Identificación de necesidades | Revisión de información y evidencias | [Fecha] | [Responsable] |
| Diseño del módulo | Diseño de funcionamiento | Revisión del diseño | [Fecha] | [Responsable] |
| Desarrollo | Módulo de entrevistas | Pruebas funcionales | [Fecha] | [Responsable] |
| Protección de datos | Manejo de información sin nombres ni teléfonos | Revisión de almacenamiento | [Fecha] | [Responsable] |
| Pruebas | Registro de pruebas | Evidencias de ejecución | [Fecha] | [Responsable] |
| Documentación | Documentación del módulo | Revisión de archivos | [Fecha] | [Responsable] |
| Presentación | Demostración del prototipo | Feria de Integración | 1 de diciembre | Equipo 6 |

El cronograma deberá ajustarse al calendario real del equipo y a las fechas de entrega establecidas.

## 6. Presupuesto y personal

El presupuesto contempla el tiempo de trabajo necesario para realizar las actividades de análisis, diseño, desarrollo, pruebas y documentación del proyecto.

| Actividad | Horas estimadas | Tarifa por hora | Costo estimado |
|---|---:|---:|---:|
| Análisis | [Horas] | [$] | [$] |
| Diseño | [Horas] | [$] | [$] |
| Desarrollo | [Horas] | [$] | [$] |
| Pruebas | [Horas] | [$] | [$] |
| Documentación | [Horas] | [$] | [$] |
| Calidad | [Horas] | [$] | [$] |
| **Total** | **[Total de horas]** | | **[Costo total]** |

Los costos deberán ser consistentes con las estimaciones realizadas durante los sprints anteriores, incluyendo el Plan de Calidad y el costo de calidad.

### Personal involucrado

- Coordinación del equipo.
- Análisis y documentación.
- Desarrollo del módulo.
- Pruebas y validación.
- Revisión de calidad.

Las responsabilidades se asignarán a los integrantes del equipo de acuerdo con su organización y disponibilidad.

## 7. Riesgos y viabilidad

| Riesgo | Probabilidad | Impacto | Respuesta |
|---|---|---|---|
| Si el módulo almacena datos personales innecesarios, entonces puede comprometer la privacidad de los participantes. | Media | Alto | Revisar los campos y eliminar el almacenamiento de nombres y teléfonos. |
| Si el desarrollo no termina en las fechas previstas, entonces se retrasarán las pruebas y la presentación. | Media | Alto | Priorizar funcionalidades esenciales y revisar avances periódicamente. |
| Si la conectividad es limitada, entonces algunas funcionalidades pueden no estar disponibles durante las pruebas. | Media | Medio | Realizar pruebas en diferentes condiciones y documentar limitaciones. |
| Si el prototipo presenta errores, entonces los resultados de la demostración pueden verse afectados. | Media | Alto | Ejecutar pruebas previas y corregir errores identificados. |

### Evaluación de viabilidad

El proyecto se considera viable como prototipo académico y tecnológico, siempre que se mantenga dentro del alcance definido, se utilicen los recursos disponibles y se realicen las pruebas correspondientes.

La decisión de continuar deberá revisarse considerando el tiempo disponible, los costos estimados, los recursos del equipo, los riesgos y la retroalimentación obtenida.

## 8. Evidencia y siguientes pasos

La evidencia del proyecto deberá incluir:

- Evidencia de las actividades de análisis.
- Registro de entrevistas sin información personal identificable.
- Historias de usuario y actividades de sprints anteriores.
- Diseño o prototipo del módulo.
- Enlaces a los commits y Pull Requests.
- Resultados de las pruebas.
- Registro de errores corregidos.
- Evidencia de funcionamiento del módulo.

### Siguientes pasos

1. Revisar los requerimientos del módulo.
2. Confirmar el alcance de la implementación.
3. Desarrollar las funcionalidades necesarias.
4. Realizar pruebas.
5. Corregir los errores identificados.
6. Documentar los resultados.
7. Preparar la demostración del prototipo.

## 9. Ética y datos personales

El proyecto busca respetar la privacidad de las personas participantes y utilizar únicamente la información necesaria para el desarrollo y evaluación del sistema.

No se almacenarán nombres ni números telefónicos de compradores en el módulo de entrevistas.

La información recopilada deberá utilizarse exclusivamente para los fines establecidos en el proyecto y deberá manejarse conforme a las políticas de privacidad y al documento `PRIVACIDAD.md` del repositorio.

Las entrevistas deberán realizarse con conocimiento y consentimiento de las personas participantes.

El prototipo no deberá utilizarse para prometer ventas, ingresos, certificaciones o resultados comerciales garantizados.

## 10. Calidad y trabajo en equipo

El desarrollo se realizará de manera colaborativa, procurando que cada integrante participe en las actividades asignadas y documente su trabajo mediante commits.

La calidad del proyecto se verificará mediante:

- Revisión del código.
- Pruebas funcionales.
- Validación de los requerimientos.
- Revisión de la documentación.
- Verificación del manejo de datos personales.
- Revisión cruzada por otro integrante o equipo.

Cada integrante deberá realizar al menos un commit relacionado con su actividad y otro miembro del equipo deberá revisar el Pull Request con comentarios que aporten mejoras o correcciones.

El equipo mantendrá una comunicación constante para identificar problemas, resolver bloqueos y cumplir con las fechas establecidas.

---

**Proyecto:** Yucu Protocol  
**Equipo:** Equipo 6  
**Unidad:** 4 — Sprint 4  
**Módulo:** #170  
**Fecha de revisión:** [Fecha]

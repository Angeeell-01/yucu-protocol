# Propuesta final del proyecto Yucu — Equipo 6

## 1. Resumen ejecutivo

Yucu es un proyecto que busca apoyar a organizaciones productivas de la región Mixteca mediante herramientas digitales para presentar sus productos y facilitar su trazabilidad.

Esta propuesta corresponde al módulo W27: pantalla de entrevistas que no almacena nombres ni números telefónicos de compradores. Su finalidad es reducir la recopilación de información personal y proteger la privacidad de quienes participan en las entrevistas.

La solución consiste en adaptar la pantalla para registrar únicamente la información necesaria, evitando conservar datos personales de compradores. El trabajo contempla diseño, implementación, pruebas y documentación.

El proyecto general contempla registrar 20 productos de dos cooperativas de Tlaxiaco y generar códigos QR verificables en una red de pruebas antes del 30 de noviembre de 2026.

El presupuesto de referencia es de $38,600 MXN, incluyendo $4,608 MXN estimados para calidad. La presentación está prevista para el 1 de diciembre de 2026.

## 2. Problema y contexto

Durante la planeación de Yucu se identificó la necesidad de proteger la información de los compradores durante las entrevistas realizadas por la organización.

Solicitar y conservar nombres o números telefónicos sin que sean necesarios aumenta los riesgos de exposición de información personal.

Por ello, el módulo W27 propone una pantalla que permita realizar entrevistas sin almacenar estos datos.

La propuesta retoma las historias de usuario de Sprint 1 y los requisitos de calidad y privacidad establecidos en los siguientes sprints.

La evidencia de campo deberá presentarse mediante observaciones y registros anónimos, sin publicar información que permita identificar a los participantes. No se atribuyen cifras ni testimonios que no estén documentados.

## 3. Objetivo SMART y alcance

**Objetivo:** Adaptar y validar, antes del 30 de noviembre de 2026, la pantalla de entrevistas del módulo W27 para evitar el almacenamiento de nombres y números telefónicos de compradores, mediante pruebas funcionales y revisión del tratamiento de datos, con la finalidad de proteger su privacidad.

**Criterios SMART:**

- **S — Específico:** adaptar la pantalla de entrevistas.
- **M — Medible:** comprobar que no se almacenen nombres ni teléfonos de compradores.
- **A — Alcanzable:** utilizar la estructura y tecnologías existentes en Yucu.
- **R — Relevante:** mejorar la privacidad de los participantes.
- **T — Temporal:** completar la validación antes del 30 de noviembre de 2026.

**Incluye:**
- Revisión de los campos de entrevistas.
- Adaptación de la pantalla.
- Prevención del almacenamiento de nombres y teléfonos.
- Pruebas con información ficticia.
- Documentación de resultados.

**No incluye:**
- Bases de datos de contactos.
- Seguimiento mediante teléfonos personales.
- Garantías de ventas o ingresos.
- Certificaciones de seguridad.
- Almacenamiento de datos personales en Stellar.

## 4. Solución y uso de Stellar

Se propone adaptar la pantalla de entrevistas para que no solicite ni conserve nombres o números telefónicos de compradores.

La solución contempla revisar los formularios, solicitudes y mecanismos de almacenamiento relacionados con el módulo, además de realizar pruebas que permitan verificar su funcionamiento.

Stellar se utilizará únicamente para las funciones de trazabilidad que correspondan al proyecto general. Se empleará una red de pruebas y no se publicarán datos personales en la cadena de bloques.

**Estado de la solución:**

| Elemento | Estado |
|---|---|
| Proyecto Yucu | Existente |
| Requisitos W27 | Identificados |
| Adaptación de pantalla | Por implementar o verificar |
| Pruebas de privacidad | Por documentar |
| Integración Stellar | Sujeta al alcance técnico |

La distinción entre funcionalidades reales y simuladas se documentará en la tabla correspondiente del `README.md`.

## 5. Plan de trabajo y cronograma

| Entregable | Actividad | Verificación | Fecha | Responsable |
|---|---|---|---|---|
| E1 | Análisis de requisitos | Revisión de historias de usuario | 24/11/2026 | @maricruz2362 |
| E2 | Diseño de pantalla | Revisión del diseño | 25/11/2026 | @carla1122 |
| E3 | Adaptación del módulo | Revisión de código y PR | 27/11/2026 | @sahid092 |
| E4 | Pruebas de privacidad | Resultados de pruebas | 28/11/2026 | @aldair-SVG |
| E5 | Documentación | Revisión de evidencias | 30/11/2026 | @maricruz2362 |
| E6 | Presentación | Demostración del módulo | 01/12/2026 | Equipo 6 |

El seguimiento se realizará mediante GitHub Projects, utilizando los estados pendiente, en progreso, en revisión y completado.

## 6. Presupuesto y personal

El proyecto cuenta con las siguientes estimaciones económicas de la planeación anterior:

| Concepto | Estimación |
|---|---:|
| Presupuesto general | $38,600 MXN |
| Horas de prevención de calidad | 30 h |
| Horas de corrección de calidad | 18 h |
| Total de horas de calidad | 48 h |
| Tarifa de referencia | $80 MXN/h |
| Coste base de calidad | $3,840 MXN |
| Reserva adicional (20 %) | $768 MXN |
| Coste de calidad estimado | $4,608 MXN |

El proyecto contempla una carga de trabajo estimada de 300 horas y una disponibilidad mínima de 13 personas al 80 %, según la planeación de Sprint 3.

El Equipo 6 realizará las actividades académicas y de seguimiento mediante los siguientes integrantes:

- @maricruz2362: coordinación y documentación.
- @sahid092: desarrollo.
- @carla1122: diseño y revisión.
- @aldair-SVG: pruebas y validación.

El coste de calidad está incluido en la estimación general y no debe sumarse nuevamente al presupuesto.

La distribución definitiva de horas y costes por entregable se registrará conforme a las estimaciones y horas reales del tablero, evitando asignar importes no comprobados.

## 7. Riesgos y viabilidad

**Matriz de riesgos**

| Riesgo | Probabilidad | Impacto | Respuesta | Responsable |
|---|---|---|---|---|
| Almacenamiento accidental de datos personales | Media | Alto | Revisar formularios y almacenamiento. | @sahid092 |
| Fallas en las pruebas | Media | Alto | Repetir pruebas y documentar resultados. | @aldair-SVG |
| Retrasos en el desarrollo | Media | Medio | Dar seguimiento al cronograma. | @maricruz2362 |
| Exposición de información en evidencias | Baja | Alto | Utilizar datos ficticios y revisar documentos. | @carla1122 |

**Viabilidad económica**

La evaluación de Sprint 3 estimó una cobertura de financiación de 0.84 en el escenario base y 0.34 en el pesimista. Una reducción de costes del 15 % permitiría aproximarse a una cobertura de 0.99.

Estos valores son estimaciones y no representan financiamiento confirmado.

**Decisión: GO CONDICIONAL.**

Se recomienda continuar siempre que se mantenga el presupuesto, exista disponibilidad de recursos, se cumplan los requisitos de privacidad y se atiendan los riesgos identificados.

Si la financiación o las condiciones técnicas no son suficientes, deberá revisarse el alcance antes de continuar.

## 8. Evidencia y siguientes pasos

**Evidencias consideradas:**

- Historias de usuario de Sprint 1.
- Plan de Calidad de Sprint 2.
- Estimaciones económicas.
- Matriz de riesgos de Sprint 3.
- Evaluación Go/No-Go.
- Código y pruebas del módulo W27.
- Aviso de privacidad `PRIVACIDAD.md`.
- Documentación del proyecto Yucu.

**Siguientes pasos:**

| Actividad | Fecha |
|---|---|
| Revisar requisitos | 24/11/2026 |
| Completar diseño | 25/11/2026 |
| Implementar cambios | 27/11/2026 |
| Ejecutar pruebas | 28/11/2026 |
| Revisar documentación | 30/11/2026 |
| Presentar resultados | 01/12/2026 |

El equipo documentará los resultados y las limitaciones encontradas. Las pruebas utilizarán información ficticia y las evidencias públicas no contendrán datos personales de integrantes de la comunidad.

La solución es un prototipo; no garantiza ventas, ingresos ni certificaciones. Los conocimientos tradicionales, diseños y productos de la organización deberán respetarse conforme a los acuerdos establecidos.


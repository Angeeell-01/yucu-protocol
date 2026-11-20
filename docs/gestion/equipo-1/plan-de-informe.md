# Plan de informe · Equipo 1

**Módulo:** cobro en pesos desde la cuenta de la artesana ([#112](https://github.com/Open-Hub-Tec/yucu-protocol/issues/112) y [#114](https://github.com/Open-Hub-Tec/yucu-protocol/issues/114)).
**Organización:** <!-- TODO: nombre de la organización (nunca nombres de personas) -->
**Issue:** [#197](https://github.com/Open-Hub-Tec/yucu-protocol/issues/197) · Sub-issue [#207](https://github.com/Open-Hub-Tec/yucu-protocol/issues/207)

Este plan dice a quién le informamos, qué, cuándo y por qué medio. Se aplica desde el Sprint 4 hasta la Feria de Integración (1 de diciembre de 2026).

## Destinatarios

| Destinatario | Qué necesita saber para decidir |
|---|---|
| **Organización** (<!-- TODO: cargo, p. ej. la presidenta del comité -->) | Qué vamos a probar con ellas y cuándo, cuánto tiempo les pedimos, qué cambió desde la última visita y si necesitamos que decidan algo (fechas, lugar, la carta). Nunca se le pide dinero. |
| **Product Owner (docente)** | Avance contra el plan de la propuesta, entregables terminados, horas y costo reales contra los estimados, bloqueos y decisiones que le pedimos. |
| **Equipo** (<!-- TODO: @usuarios -->) | Qué tarea tiene cada quien en el tablero, fechas, bloqueos y acuerdos de las minutas. |
| **Equipo revisor (Equipo 3)** | Qué PR están listos para revisión cruzada. |
| **Financiador** | No aplica por ahora: el proyecto no tiene financiamiento externo. <!-- TODO: confirmar --> |

## Matriz de comunicación

<!-- PROPUESTA: días sugeridos por el asistente; confirmen días y responsables con el equipo. -->

| Qué se informa | A quién | Cuándo | Medio | Quién responde | Evidencia que se guarda |
|---|---|---|---|---|---|
| Informe semanal (1 página) | Product Owner | Cada lunes | Archivo `informe-semana-N.md` en PR | <!-- TODO: @eduScrumMaster --> | El PR y el archivo en `docs/gestion/equipo-1/` |
| Resumen para la organización | Organización (cargo del contacto) | Cada viernes y 2 días antes de cada visita | Nota de voz de un minuto o mensaje corto; hoja impresa en la visita | <!-- TODO: @usuario --> | Solo el **texto** de la nota en el informe; el audio no se sube al repo |
| Avance del tablero | Equipo | Diario (reunión corta) | GitHub Projects | Cada responsable de tarea | Historial del tablero |
| Acuerdos de reunión | Equipo y organización | Al terminar cada reunión | Minuta en `minutas/` | Quien toma la minuta (rota) | Minuta en el repo y tarea en el tablero por cada acuerdo |
| Alerta ámbar o rojo | Product Owner y, si afecta una fecha, la organización | En cuanto cambie el semáforo | Comentario en la issue #197; mensaje a la organización | <!-- TODO: @eduScrumMaster --> | Comentario en la issue |
| PR listo para revisión | Equipo 3 | Al abrir el PR | Mención en el PR | <!-- TODO: @usuario --> | Revisiones del PR |

## Formato del informe

Cada informe cabe en **una página** y lleva siempre estas partes, en este orden:

1. **Periodo:** fechas que cubre.
2. **Semáforo:** verde, ámbar o rojo (ver abajo) y una frase de por qué.
3. **Avance contra lo planeado:** entregables planeados contra terminados en el periodo, según el cronograma de la [propuesta](./propuesta.md).
4. **Entregables terminados:** con enlace al PR o a la evidencia.
5. **Indicadores:** los de la sección siguiente.
6. **Siguientes pasos:** con fecha y `@usuario`.
7. **Bloqueos:** qué nos detiene y qué estamos haciendo.
8. **Decisiones que pedimos:** a quién y para cuándo.
9. **Resumen para la organización:** el texto, en lenguaje sencillo, que se le envió por nota de voz o en hoja impresa.

## Indicadores de avance

| Indicador | Cómo se calcula | De dónde sale el dato |
|---|---|---|
| Entregables terminados contra planeados | Tarjetas en la columna "Hecho" ÷ tarjetas planeadas para la fecha | GitHub Projects del equipo (<!-- TODO: enlace -->), filtrado por la iteración |
| Horas reales contra estimadas | Suma del campo "Horas reales" ÷ suma del campo "Horas estimadas" | Campos numéricos personalizados del tablero en GitHub Projects <!-- TODO: confirmar que existen o usar hoja de cálculo --> |
| Costo acumulado | Horas reales × tarifa de la propuesta | Hoja de cálculo del equipo (<!-- TODO: enlace -->) |
| Burn-up | Entregables terminados acumulados contra el alcance total | Vista de gráfica (Insights) de GitHub Projects, o burndown en la hoja de cálculo |
| PR fusionados y revisados | Número de PR fusionados en el periodo | Pestaña de Pull requests filtrada por el equipo |

## Semáforo y escalamiento

| Color | Definición medible | Acción |
|---|---|---|
| 🟢 **Verde** | Entregables terminados ≥ 90 % de los planeados a la fecha **y** horas reales ≤ 110 % de las estimadas. | Se informa en el reporte normal. |
| 🟡 **Ámbar** | Entregables entre 70 % y 89 % de lo planeado, **o** horas reales entre 111 % y 130 %, **o** un bloqueo de más de 2 días. | El eduScrum Master avisa al Product Owner en la issue #197 en menos de 24 horas y el equipo replanea en su siguiente reunión. |
| 🔴 **Rojo** | Entregables < 70 % de lo planeado, **o** horas reales > 130 %, **o** una fecha comprometida con la organización en riesgo. | Aviso el mismo día al Product Owner; se propone recortar alcance o mover la fecha. |

**Aviso a la organización:** si una fecha comprometida con la organización (visita, prueba, lectura de la carta) está en riesgo, se le avisa **al menos 3 días antes**, por nota de voz o mensaje y con una nueva fecha propuesta. <!-- TODO: confirmar el plazo con la organización -->

## Herramientas

| Herramienta | Para qué | Por qué (costo, conectividad, quién la usa) |
|---|---|---|
| GitHub Projects | Tablero de tareas, horas y burn-up | Gratis; ya lo usa todo el equipo y el docente lo revisa. Necesita internet, pero solo lo usamos nosotros. |
| Issues y milestones | Entregables con fecha y responsable | Gratis; cada acuerdo de minuta se vuelve issue o tarjeta y el milestone muestra el avance. |
| Insights de GitHub Projects | Gráfica de burn-up | Gratis y sale del mismo tablero, sin capturar datos dos veces. |
| Hoja de cálculo | Costo acumulado y burndown de respaldo | Gratis; funciona sin conexión y se sincroniza después. |
| Nota de voz | Resumen de un minuto para la organización | Es como ya se comunican; ocupa pocos datos y se descarga cuando hay señal. Se dice en <!-- TODO: español / tu'un savi --> según prefiera la organización. |
| Hoja impresa | Resumen de una página que se entrega en la visita | No necesita señal ni celular; se queda con ellas para consultar en asamblea. |

## Adaptación a la comunidad

- El resumen para la organización usa lenguaje sencillo, sin palabras técnicas (nada de "PR", "testnet" o "USDC") y cabe en una nota de voz de un minuto o en media hoja.
- Respeta su idioma (<!-- TODO -->) y sus horarios: se envía el viernes por la tarde <!-- PROPUESTA: preguntar a la organización qué día y hora le conviene -->, nunca en horario de trabajo en el telar o de asamblea.
- Si no hay señal, la nota de voz llega cuando el teléfono se conecte, y en cada visita se entrega la hoja impresa. Nunca dependemos de que haya internet en la comunidad.
- Nunca se guardan ni se publican audios, fotos, nombres o teléfonos de personas de la comunidad ([PRIVACIDAD.md](../../research/PRIVACIDAD.md)).

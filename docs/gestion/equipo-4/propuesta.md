## Resumen ejecutivo

La evidencia de pruebas de usabilidad y el alcance del módulo #182 muestran fricciones que pueden impedir que personas artesanas usen Yucu con confianza: el sello se confundió con un cobro o trámite, hubo temor de borrar o dañar el teléfono y el uso de mantener presionado el micrófono no resultó intuitivo. La propuesta del Equipo 4 mejora estas pantallas con explicaciones sencillas, acciones cancelables y controles de voz accesibles, incluida una opción para escuchar el texto y una alternativa visible si el dispositivo no cuenta con voz en español. Las personas usuarias y el equipo comunitario son quienes se beneficiarían; los cambios no implican pagos ni certificaciones. La meta es entregar y verificar el alcance acordado del módulo para la presentación del **1 de diciembre de 2026**. El esfuerzo se estima en **68 horas-persona, valorizadas en MXN $10,200** (a MXN $150/h); es un costo de oportunidad académico, no un gasto de caja ni financiamiento confirmado. El plan supone herramientas existentes sin costo incremental y debe detenerse o reducirse si no hay horas voluntarias disponibles.

## Problema y contexto

Las pruebas cualitativas documentadas en [Hito 1.2: auditoría de fricción UX](../../ux-testing/HITO_1.2_AUDITORIA_FRICCION_UX.md) abarcaron siete personas en cuatro comunidades; son evidencia exploratoria, no una muestra estadística. En la evidencia se describen vacilación al inicio, preocupación por “borrar” o “romper” el teléfono, dificultad con texto pequeño y confusión del sello con un trámite o cobro. El issue del módulo #182 también registra que una persona mantuvo el micrófono presionado en vez de tocarlo para iniciar. Estos hallazgos respaldan una solución de lenguaje claro, botones de cancelar/regresar y controles de voz con más de una forma de uso.

La validación con compradores también registra confusión ante términos técnicos y un SUS de 55/100 en una prueba con tres estudiantes que simularon consumidores; el propio informe advierte que no fueron compradores reales. Se utiliza como señal para simplificar y volver a probar, no como una medición representativa de la comunidad ([Hito 1.3](../../ux-testing/HITO_1.3_VALIDACION_COMPRADORES.md)). Los resúmenes públicos no reproducen nombres, voces, fotografías, teléfonos ni identificadores de participantes; cualquier material fuente identificable debe permanecer fuera del repositorio conforme a [PRIVACIDAD.md](../../research/PRIVACIDAD.md).

## Objetivo SMART y alcance

- **S — Específico:** entregar para el módulo #182 textos centralizados para sus pantallas, una explicación del sello, acciones importantes cancelables, control de micrófono por toque y por mantener/pulsar, límite de grabación de 60 segundos y un componente reutilizable “Escuchar”.
- **M — Medible:** antes del **1 de diciembre de 2026**, verificar con pruebas automatizadas todos los comportamientos aplicables descritos en el issue #182; comprobar que cancelar no envía una grabación, que el límite detiene la captura y que la ausencia de voz española no produce un fallo. Revisar además que cada pantalla de artesanía incluida tenga una acción de regreso o cancelación.
- **A — Alcanzable:** limitar el trabajo a las pantallas y componentes del módulo #182, reutilizando la arquitectura y herramientas ya disponibles; el plan reserva 68 horas-persona del equipo y no incluye desarrollo de nuevos contratos.
- **R — Relevante:** responde directamente a fricciones observadas de comprensión, seguridad percibida y uso de voz, y respeta el principio de que la persona usuaria revisa y confirma lo que firma.
- **T — Temporal:** completar integración, pruebas y evidencia revisable a más tardar el **1 de diciembre de 2026**.

**Incluye:** microcopy en español claro; explicación del sello sin llamarlo oficial o certificado; confirmación previa y cancelar/regresar; grabación por toque-toque y mantener-soltar con contador, indicador visual y máximo de 60 segundos; lectura por voz con preferencia `es-MX`, opción de repetir y aviso/texto visible de respaldo; pruebas, revisión de accesibilidad y evidencia sin datos personales.

**No incluye:** pagos, wallets o manejo de fondos; cambios a contratos Soroban; transcripción por IA; traducción automática o una experiencia Mixteca ya validada; despliegue productivo, auditoría o certificación; garantizar ventas, ingresos o resultados de campo. Toda ampliación requiere nueva estimación y acuerdo.

## Solución y uso de Stellar

Se propone una capa de interacción comprensible alrededor de las acciones del módulo: explicar en lenguaje sencillo qué hace el sello, anunciar qué ocurrirá antes de guardar o enviar, permitir cancelar, ofrecer grabación con dos gestos equivalentes y una alternativa de lectura accesible. El componente de escucha usará las voces disponibles del navegador priorizando `es-MX`; si no existe voz en español, conservará el texto en pantalla y mostrará un aviso, sin bloquear el flujo. La persona conserva la revisión y decisión final; la interfaz no presentará una sugerencia automática como verificación.

Stellar es relevante al contexto de Yucu porque el pasaporte de lote y la verificación de origen se apoyan en registros de Stellar; esta actividad no altera contratos ni realiza transacciones. El trabajo de accesibilidad se ejecuta en la interfaz y debe mantenerse separado de cualquier afirmación sobre una operación real en cadena. Para los estados generales del producto se debe consultar la tabla [“Implementation status / Qué es real y qué es simulado” del README](../../../README.md#implementation-status): el PWA y almacenamiento sin conexión se describen como reales; los contratos están en testnet, y varios adaptadores, APIs y datos de demo son simulados o parciales. En particular, los ejemplos de demo usan datos inventados; no se usarán datos de participantes en pruebas o capturas.

Para este módulo, lo **real al cierre** será únicamente lo integrado y respaldado por pruebas en la rama; lo **demostrativo** será cualquier recorrido mostrado con datos inventados y claramente identificado como demo; lo **pendiente** será cualquier voz, traducción, integración o comportamiento que aún no haya pasado la verificación indicada en #182. No se afirmará que un cambio está listo antes de ser revisado y probado.

## Plan de trabajo y cronograma

Fechas de trabajo propuestas: **24 de noviembre al 1 de diciembre de 2026**. Cada entrega incluye responsable y verificación; la estimación de esfuerzo está detallada en la sección de presupuesto.

| Entrega | Qué se entrega y cómo se verifica | Fecha | Responsable |
|---|---|---|---|
| D1. Requisitos y trazabilidad | Lista de criterios de #182 vinculada a pantallas y casos de prueba; revisión cruzada por el equipo. | 24 nov 2026 | @Paola939 |
| D2. Textos y flujo cancelable | Archivo de textos del módulo, explicación del sello y estados de confirmación/cancelación; revisión de contenido y recorrido manual. | 25–26 nov 2026 | @23620030 |
| D3. Voz y escucha | Interacción de grabación por toque-toque y mantener-soltar, contador/límite, cancelar y componente “Escuchar”; pruebas positivas y negativas, incluida ausencia de voz española. | 26–28 nov 2026 | @mayraglez917 |
| D4. Integración y calidad | Integración en pantallas del módulo; ejecución y revisión de pruebas; lista de fallos y correcciones. | 29–30 nov 2026 | @Maritza2893 |
| D5. Evidencia y demostración | Capturas de interfaz con datos inventados, lista de criterios verificados y notas de pendientes; revisión de privacidad antes de compartir. | 1 dic 2026 | @Paola939 |
| D6. Coordinación y cierre | Seguimiento del tablero, revisión de cambios y resumen de decisiones/pendientes; verificación de que el PR enlaza `Resolves #215`. | 24 nov–1 dic 2026 | @Paola939 |

## Presupuesto y personal

Estimación de planeación, no cotización: **68 horas-persona × MXN $150/h = MXN $10,200** de costo de oportunidad. La tarifa es un supuesto para comparar esfuerzo, no un pago acordado. El desembolso previsto es **MXN $0** únicamente si se usan los equipos y herramientas académicas ya disponibles; no hay una fuente de financiamiento confirmada ni se presume que la comunidad pagará. Si se requiere compra, servicio pagado o trabajo remunerado, se detiene y se vuelve a estimar antes de continuar.

| Entrega | Horas | Tarifa estimada | Costo estimado |
|---|---:|---:|---:|
| D1. Requisitos y trazabilidad | 8 | MXN $150/h | MXN $1,200 |
| D2. Textos y flujo cancelable | 12 | MXN $150/h | MXN $1,800 |
| D3. Voz y escucha | 16 | MXN $150/h | MXN $2,400 |
| D4. Integración y calidad | 16 | MXN $150/h | MXN $2,400 |
| D5. Evidencia y demostración | 8 | MXN $150/h | MXN $1,200 |
| D6. Coordinación y cierre | 8 | MXN $150/h | MXN $1,200 |
| **Total** | **68** |  | **MXN $10,200** |

Distribución de planeación: @Paola939 17 h; @23620030 17 h; @mayraglez917 17 h; @Maritza2893 17 h. **Total: 68 h.** Cada integrante registrará su esfuerzo real en el tablero; una distribución estimada no acredita commits individuales.

**Costo de calidad (CoQ), incluido —no sumado otra vez— en las 68 horas:** prevención, 4 h / MXN $600 (criterios, revisión de textos y accesibilidad); evaluación, 8 h / MXN $1,200 (pruebas funcionales, revisión cruzada y privacidad de evidencia); corrección interna/reserva de retrabajo, 4 h / MXN $600. Total CoQ: **16 h / MXN $2,400**; trabajo restante: 52 h / MXN $7,800. Este desglose es una estimación de trabajo para este plan y debe cotejarse con la hoja de costo de calidad de Sprint 2 antes de tomarlo como dato histórico o presupuesto autorizado.

## Riesgos y viabilidad

**Decisión: Go condicional.** Se puede continuar como entrega académica si las cuatro personas confirman disponibilidad de 17 horas cada una, se conservan herramientas sin costo y las pruebas se hacen con datos ficticios. El valor estimado del trabajo es MXN $10,200, pero no existe financiamiento confirmado: solo es viable como esfuerzo académico voluntario en especie. Si se requiere pagar trabajo, adquirir servicios o financiar una operación de campo, la decisión pasa a **No-Go** hasta tener presupuesto y autorización explícitos. El desembolso previsto de MXN $0 no debe confundirse con costo económico cero.

| Si… entonces… | Probabilidad | Impacto | Respuesta | Responsable |
|---|---|---|---|---|
| Si los equipos no ofrecen voz `es-MX` o voz española, entonces el lector no puede depender de audio. | Media | Medio | Probar detección de voz; mostrar texto legible y aviso, sin impedir completar el flujo. | @mayraglez917 |
| Si el cambio de gestos del micrófono provoca envíos accidentales, entonces se arriesga la confianza y la privacidad. | Media | Alto | Mantener acción explícita de cancelar; probar toque-toque, mantener-soltar y cancelación; no guardar ni enviar al cancelar. | @Maritza2893 |
| Si una pantalla incluida queda sin cancelar/regresar, entonces la persona puede temer perder datos o quedar atrapada. | Media | Alto | Usar una lista de pantallas y recorrer cada flujo antes de integrar; bloquear entrega hasta resolver excepciones. | @23620030 |
| Si el equipo no dispone de las 68 horas o aparece costo de herramientas, entonces el total y la fecha dejan de ser viables. | Media | Alto | Confirmar horas y gasto antes de empezar; reducir alcance sin quitar las salvaguardas esenciales o declarar No-Go y replanificar. | @Paola939 |
| Si la evidencia incorpora datos personales, entonces no se publica ni se comparte en el repositorio. | Baja | Alto | Usar datos ficticios; revisar capturas y documentos contra [PRIVACIDAD.md](../../research/PRIVACIDAD.md); retirar evidencia no conforme antes del PR. | @Paola939 |

## Evidencia y siguientes pasos

**Evidencia revisable:**

- [Hito 1.2: auditoría de fricción UX](../../ux-testing/HITO_1.2_AUDITORIA_FRICCION_UX.md), resumen de pruebas exploratorias y hallazgos.
- [Hito 1.3: validación con compradores](../../ux-testing/HITO_1.3_VALIDACION_COMPRADORES.md), incluyendo las limitaciones de muestra y medición.
- [Issue #182: alcance y criterios del módulo](https://github.com/Open-Hub-Tec/yucu-protocol/issues/182).
- [README: estado de implementación](../../../README.md#implementation-status), para diferenciar componentes reales, demo y pendientes.
- Pruebas y capturas que se agreguen con el trabajo; deben usar datos inventados y pasar la revisión de privacidad. Los originales con información identificable se mantienen fuera del repositorio.
- Carta de entendimiento #217: el estado de consulta, aprobación o firma debe confirmarse por el equipo; esta propuesta no presume que esté firmada. No subir la carta firmada ni evidencia de firmas.

**Siguientes pasos con fecha:**

1. **24 nov 2026:** confirmar disponibilidad de las 68 horas, alcance y tablero; si no se confirma, revisar Go condicional.
2. **25 nov 2026:** validar microcopy y criterios de aceptación con el equipo; registrar acuerdos en el tablero.
3. **28 nov 2026:** completar revisión funcional inicial de voz, cancelación y fallback de lectura.
4. **30 nov 2026:** ejecutar revisión cruzada de pruebas, accesibilidad y privacidad; corregir bloqueos.
5. **1 dic 2026:** presentar solo lo que esté integrado y verificado, con pendientes explícitos; actualizar el estado de la carta #217 cuando el equipo confirme evidencia y decisión.

## Calidad y trabajo en equipo

La entrega requiere redacción clara, criterios trazables a #182, revisión de privacidad y evidencia comprobable. El equipo se autoevaluará con la rúbrica y solicitará revisión sustantiva de otro equipo en el PR. Cada integrante debe realizar al menos un commit propio y otra persona debe revisar el PR con comentarios sustantivos; esas acciones se registrarán en GitHub y no se consideran completadas por esta estimación. La calidad se mide por pruebas y revisión, no por promesas de que el cambio está listo antes de ejecutarse.

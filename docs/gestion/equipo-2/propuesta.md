# Propuesta Final · Equipo 2 — Sprint 4

**Módulo:** [#140 · Attestation specification with test vectors](https://github.com/Open-Hub-Tec/yucu-protocol/issues/140)  
**Sub-issue:** [#209](https://github.com/Open-Hub-Tec/yucu-protocol/issues/209) · **Entrega:** 2026-11-16  
**Organización:** [NOMBRE_LEGAL_DE_LA_ORGANIZACIÓN] · **eduScrum Master:** @usuario-por-asignar

> **Estado del borrador:** los campos entre corchetes se sustituyen con los datos reales antes de abrir el PR. Los integrantes aparecen solo con su `@usuario`; no se publican nombres de personas de la comunidad.

## Resumen ejecutivo

El módulo de atestaciones de Yucu (#140) necesita una especificación exacta para que otro equipo pueda reproducir los mismos identificadores en Stellar sin pedir datos personales a compradores ni artesanas. El trabajo de campo exploratorio con 14 personas (11 compradores o consumidores y 3 estudiantes) mostró un puntaje SUS de 55, por debajo de la referencia de 68, y evidencia de que la interfaz de entrevista no debe conservar nombres ni teléfonos. Proponemos entregar `ATTESTATION_SPEC.md`, cinco manifiestos de esquema con privacidad obligatoria por campo, la implementación de referencia `ids.ts` y al menos seis vectores de prueba verificables. Benefician a la organización y a los equipos 5 y 7, que dependen de esta especificación. El costo total es [$MONTO_TOTAL] MXN y la entrega final se presenta en la Feria de Integración del 2026-12-01.

## Problema y contexto

La organización necesita comprobar el origen de sus productos sin exponer a las personas que participan en las entrevistas. El consolidado público de validación ([Hito 1.3](https://github.com/Open-Hub-Tec/yucu-protocol/blob/main/docs/ux-testing/HITO_1.3_VALIDACION_COMPRADORES.md)) registra 14 participantes: 11 compradores o consumidores y 3 estudiantes; el único SUS medido fue 55 (participantes con puntajes 70, 45 y 50), menor a la referencia 68. El propio consolidado advierte que no hay tiempos por tarea medidos con compradores reales y que hacen falta de 5 a 8 compradores reales en una siguiente ronda.

Cita anónima registrada en el trabajo de campo (rol y municipio, sin nombre): “prefiero ver de dónde viene el producto antes que dar mis datos de contacto”. Observación de campo: las fichas originales, audios y fotos se resguardan fuera del repositorio, conforme a [PRIVACIDAD.md](https://github.com/Open-Hub-Tec/yucu-protocol/blob/main/docs/research/PRIVACIDAD.md). Por ello los esquemas de #140 prohíben campos de nombre, teléfono y coordenadas: la ubicación se expresa como código de municipio y la información sensible va en un hash con sal.

## Objetivo SMART y alcance

**Objetivo SMART:** antes del 2026-12-01, entregar 1 especificación, 5 manifiestos de esquema, 1 implementación de referencia y 6 vectores de prueba que pasen con 100% de coincidencia, para que los equipos 5 y 7 puedan construir sobre `ids.ts` sin inventar identificadores.

- **Específico:** definir el formato `yucu:1:<subject_ref>:<salted hash>[:<ref_uid>]`, el manifiesto de cada esquema con `privacy` obligatorio y las claves del índice.
- **Medible:** 5 esquemas, 6 vectores, 100% de pruebas verdes, 0 campos de datos personales.
- **Alcanzable:** se reutilizan ADR-005 y ADR-007 y WebCrypto, sin dependencias nuevas.
- **Relevante:** desbloquea #141, #142, #162, #163 y #164.
- **Con plazo:** 2026-12-01, Feria de Integración.

**Incluye:** especificación en inglés, manifiestos JSON, `src/core/attestations/ids.ts`, vectores y pruebas.  
**No incluye (fuera del alcance):** contrato núcleo, resolvers, despliegue en mainnet, emisión de certificaciones ni manejo de fondos. Tampoco incluye nombres, teléfonos ni grabaciones de la comunidad.

## Solución y uso de Stellar

Se construye una especificación determinista para atestaciones sobre Attest Protocol en la red de prueba de Stellar. Cada atestación usa un `subject_ref` con prefijo (`lot:`, `item:`, `addr:`, `sale:`), un hash con sal aleatoria de al menos 16 bytes y un `value` de longitud fija. Los manifiestos declaran cada campo como `public`, `hash-only` o `forbidden`; por eso la pantalla de entrevista no necesita guardar nombre ni teléfono del comprador. El índice define `BySubject`, `ByAttester`, `ByRecipient`, `Status` y `SchemaStats`, con contadores y listas consecutivas.

Stellar aporta identificadores reproducibles, firmas en el dispositivo de la persona y un registro verificable sin que Yucu sea custodio. La organización no recibe llaves ni dinero: se sigue el patrón preparar → firmar en el teléfono → enviar (ADR-003 y ADR-004).

**Qué es real:** contratos Soroban en testnet con pruebas, puertos definidos en `src/core/chain/`, ADR-005 y ADR-007 aceptados, documentación de campo anonimizada.  
**Qué es demostración:** adaptadores simulados, catálogo con datos ficticios y respuestas de IA sin clave real.  
**Qué está pendiente:** la implementación de #140 y las siguientes (#141, #142). Estado detallado en la tabla [“Qué es real y qué es simulado” del README](https://github.com/Open-Hub-Tec/yucu-protocol/blob/main/README.md#implementation-status).

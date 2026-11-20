# Propuesta final del proyecto Raíz
## Equipo 6 — Sprint 4

**Institución:** Instituto Tecnológico de Tlaxiaco — TecNM  
**Carrera:** Ingeniería en Sistemas Computacionales  
**Asignatura:** Gestión de Proyectos de Software  
**Equipo:** 6  
**Fecha de elaboración:** 20 de noviembre de 2026  
**Fecha objetivo:** 30 de noviembre de 2026

**Integrantes:**
- @maricruz2362
- @sahid092
- @carla1122
- @aldair-SVG

---

## 1. Resumen ejecutivo

El proyecto Raíz propone una herramienta digital para facilitar la consulta y presentación de productos de organizaciones artesanales de la región Mixteca de Oaxaca.

La solución contempla un catálogo digital con 20 productos de 2 cooperativas de Tlaxiaco y códigos QR vinculados a registros demostrativos verificables en Stellar testnet. El propósito es facilitar la consulta de información y demostrar el uso de tecnologías de registro verificable, sin prometer resultados comerciales ni operaciones financieras reales.

El proyecto tiene un costo estimado de **$38,600 MXN** y una fecha objetivo de conclusión del 30 de noviembre de 2026. Los principales beneficiarios serán las organizaciones participantes y las personas interesadas en conocer sus productos.

La propuesta se desarrollará mediante actividades de análisis, integración técnica, documentación, pruebas y validación, distribuidas entre los cuatro integrantes del equipo.

## 2. Problema y contexto

Las organizaciones artesanales necesitan medios accesibles para presentar información sobre sus productos y facilitar que otras personas puedan consultarla.

La propuesta de Raíz responde a esta necesidad mediante un catálogo digital que organiza la información de los productos y permite acceder a sus registros mediante códigos QR.

El proyecto se relaciona con el trabajo de acercamiento y las historias de usuario desarrolladas en el Sprint 1. La información de campo deberá respaldarse con las observaciones, entrevistas anonimizadas y registros que realmente haya recopilado el equipo.

**Evidencia de campo:** se incorporarán los hallazgos documentados de las actividades del Sprint 1. No se atribuirán citas, cantidades ni opiniones a integrantes de las cooperativas sin contar con registros que las respalden.

La solución respetará la identidad, los conocimientos tradicionales y las decisiones de las organizaciones participantes.

## 3. Objetivo SMART y alcance

### Objetivo SMART

Registrar 20 productos de 2 cooperativas de Tlaxiaco en la aplicación Raíz, cada uno con su código QR verificable en Stellar testnet, antes del 30 de noviembre de 2026, mediante la integración del catálogo digital, la generación de códigos y las pruebas correspondientes, para facilitar la consulta y verificación demostrativa de los productos.

### Desglose SMART

| Elemento | Aplicación |
|---|---|
| Específico | Registrar productos de dos cooperativas en Raíz. |
| Medible | Alcanzar 20 productos y 20 códigos QR verificables. |
| Alcanzable | Utilizar los componentes existentes y distribuir las actividades entre cuatro integrantes. |
| Relevante | Facilitar la consulta y presentación digital de los productos. |
| Temporal | Completar los entregables antes del 30 de noviembre de 2026. |

### Alcance incluido

- Registro de 20 productos de 2 cooperativas.
- Organización de la información del catálogo.
- Generación y consulta de códigos QR.
- Verificación demostrativa en Stellar testnet.
- Integración y pruebas de las funcionalidades contempladas.
- Documentación técnica y de gestión.
- Preparación de la demostración del prototipo.

### Fuera del alcance

- Garantizar ventas o ingresos.
- Procesar pagos reales.
- Administrar fondos de las cooperativas.
- Emitir certificaciones comerciales o legales.
- Utilizar registros de testnet como comprobantes de operaciones reales.
- Publicar información personal de compradores o artesanos.
- Incorporar funcionalidades no aprobadas en el alcance.

## 4. Solución y uso de Stellar

Raíz consiste en una aplicación digital que permite organizar información de productos y facilitar su consulta mediante códigos QR.

Stellar se utilizará en su red de pruebas (testnet) para demostrar el registro y la verificación de información asociada a los productos.

Su utilización permite experimentar con registros verificables sin manejar dinero real ni comprometer los recursos de las organizaciones.

### Estado de la solución

| Elemento | Clasificación |
|---|---|
| Código y componentes presentes en el repositorio | Real, sujeto a revisión del código |
| Funcionalidades que cuentan con pruebas aprobadas | Real y comprobado mediante evidencia |
| Registros demostrativos en Stellar testnet | Prueba, no operación financiera real |
| Funcionalidades pendientes de integración | Pendiente |
| Funciones identificadas como simuladas | Simulado, no representa una operación real |

La clasificación definitiva se comprobará con el código y las pruebas del repositorio. Se utilizará como referencia la tabla **Qué es real y qué es simulado** del [README del proyecto](https://github.com/Open-Hub-Tec/yucu-protocol/blob/main/README.md).

El módulo técnico relacionado con el issue #170 contempla preparar el servidor Express para Vercel, separar el inicio del servidor, servir el frontend como archivos estáticos, dirigir las solicitudes `/api/*` a Express y realizar pruebas de despliegue.

La configuración de la cuenta de Vercel y sus variables de entorno corresponde al mantenedor, no al equipo.

## 5. Plan de trabajo y cronograma

| Entregable | Verificación | Fecha objetivo | Responsable |
|---|---|---|---|
| Organización y seguimiento | Tablero GitHub Projects | 21-11-2026 | @maricruz2362 |
| Integración técnica | Código y Pull Requests | 24-11-2026 | @sahid092 |
| Documentación del proyecto | Archivos Markdown revisados | 25-11-2026 | @carla1122 |
| Pruebas de calidad | Resultados y evidencias | 27-11-2026 | @aldair-SVG |
| Validación de productos y QR | Conteo y pruebas individuales | 28-11-2026 | @sahid092 y @aldair-SVG |
| Revisión de entregables | Pull Requests aprobadas | 29-11-2026 | Todo el equipo |
| Presentación del prototipo | Demostración del proyecto | 30-11-2026 | Todo el equipo |

Las fechas representan objetivos de planeación. El avance y las fechas reales se actualizarán en GitHub Projects.

### Responsabilidades

- **@maricruz2362:** coordinación, seguimiento del cronograma, control de riesgos y comunicación con el Product Owner.
- **@sahid092:** desarrollo, integración técnica y apoyo en la implementación.
- **@carla1122:** documentación, informes y registro de acuerdos.
- **@aldair-SVG:** aseguramiento de calidad, pruebas y revisión de entregables.

Cada integrante deberá realizar sus propios commits y participar en la revisión cruzada de las Pull Requests.

## 6. Presupuesto y personal

El costo total estimado del proyecto es de **$38,600 MXN**, utilizando una tarifa de referencia de $80 MXN por hora.

### Presupuesto por entregable

| Actividad | Horas | Tarifa | Costo |
|---|---:|---:|---:|
| Análisis y planeación | 70 | $80 | $5,600 |
| Diseño y documentación | 80 | $80 | $6,400 |
| Desarrollo e integración | 180 | $80 | $14,400 |
| Pruebas y aseguramiento de calidad | 60 | $80 | $4,800 |
| Validación y correcciones | 44.5 | $80 | $3,560 |
| Calidad del Sprint 2 | 48 | $80 | $3,840 |
| **Total** | **482.5** | **$80** | **$38,600** |

El costo de calidad del Sprint 2 corresponde a:

| Concepto | Horas | Costo |
|---|---:|---:|
| Prevención | 30 | $2,400 |
| Corrección | 18 | $1,440 |
| **Total** | **48** | **$3,840** |

Las 48 horas de calidad están incluidas en el presupuesto total, no deben sumarse nuevamente. El desglose deberá contrastarse con la hoja de costos del equipo para evitar duplicar actividades.

### Distribución de horas por integrante

| Integrante | Horas estimadas | Costo equivalente |
|---|---:|---:|
| @maricruz2362 | 120 | $9,600 |
| @sahid092 | 140 | $11,200 |
| @carla1122 | 110 | $8,800 |
| @aldair-SVG | 112.5 | $9,000 |
| **Total** | **482.5** | **$38,600** |

Estas cantidades representan estimaciones de planeación, no horas reales trabajadas. Las horas reales se registrarán durante el seguimiento del proyecto.

### Financiamiento

La cobertura estimada de Drips es de 0.84 en el escenario base y 0.34 en el escenario pesimista.

Con un costo de $38,600 MXN:

- Cobertura base aproximada: $32,424 MXN.
- Diferencia por cubrir en el escenario base: $6,176 MXN.
- Cobertura pesimista aproximada: $13,124 MXN.
- Diferencia por cubrir en el escenario pesimista: $25,476 MXN.

La postulación al Stellar Community Fund (SCF) no está confirmada y no se contabiliza como ingreso asegurado.

## 7. Riesgos y viabilidad

La exposición se calcula multiplicando la probabilidad por el impacto, utilizando una escala de 1 a 3.

| ID | Riesgo | Probabilidad | Impacto | Exposición | Respuesta | Responsable |
|---|---|---:|---:|---:|---|---|
| R1 | Falla de conexión con Stellar testnet | 3 | 3 | 9 | Si falla la conexión, entonces se revisará la integración y se conservarán evidencias de las pruebas. | @sahid092 |
| R2 | La cooperativa no puede asistir a la validación | 2 | 3 | 6 | Si no puede asistir, entonces se acordará otra fecha o un medio alternativo de revisión. | @maricruz2362 |
| R3 | Publicación de datos personales sin autorización | 1 | 3 | 3 | Si se detecta información personal, entonces se detendrá su publicación y se revisará el incidente. | @carla1122 |
| R4 | Falla en el despliegue de la aplicación | 3 | 3 | 9 | Si falla el despliegue, entonces se revisarán los registros y las pruebas antes de volver a publicar. | @sahid092 |
| R5 | Disponibilidad limitada de un integrante por evaluaciones | 2 | 2 | 4 | Si un integrante no está disponible, entonces se redistribuirán las tareas y se actualizará el cronograma. | @aldair-SVG |

Los riesgos con exposición de 6 o más requieren un plan de respuesta y un responsable antes de iniciar el sprint.

### Viabilidad y dictamen

El costo estimado es de $38,600 MXN. La cobertura base de Drips es de 0.84 y la pesimista de 0.34. El posible apoyo del SCF todavía no está confirmado.

**Dictamen: GO CONDICIONAL.**

El equipo puede continuar con actividades académicas, planeación, documentación y desarrollo dentro de los recursos disponibles. La ejecución completa que implique compromisos financieros queda condicionada a:

1. Confirmar los recursos disponibles.
2. Ajustar el alcance si la financiación resulta insuficiente.
3. No considerar como recibidos fondos que todavía no han sido aprobados.
4. Asignar responsables a los riesgos prioritarios.
5. Mantener actualizado el presupuesto y el cronograma.

## 8. Evidencia y siguientes pasos

### Evidencia revisable

| Evidencia | Fuente |
|---|---|
| Historias de usuario | Issues del repositorio |
| Plan de calidad y costo de calidad | Documentación del Sprint 2 |
| Estimaciones y matriz de riesgos | Documentación del Sprint 3 |
| Código fuente | Repositorio GitHub |
| Cambios y revisiones | Pull Requests |
| Pruebas técnicas | Resultados de GitHub Actions |
| Productos y códigos QR | Registros y pruebas verificables |
| Validación con la organización | Minutas y evidencias autorizadas |
| Carta de entendimiento | `docs/gestion/equipo-6/carta.md` |

### Siguientes pasos

| Actividad | Fecha objetivo | Responsable |
|---|---|---|
| Revisar la propuesta | 21-11-2026 | @maricruz2362 |
| Continuar integración técnica | 24-11-2026 | @sahid092 |
| Completar documentación | 25-11-2026 | @carla1122 |
| Ejecutar pruebas | 27-11-2026 | @aldair-SVG |
| Validar registros y QR | 28-11-2026 | @sahid092 y @aldair-SVG |
| Revisar entregables | 29-11-2026 | Todo el equipo |
| Presentar el prototipo | 30-11-2026 | Todo el equipo |

### Ética y protección de datos

El equipo respetará el aviso de privacidad establecido en `PRIVACIDAD.md`.

No se publicarán nombres, teléfonos, fotografías identificables, voces, firmas ni identificaciones personales de integrantes de la comunidad.

Los diseños, conocimientos tradicionales y materiales de las organizaciones conservarán la propiedad de sus respectivos titulares.

El proyecto es un prototipo académico. No garantiza ventas, ingresos ni certificaciones y no presentará funcionalidades simuladas como operaciones reales.

---

**Equipo 6 — Gestión de Proyectos de Software**  
**TecNM Campus Tlaxiaco**

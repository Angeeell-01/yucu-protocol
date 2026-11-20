# Propuesta final del proyecto Raíz
## Equipo 6 — Sprint 4

**Institución:** TecNM Campus Tlaxiaco  
**Carrera:** Ingeniería en Sistemas Computacionales  
**Asignatura:** Gestión de Proyectos de Software  
**Fecha:** 20 de noviembre de 2026

## 1. Resumen ejecutivo

El proyecto Raíz busca facilitar la visibilidad y consulta de productos artesanales de la región Mixteca de Oaxaca mediante una aplicación digital.

La propuesta consiste en desarrollar un módulo que permita registrar productos de dos cooperativas de Tlaxiaco y consultar su información mediante códigos QR vinculados a registros demostrativos en Stellar testnet.

Los beneficiarios principales serán las organizaciones participantes, que podrán revisar la información de sus productos y validar su presentación digital.

El proyecto contempla un costo estimado de **$38,600 MXN** y tiene como fecha objetivo el **30 de noviembre de 2026**.

## 2. Problema y contexto

Las organizaciones artesanales de la región Mixteca necesitan alternativas para presentar y compartir información de sus productos mediante herramientas digitales.

Durante el acercamiento con la comunidad se identificó la importancia de contar con información organizada, accesible y verificable, respetando la propiedad de los conocimientos y diseños tradicionales.

La propuesta busca atender esta necesidad mediante un catálogo digital con registros de productos y códigos QR.

La validación de las necesidades se apoyará en las observaciones y evidencias recopiladas durante las actividades de campo del Sprint 1.

## 3. Objetivo SMART y alcance

**Objetivo SMART:**

Registrar 20 productos de 2 cooperativas de Tlaxiaco en la aplicación Raíz, cada uno con su código QR verificable en Stellar testnet, antes del 30 de noviembre de 2026.

| Elemento | Descripción |
|---|---|
| S — Específico | Registrar productos de dos cooperativas en Raíz |
| M — Medible | 20 productos y 20 códigos QR verificables |
| A — Alcanzable | Mediante el desarrollo del módulo y la colaboración de las organizaciones |
| R — Relevante | Facilitar la consulta y visibilidad digital de los productos |
| T — Temporal | Fecha límite: 30 de noviembre de 2026 |

**Incluye:**
- Registro de 20 productos.
- Participación de dos cooperativas.
- Generación y consulta de códigos QR.
- Verificación demostrativa en Stellar testnet.
- Pruebas y documentación del módulo.

**No incluye:**
- Garantizar ventas o ingresos.
- Operaciones financieras reales.
- Certificaciones comerciales.
- Almacenamiento de información personal innecesaria.
- Funcionalidades adicionales fuera del alcance aprobado.

## 4. Solución y uso de Stellar

Se desarrollará un módulo integrado a Raíz para organizar la información de los productos y facilitar su consulta mediante códigos QR.

Stellar testnet permitirá demostrar el registro y la verificación de información mediante una red blockchain de pruebas, sin utilizar dinero real.

Se utilizará esta tecnología porque permite demostrar registros verificables y consultar información asociada a ellos.

**Estado de las funcionalidades:**

- **Real:** funcionalidades y componentes que ya existen y pueden comprobarse en el repositorio.
- **Por demostrar:** registro de los 20 productos y verificación de sus códigos QR en testnet.
- **Pendiente:** actividades de integración, validación y pruebas que todavía no cuentan con evidencia de finalización.

Para distinguir las funcionalidades implementadas de las simuladas se utilizará la tabla del README del repositorio: [Qué es real y qué es simulado](../../../../README.md).

## 5. Plan de trabajo y cronograma

| Entregable | Verificación | Fecha objetivo | Responsable |
|---|---|---|---|
| Organización y seguimiento | Tablero de GitHub Projects | 21-11-2026 | @maricruz2362 |
| Integración del módulo | Pull Requests y pruebas | 24-11-2026 | @sahid092 |
| Registro y documentación de productos | Registros revisados | 26-11-2026 | @carla1122 |
| Pruebas de calidad y códigos QR | Evidencias de pruebas | 28-11-2026 | @aldair-SVG |
| Revisión e integración final | Revisión del repositorio | 30-11-2026 | Todo el equipo |

Las fechas son objetivos de trabajo y se actualizarán en GitHub Projects cuando existan cambios aprobados.

## 6. Presupuesto y personal

El costo estimado del proyecto es de **$38,600 MXN**.

| Integrante | Horas estimadas | Tarifa por hora | Costo |
|---|---:|---:|---:|
| @maricruz2362 | 120 | $80 | $9,600 |
| @sahid092 | 140 | $80 | $11,200 |
| @carla1122 | 110 | $80 | $8,800 |
| @aldair-SVG | 112 | $80 | $8,960 |
| **Total** | **482** | **$80** | **$38,560** |

El costo de calidad se contempla dentro de la planeación del proyecto.

En el Sprint 2 se registraron 48 horas de prevención y corrección, equivalentes a $3,840 MXN con una tarifa de $80 por hora. Para el Sprint 3 se estimó un incremento del 20%, equivalente a $4,608 MXN.

El presupuesto definitivo deberá conciliar las horas de calidad con las actividades de cada integrante para evitar contabilizarlas dos veces.

## 7. Riesgos y viabilidad

La viabilidad del proyecto depende del cumplimiento del alcance, la disponibilidad del equipo y la obtención de apoyos económicos.

El costo estimado es de $38,600 MXN. La cobertura prevista de Drips es de 0.84 en el escenario base y 0.34 en el pesimista. La postulación al Stellar Community Fund todavía no está confirmada.

Por lo tanto, se establece un dictamen de **Go condicional**: continuar con la planeación y ejecución únicamente si se identifican recursos suficientes y se controlan los riesgos financieros.

| Riesgo | Probabilidad | Impacto | Respuesta | Responsable |
|---|---|---|---|---|
| No obtener apoyo del Stellar Community Fund | Alta | Alto | Buscar fuentes alternativas y ajustar el alcance | @maricruz2362 |
| Disminución del valor de XLM | Media | Alto | Revisar la disponibilidad de fondos y evitar depender de una conversión futura | @sahid092 |
| Falta de conectividad durante las validaciones | Media | Medio | Preparar evidencias y alternativas de revisión sin conexión | @carla1122 |
| Errores en los códigos QR | Media | Alto | Ejecutar pruebas y verificar los registros | @aldair-SVG |

Los riesgos se revisarán durante cada sprint y se actualizarán en la matriz de riesgos del equipo.

## 8. Evidencia y siguientes pasos

Las evidencias del proyecto se conservarán en el repositorio Yucu y en el tablero de GitHub Projects.

**Evidencias previstas:**
- Historias de usuario del Sprint 1.
- Plan de calidad y costo de calidad del Sprint 2.
- Estimaciones, presupuesto y matriz de riesgos del Sprint 3.
- Código fuente y Pull Requests.
- Registros de pruebas de Stellar testnet.
- Prototipo de la aplicación.
- Minutas de reuniones y validaciones.
- Carta de entendimiento con su estado correspondiente.

**Siguientes pasos:**

| Actividad | Fecha objetivo | Responsable |
|---|---|---|
| Revisar y aprobar la propuesta | 21-11-2026 | Equipo 6 |
| Continuar el desarrollo e integración | 24-11-2026 | @sahid092 |
| Validar información de productos | 26-11-2026 | @carla1122 |
| Ejecutar pruebas finales | 28-11-2026 | @aldair-SVG |
| Integrar y presentar resultados | 30-11-2026 | @maricruz2362 |

### Consideraciones éticas

El proyecto respetará las disposiciones de `PRIVACIDAD.md`. No se publicarán datos personales, fotografías, voces, teléfonos ni documentos de identificación de integrantes de la comunidad.

Los productos, diseños y conocimientos tradicionales seguirán perteneciendo a sus respectivos titulares.

El proyecto es un prototipo académico en una red de pruebas. No garantiza ventas, ingresos ni certificaciones.


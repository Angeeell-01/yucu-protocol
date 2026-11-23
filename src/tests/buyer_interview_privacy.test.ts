import {
  BUYER_INTERVIEWS_KEY,
  LEGACY_BUYER_LEADS_KEY,
  isBuyerCode,
  loadBuyerInterviews,
  nextBuyerCode,
  purgeLegacyBuyerLeads,
  sanitizeBuyerInterview,
  saveBuyerInterviews,
} from '../utils/buyerInterviewPrivacy';
import type { BuyerInterviewRecord } from '../types';

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    console.log(`  ✅ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${testName}`);
    failed++;
  }
}

/** localStorage en memoria para las pruebas. */
function memoryStorage(initial: Record<string, string> = {}) {
  const data = new Map(Object.entries(initial));
  return {
    getItem: (k: string) => (data.has(k) ? data.get(k)! : null),
    setItem: (k: string, v: string) => void data.set(k, v),
    removeItem: (k: string) => void data.delete(k),
    has: (k: string) => data.has(k),
  };
}

const sample = (code: string): BuyerInterviewRecord => ({
  code,
  timestamp: '2026-11-23 10:00',
  buyerCity: 'Tlaxiaco, Oaxaca',
  buyerSegment: 'Diseñador(a) / Coleccionista textil',
  interestedProducts: 'Rebozo de telar de cintura',
  consentForFutureContact: true,
});

console.log('====================================================');
console.log('   PRIVACIDAD DE COMPRADORES ENTREVISTADOS (#121)   ');
console.log('====================================================\n');

console.log('--- 1. Borrado de la clave antigua al iniciar ---');
{
  // Positivo: la clave antigua existe y se borra; las demás claves no se tocan.
  const storage = memoryStorage({
    [LEGACY_BUYER_LEADS_KEY]: JSON.stringify([{ buyerName: 'X', buyerPhone: '000' }]),
    otra_clave: 'se queda',
  });
  assert(purgeLegacyBuyerLeads(storage) === true, 'Devuelve true cuando había datos antiguos');
  assert(!storage.has(LEGACY_BUYER_LEADS_KEY), 'La clave antigua ya no existe');
  assert(storage.getItem('otra_clave') === 'se queda', 'No borra otras claves');

  // Negativo: sin clave antigua no hace nada.
  const empty = memoryStorage({ otra_clave: 'se queda' });
  assert(purgeLegacyBuyerLeads(empty) === false, 'Devuelve false si no había datos antiguos');
  assert(empty.getItem('otra_clave') === 'se queda', 'Sin clave antigua, no toca nada');
}

console.log('\n--- 2. Código anónimo secuencial ---');
{
  assert(nextBuyerCode([]) === 'C-01', 'La primera entrevista es C-01');
  assert(nextBuyerCode([sample('C-01')]) === 'C-02', 'Después de C-01 sigue C-02');
  assert(nextBuyerCode([sample('C-09')]) === 'C-10', 'Después de C-09 sigue C-10');
  assert(nextBuyerCode([sample('C-03'), sample('C-01')]) === 'C-04', 'Usa el mayor, no el último');
  assert(nextBuyerCode([sample('C-99')]) === 'C-100', 'Pasa de C-99 a C-100');

  const codes = new Set<string>();
  const list: BuyerInterviewRecord[] = [];
  for (let i = 0; i < 30; i++) {
    const code = nextBuyerCode(list);
    codes.add(code);
    list.push(sample(code));
  }
  assert(codes.size === 30, '30 entrevistas seguidas reciben 30 códigos distintos');

  assert(isBuyerCode('C-01') && isBuyerCode('C-123'), 'Acepta códigos válidos');
  assert(!isBuyerCode('C-00'), 'Rechaza C-00');
  assert(!isBuyerCode('C-1'), 'Rechaza un solo dígito');
  assert(!isBuyerCode('Rodrigo'), 'Rechaza un nombre como código');
  assert(!isBuyerCode(42), 'Rechaza valores que no son texto');
}

console.log('\n--- 3. Nunca se guarda nombre ni teléfono ---');
{
  // Negativo: un registro con nombre y teléfono pierde esos campos.
  const dirty = { ...sample('C-01'), buyerName: 'Nombre', buyerPhone: '+00 000 000 0000' };
  const clean: object | null = sanitizeBuyerInterview(dirty);
  assert(clean !== null, 'Conserva un registro con código válido');
  assert(clean !== null && !('buyerName' in clean), 'Descarta buyerName');
  assert(clean !== null && !('buyerPhone' in clean), 'Descarta buyerPhone');

  // Negativo: registros sin código anónimo se descartan.
  assert(sanitizeBuyerInterview({ buyerName: 'Nombre' }) === null, 'Descarta registros sin código');
  assert(sanitizeBuyerInterview(null) === null, 'Descarta null');

  // Lo que se guarda en el almacenamiento tampoco lleva nombre ni teléfono.
  const storage = memoryStorage();
  saveBuyerInterviews(storage, [dirty]);
  const raw = storage.getItem(BUYER_INTERVIEWS_KEY) ?? '';
  assert(!raw.includes('buyerName') && !raw.includes('buyerPhone'), 'El JSON guardado no tiene nombre ni teléfono');

  const loaded = loadBuyerInterviews(storage);
  assert(loaded.length === 1 && loaded[0].code === 'C-01', 'Se lee de vuelta solo con su código');

  // Negativo: almacenamiento dañado no rompe la pantalla.
  const broken = memoryStorage({ [BUYER_INTERVIEWS_KEY]: '{no es json' });
  assert(loadBuyerInterviews(broken).length === 0, 'JSON dañado devuelve lista vacía');
}

console.log(`\nResultado: ${passed} pasaron, ${failed} fallaron`);
if (failed > 0) process.exit(1);

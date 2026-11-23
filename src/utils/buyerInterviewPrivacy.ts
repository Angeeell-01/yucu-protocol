/**
 * Privacidad de los compradores entrevistados (docs/research/PRIVACIDAD.md, reglas 2 y 5).
 *
 * Cada comprador se identifica solo con un código anónimo secuencial (C-01, C-02, …).
 * Nunca se guarda su nombre ni su teléfono: si acepta que lo contacten, el contacto
 * va a la carpeta privada del equipo (`.investigacion_privada/`), no a la app.
 */
import type { BuyerInterviewRecord } from '../types';

/** Clave antigua que guardaba nombres y teléfonos de compradores. Se borra al iniciar. */
export const LEGACY_BUYER_LEADS_KEY = 'raiz_buyer_leads';

/** Clave nueva: solo entrevistas anónimas. */
export const BUYER_INTERVIEWS_KEY = 'yucu_buyer_interviews';

const BUYER_CODE_PATTERN = /^C-(\d{2,})$/;

type StorageLike = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

/** true si el texto es un código anónimo válido (C-01, C-02, …, C-100). */
export function isBuyerCode(value: unknown): value is string {
  return typeof value === 'string' && BUYER_CODE_PATTERN.test(value) && Number(value.slice(2)) > 0;
}

/** Siguiente código libre: uno más que el mayor existente, con al menos dos dígitos. */
export function nextBuyerCode(records: ReadonlyArray<Pick<BuyerInterviewRecord, 'code'>>): string {
  const max = records.reduce((acc, r) => {
    const n = isBuyerCode(r.code) ? Number(r.code.slice(2)) : 0;
    return n > acc ? n : acc;
  }, 0);
  return `C-${String(max + 1).padStart(2, '0')}`;
}

/**
 * Borra la clave antigua con nombres y teléfonos, si existe.
 * Devuelve true si había algo que borrar.
 */
export function purgeLegacyBuyerLeads(storage: StorageLike): boolean {
  if (storage.getItem(LEGACY_BUYER_LEADS_KEY) === null) return false;
  storage.removeItem(LEGACY_BUYER_LEADS_KEY);
  return true;
}

/**
 * Copia solo los campos permitidos. Cualquier otro campo (por ejemplo, un nombre o
 * teléfono que se haya colado) se descarta. Devuelve null si el registro no tiene
 * un código anónimo válido.
 */
export function sanitizeBuyerInterview(raw: unknown): BuyerInterviewRecord | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  if (!isBuyerCode(r.code)) return null;

  const str = (v: unknown) => (typeof v === 'string' ? v : '');
  const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? v : undefined);

  return {
    code: r.code,
    timestamp: str(r.timestamp),
    studentName: str(r.studentName) || undefined,
    studentGroup: str(r.studentGroup) || undefined,
    buyerCity: str(r.buyerCity),
    buyerSegment: str(r.buyerSegment),
    interestedProducts: str(r.interestedProducts),
    willingnessToPayExtraMxn: num(r.willingnessToPayExtraMxn),
    susScore: num(r.susScore),
    consentForFutureContact: r.consentForFutureContact === true,
    notes: str(r.notes) || undefined,
  };
}

/** Lee las entrevistas guardadas, descartando las que no sean anónimas. */
export function loadBuyerInterviews(storage: StorageLike): BuyerInterviewRecord[] {
  try {
    const stored = storage.getItem(BUYER_INTERVIEWS_KEY);
    if (!stored) return [];
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map(sanitizeBuyerInterview)
      .filter((r): r is BuyerInterviewRecord => r !== null);
  } catch {
    return [];
  }
}

export function saveBuyerInterviews(storage: StorageLike, records: BuyerInterviewRecord[]): void {
  storage.setItem(BUYER_INTERVIEWS_KEY, JSON.stringify(records.map(sanitizeBuyerInterview)));
}

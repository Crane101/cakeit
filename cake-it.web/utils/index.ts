import { isArray } from './typeguards';

export const firstOrOnly = <T>(candidate: T | T[]): T => (isArray(candidate) ? candidate[0] : candidate);

import { IErrorDetail, IStatusCode } from '../models/api-models';

export interface ITypeGuard<T> {
    (value: unknown): value is T;
}

export const isString = (candidate: unknown): candidate is string => typeof candidate === 'string';

export const isNumber = (candidate: unknown): candidate is number => typeof candidate === 'number';

export const isBoolean = (candidate: unknown): candidate is boolean => typeof candidate === 'boolean';

export const isArray = (candidate: unknown): candidate is unknown[] => Array.isArray(candidate);

export const isNotUndefined = <T>(candidate: T | undefined): candidate is T => candidate !== undefined;

export const isEnumMember =
    <E>(enumToTest: E): ITypeGuard<E[keyof E]> =>
        (candidate: unknown): candidate is E[keyof E] => {
            const members = Object.values(enumToTest);

            return members.includes(candidate);
        };

export const hasStatusCode = (candidate: unknown): candidate is IStatusCode => (candidate as IStatusCode).status !== undefined;

export const hasErrorDetail = (candidate: unknown): candidate is IErrorDetail => (candidate as IErrorDetail).responseBody?.Detail !== undefined;

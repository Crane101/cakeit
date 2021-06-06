import { ICake } from './../models/cake';
import { checkForSuccess } from '../utils/client-utils';
import { contentTypeJson } from '../constants';

export const GetCakes = (lastId?: string): Promise<ICake[]> =>
    fetch(`/api/cake?maxResults=10${lastId ? `fromId=${lastId}` : ''}`)
        .then(checkForSuccess)
        .then(response => response.json());

export const GetCake = (cakeId: string): Promise<ICake> =>
    fetch(`/api/cake/${cakeId}`)
        .then(checkForSuccess)
        .then(response => response.json());

export const NewCake = (cake: ICake): Promise<string> =>
    fetch('/api/cake/', {
        method: 'POST',
        body: JSON.stringify(cake),
        ...contentTypeJson,
    })
        .then(checkForSuccess)
        .then(response => response.text());

export const UpdateCake = (cakeId: string, cake: ICake): Promise<void> =>
    fetch(`/api/cake/${cakeId}`, {
        method: 'PUT',
        body: JSON.stringify(cake),
        ...contentTypeJson,
    })
        .then(checkForSuccess)
        .then(() => undefined);

export const DeleteCake = (cakeId: string): Promise<void> =>
    fetch(`/api/cake/${cakeId}`, {
        method: 'DELETE',
    })
        .then(checkForSuccess)
        .then(() => undefined);

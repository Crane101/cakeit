import { ErrorResponse, HandleJsonApiResponse, HandleTextApiResponse } from '../../../utils/api-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { apiDefaultOptions, apiPath } from '../../../constants';

import { ICake } from '../../../models/cake';
import { firstOrOnly } from '../../../utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET': {
            const maxResults = parseInt(firstOrOnly(req.query.maxResults), 10);
            const fromId = firstOrOnly(req.query.afterCakeId);

            if (!maxResults) {
                return res.status(400).end('Error: maxResults query string parameter missing or not a number.');
            }

            return getCakes(maxResults, fromId)
                .then(cakes => res.status(200).json(cakes))
                .catch(err => ErrorResponse(err, res));
        }
        case 'POST':
            return newCake(req.body)
                .then(newId => res.status(201).end(newId))
                .catch(err => ErrorResponse(err, res));

        default:
            return res.status(404).end();
    }
};

export const getCakes = (maxResults: number, fromId: string): Promise<ICake> =>
    fetch(`${apiPath}/cakes?maxResults=${maxResults}${fromId ? `&fromId=${fromId}` : ''}`).then(HandleJsonApiResponse);

const newCake = (cake: ICake) =>
    fetch(`${apiPath}/cakes`, {
        method: 'POST',
        body: JSON.stringify(cake),
        ...apiDefaultOptions,
    }).then(HandleTextApiResponse);

import { ErrorResponse, HandleApiResponse, HandleJsonApiResponse } from '../../../../utils/api-utils';
import type { NextApiRequest, NextApiResponse } from 'next';
import { apiPath, contentTypeJson } from '../../../../constants';

import { ICake } from '../../../../models/cake';
import { firstOrOnly } from '../../../../utils';
import { logAndReThrow } from '../../../../utils/errors';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const cakeId = firstOrOnly(req.query.cakeId);

    switch (req.method) {
        case 'GET':
            return GetCake(cakeId)
                .then(cake => res.status(200).json(cake))
                .catch(err => ErrorResponse(err, res));

        case 'PUT':
            return updateCake(cakeId, req.body)
                .then(() => res.status(200).end(`Cake ${cakeId} Updated`))
                .catch(err => ErrorResponse(err, res));

        case 'DELETE':
            return deleteCake(cakeId)
                .then(() => res.status(200).end(`Cake ${cakeId} Deleted`))
                .catch(err => ErrorResponse(err, res));

        default:
            return res.status(404).end();
    }
};

export const GetCake = (cakeId: string) => fetch(`${apiPath}/cakes/${cakeId}`).then(HandleJsonApiResponse);

const updateCake = (cakeId: string, cake: ICake): Promise<Response> =>
    fetch(`${apiPath}/cakes/${cakeId}`, {
        method: 'PUT',
        body: JSON.stringify(cake),
        ...contentTypeJson,
    }).then(HandleApiResponse);

const deleteCake = (cakeId: string): Promise<Response> =>
    fetch(`${apiPath}/cakes/${cakeId}`, {
        method: 'DELETE',
    }).then(HandleApiResponse);

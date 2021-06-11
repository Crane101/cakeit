import { hasErrorDetail, hasStatusCode } from './typeguards';

import { IApiError } from '../models/api-models';
import { NextApiResponse } from 'next';
import { logAndReThrow } from './errors';
import { tryParseJson } from './json';

export const ErrorResponse = (err: any, res: NextApiResponse) => {
    const errorDetail = hasErrorDetail(err) ? err.responseBody.Detail : JSON.stringify(err, null, 2);
    res.status(hasStatusCode(err) ? err.status : 500).end(errorDetail);
};

export const HandleApiResponse = (response: Response): Promise<Response> => throwIfFailed(response).catch(logAndReThrow);

export const HandleJsonApiResponse = (response: Response): Promise<any> =>
    throwIfFailed(response)
        .then(apiResponse => apiResponse.json())
        .catch(logAndReThrow);

export const HandleTextApiResponse = (response: Response): Promise<string> =>
    throwIfFailed(response)
        .then(apiResponse => apiResponse.text())
        .catch(logAndReThrow);

const throwIfFailed = async (response: Response): Promise<Response> => {
    if (!response.ok) {
        const headers: { [key: string]: string } = {};
        response.headers.forEach((value, key) => (headers[key] = value));

        const apiError: IApiError = {
            status: response.status,
            statusText: response.statusText,
            responseHeaders: headers,
            responseBody: tryParseJson(await response.text()),
        };

        throw apiError;
    }

    return response;
};

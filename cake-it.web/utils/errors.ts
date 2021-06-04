import {tryFormatJson} from '.';

export const throwIfFailed = async (response: Response) => {
    if (!response.ok) {
        const errorReport = [`${response.status} (${response.statusText})`];
        const logSection = (title: string, content: string) => errorReport.push(`\r\n- ${title} -\r\n\r\n${content}`);
        const headers: {[key: string]: string} = {};
        response.headers.forEach((value, key) => (headers[key] = value));

        logSection('URL', response.url);
        logSection('RESPONSE BODY', tryFormatJson(await response.text()));
        logSection('RESPONSE HEADERS', JSON.stringify(headers, null, 2));
        logSection('STACK TRACE', '');

        throw new Error(errorReport.join('\r\n'));
    }

    return response;
};

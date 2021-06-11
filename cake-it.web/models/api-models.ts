export interface IStatusCode {
    status: number;
}

export interface IApiError extends IStatusCode {
    statusText: string;
    responseHeaders: { [key: string]: string };
    responseBody: { [key: string]: any };
}

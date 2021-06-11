export const checkForSuccess = async (response: Response): Promise<Response> => {
    if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
    }

    return response;
};

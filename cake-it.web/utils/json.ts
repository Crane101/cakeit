export const tryFormatJson = (possibleJson: string): string => {
    try {
        const parsed = JSON.parse(possibleJson);

        return JSON.stringify(parsed, null, 2);
    } catch (e) {
        // parse fails, just output the raw text
        return possibleJson;
    }
};

export const tryParseJson = (possibleJson: string): { [key: string]: any } => {
    try {
        return JSON.parse(possibleJson);
    } catch (e) {
        return { unparsableContent: possibleJson };
    }
};

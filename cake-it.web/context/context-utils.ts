import { Context, useContext } from 'react';

export const useContextWithGuard = <T>(context: Context<T | null>): T => {
    const contextHook = useContext(context);
    if (context === null) {
        throw new Error('context declared outside of provider');
    }

    return contextHook as T;
};

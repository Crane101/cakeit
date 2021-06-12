import { createContext, useContext, useState } from 'react';

import { ICake } from '../models/cake';
import { ReactNode } from 'react';

const CakesContext = createContext<ICakesContext | null>(null);

interface ICakesContext {
    cakeExists(cakeName: string): boolean;
    setCakes(cakes: ICake[]): void;
}

export const CakesContextProvider = ({ children }: { children: ReactNode }) => {
    const [cakes, setCakes] = useState<ICake[]>([]);

    const cakeExists = (cakeName: string): boolean => (cakes ? cakes.some(cake => cake.name === cakeName) : false);

    return <CakesContext.Provider value={{ cakeExists, setCakes }}>{children}</CakesContext.Provider>;
};

export default CakesContext;

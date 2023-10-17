
'use client';

import { createContext, useContext, useState } from "react";
import { useRouter } from 'next/navigation'
const BackDropContextData = createContext({})

export const BackDropContext = ({ children }) => {
    const router = useRouter()
    const [OpenBackdrop, setOpenBackdrop] = useState(false);
    

    

    return (
        <BackDropContextData.Provider value={{ OpenBackdrop }}>
            {children}
        </BackDropContextData.Provider>
    )
};

export const BackDropContextFinal = () => useContext(BackDropContextData);
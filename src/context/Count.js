import { useState, useContext, createContext } from "react";

// Hitung Context
export const CountContext = createContext()
export const CountProvider = ({children}) => {
    const [count, setCount] = useState('0')

    return (
        <CountContext.Provider value={[count, setCount]}>
            {children}
        </CountContext.Provider>
    )
}
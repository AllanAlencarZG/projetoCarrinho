import { createContext, useEffect, useState } from "react"
import { lerProdutos } from "../data/fetchProdutos";



const DataContext = createContext()

function DataProvider({ children}) {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        lerProdutos(setProdutos);
    }, []);

    return (
        <DataContext.Provider value={{produtos, setProdutos}}>
        {children}
        </DataContext.Provider>
    )
}

export { DataProvider, DataContext }
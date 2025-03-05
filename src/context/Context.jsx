import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    items: [],
    createItem: (item) => {}
})

export default function Context({children}) {
    const [items, setItems] = useState([])
    
    function createItem(item) {
        // const temp = [...items]
        // temp.push(item)
        // setItems(temp)
       
        setItems([...items, item])
    }
    return (
        <AppContext.Provider value={{items, createItem}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}
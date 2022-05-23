import { createContext, useContext, useState } from "react";

const TickerSearchContext = createContext()

const TickerSearchProvider = ({children}) =>{
  const [searchTicker,setSearchTicker]  = useState('')

  const handleTickerSearch = (value) => {
    setSearchTicker(value)
  }

  return (
  <TickerSearchContext.Provider value={{searchTicker,handleTickerSearch}}>
    {children}
  </TickerSearchContext.Provider>
  )
}

const useTickerSearch = () => useContext(TickerSearchContext)

export {useTickerSearch,TickerSearchProvider};
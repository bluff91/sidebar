import { createContext, useContext, useState } from 'react'

export const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProivder = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [toggleModal, setToggleModal] = useState(false)

  const openSidebar = () => {
    return setToggleSidebar(true)
  }
  const closeSidebar = () => {
    return setToggleSidebar(false)
  }
  const openModal = () => {
    return setToggleModal(true)
  }
  const closeModal = () => {
    return setToggleModal(false)
  }

  return (
    <AppContext.Provider
      value={{
        toggleSidebar,
        toggleModal,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

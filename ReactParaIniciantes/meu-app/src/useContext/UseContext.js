import React from 'react';

export const UserContext = React.createContext();

export const GlobalContext = (props) => {
  const [contar, setContar] = React.useState(0)

  return (
    <UserContext.Provider value={{contar, setContar}}>
      {props.children}
    </UserContext.Provider>
  )
}
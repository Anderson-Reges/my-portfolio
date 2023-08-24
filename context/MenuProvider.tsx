'use client'

import IChildren from '@/interfaces/IChildrenProvider';
import React from 'react';

export const MenuContext = React.createContext<menuProvider>({} as menuProvider);

export interface menuProvider {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuProvider: React.FC<IChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  
  const contextValue = React.useMemo(() => ({
    isOpen,
    setIsOpen
  }), [isOpen]);

  return (
    <MenuContext.Provider value={ contextValue }>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;
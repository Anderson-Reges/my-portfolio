import IChildren from "@/interfaces/IChildrenProvider";
import IRepo from "@/interfaces/IRepo";
import IRepoProvider from "@/interfaces/IRepoProvider";
import React from 'react';

export const DetailsContext = React.createContext<IRepoProvider>({} as IRepoProvider)

const ProjectDetailsContext: React.FC<IChildren> = ({ children }) => {
  const [repo, setRepo] = React.useState<IRepo>({} as IRepo);

  const contextValue = React.useMemo(() => ({
    repo,
    setRepo,
  }), []);

  return (
    <DetailsContext.Provider value={ contextValue }>
      {children}
    </DetailsContext.Provider>
  );
}

export default ProjectDetailsContext;
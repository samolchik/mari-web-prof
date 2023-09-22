import {useContext, useState, createContext} from "react";
interface ProjectDetailsContextValue {
    projectName: string;
    setProjectName: React.Dispatch<React.SetStateAction<string>>;
    isProjectDetailsOpen: boolean;
    setProjectDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    closeProjectDetails: () => void;
}


const ProjectDetailsContext = createContext<ProjectDetailsContextValue | undefined>(undefined);


interface ProjectDetailsProviderProps {
    children: React.ReactNode;
}

export const ProjectDetailsProvider: React.FC<ProjectDetailsProviderProps> = ({ children }) => {
    const [projectName, setProjectName] = useState<string>("");
    const [isProjectDetailsOpen, setProjectDetailsOpen] = useState<boolean>(false);

    const closeProjectDetails = () => {
        setProjectDetailsOpen(false);
    };

    return (
        <ProjectDetailsContext.Provider value={{ projectName, setProjectName, isProjectDetailsOpen, setProjectDetailsOpen, closeProjectDetails }}>
            {children}
        </ProjectDetailsContext.Provider>
    );
}


export const useProjectDetails = () => {
    const context = useContext(ProjectDetailsContext);
    if (!context) {
        throw new Error('useProjectDetails must be used within a ProjectDetailsProvider');
    }
    return context;
}

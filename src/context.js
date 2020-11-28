import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [isPreviewerOpen, setIsPreviewerOpen] = useState(false);
    const [markdown, setMarkdown] = useState('');

    const openEditor = () => {
        setIsEditorOpen(true);
    }

    const closeEditor = () => {
        setIsEditorOpen(false);
    }

    const openPreviewer = () => {
        setIsPreviewerOpen(true);
    }

    const closePreviewer = () => {
        setIsPreviewerOpen(false);
    }

    return <AppContext.Provider value={{
        isEditorOpen,
        isPreviewerOpen,
        openEditor,
        closeEditor,
        markdown,
        setMarkdown,
        openPreviewer,
        closePreviewer,
    }}>
        {children}
    </AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}
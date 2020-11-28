import React from 'react';
import { SiFreecodecamp } from 'react-icons/si';
import { FaExpandArrowsAlt, } from 'react-icons/fa';
import { FiMinimize2 } from 'react-icons/fi';
import DOMPurify from 'dompurify';
import marked from 'marked';
import { useGlobalContext } from '../context';


const Previewer = () => {
    const { markdown, isPreviewerOpen, openPreviewer, closePreviewer, isEditorOpen } = useGlobalContext();

    if (!isEditorOpen) {
        return (
            <div id="preview-container" className={`${isPreviewerOpen ? 'expand' : ''}`}>
                <div className="header">
                    <SiFreecodecamp className="freecodecamp-icon" />
                    <h5>Previewer</h5>
                    <a className="expand-minimize-icon" onClick={isPreviewerOpen ? closePreviewer : openPreviewer}>
                        {isPreviewerOpen ? 
                            <FiMinimize2 /> :
                            <FaExpandArrowsAlt />}
                    </a>
                </div>
                <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(markdown))}}>
                </div>
            </div>
        );
    }
    else {
        return <div></div>;
    }
    
}

export default Previewer;
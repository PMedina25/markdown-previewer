import React from 'react';
import { SiFreecodecamp } from 'react-icons/si';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { FiMinimize2 } from 'react-icons/fi';
import { useGlobalContext } from '../context';


const Editor = () => {
    const { markdown, setMarkdown, isEditorOpen, openEditor, closeEditor, isPreviewerOpen } = useGlobalContext();

    const handleChange = (event) => {
      setMarkdown(event.target.value);
    }

    if (!isPreviewerOpen) {
      return (
        <div id="editor-container" className={`${isEditorOpen ? 'expand' : ''}`}>
          <div className="header">
            <SiFreecodecamp className="freecodecamp-icon" />
            <h5>Editor</h5>
            <a className="expand-minimize-icon" onClick={isEditorOpen ? closeEditor : openEditor}>
              {isEditorOpen ? 
                <FiMinimize2 /> :
                <FaExpandArrowsAlt />}
            </a>
          </div>

          <textarea id="editor" value={markdown} onChange={handleChange}>
          </textarea>
        </div> 
      );
    }
    else {
      return <div></div>;
    }
}

export default Editor;
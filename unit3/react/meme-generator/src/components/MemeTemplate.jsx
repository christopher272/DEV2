import React, { useState } from "react";
import { useCallback } from "react";
function MemeTemplate({ topText, bottomText, randomImage, id, handleDelete, handleEdit, handleEditSubmit }) {
    const [editing, setEditing] = useState(false)
    const [newTopText, setNewTopText] = useState("")
    const [newBottomText, setNewBottomText] = useState("")
    function handleToggle() {
        setEditing(!editing)
    }

    const handleFormSubmit = useCallback((event) => {
        event.preventDefault();
        const updatedMeme = {
            topText: event.target.newTopText.value,
            bottomText: event.target.newBottomText.value,
            randomImage,
            id
        };
        setEditing(false)
        handleEditSubmit(id, updatedMeme)
        console.log(updatedMeme)
    }, [handleEditSubmit, id, randomImage]);

    return (
        <div className="meme">
            <div className="meme--container">
                <img src={randomImage} alt="Meme" className="meme--image" />
                <h2 className="meme--text top">{topText}</h2>
                <h2 className="meme--text bottom">{bottomText}</h2>
                <button onClick={handleToggle}>Edit</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
            {editing &&
                <form className="editForm" onSubmit={handleFormSubmit}>
                    <input type="text" 
                    value = {newTopText}
                    placeholder={topText}
                    name="newTopText"
                    onChange={(event) => setNewTopText(event.target.value)}/>
                    <input type="text"
                    placeholder={bottomText}
                    name="newBottomText" 
                    value = {newBottomText} 
                    onChange={(event) => setNewBottomText(event.target.value)}/>
                    <button type ="submit">Submit</button>
                </form>}
        </div>
    );
}

export default MemeTemplate;
import React, { useState } from "react";

function MemeTemplate({ topText, bottomText, randomImage, id, handleDelete, handleEdit }) {
    const [editing, setEditing] = useState(false)
    function handleToggle() {
        setEditing(!editing)
    }
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
                <form className="editForm">
                    <input type="text" 
                    placeholder={topText}
                    name="newTopText"/>
                    <input type="text"
                    placeholder={bottomText}
                    name="newBottomText" />
                    <button >Submit</button>
                </form>}
        </div>
    );
}

export default MemeTemplate;
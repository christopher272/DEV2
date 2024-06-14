import React from 'react';
import MemeTemplate from './MemeTemplate';
import { v4 as uuidv4 } from 'uuid';

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        id: uuidv4()
    })

    const [allMemes, setAllMemes] = React.useState([])
    const [savedMemes, setSavedMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    console.log(meme)

    function handleSaveMeme(event) {
        event.preventDefault()

        console.log("meme", meme);
        setSavedMemes(prevArray => [...prevArray, { ...meme }])
        setMeme({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            id: uuidv4()
        })
    }
    console.log("savedMemes", savedMemes);
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
        if (
            event.type === "click"
        ) {
            setSavedMemes((prevMemes) => [...prevMemes, { ...meme }]);
        }
    };
    const handleEdit = (id, update) => {
        setSavedMemes(prevMemes => prevMemes.map(meme => meme.id !== id ? meme : update))
    }

    const handleDelete = (id) => {
        setSavedMemes(prevMemes => prevMemes.filter(meme => meme.id !== id))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder='Top text'
                    className='form-input'
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder='Bottom text'
                    className='form-input'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                <button
                    className="save-button"
                    onClick={handleSaveMeme}>Save Meme
                </button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className='meme-image' />
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
            <div className='saved-memes'>
                {savedMemes.length > 0 && (
                    savedMemes.map((savedMemes) => (
                        <MemeTemplate
                            key={savedMemes.id}
                            topText={savedMemes.topText}
                            bottomText={savedMemes.bottomText}
                            randomImage={savedMemes.randomImage}
                            id={savedMemes.id}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    )))}

            </div>
        </main>
    );
}
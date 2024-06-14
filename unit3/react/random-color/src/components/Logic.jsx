import React, {useState, useEffect} from'react';
import './logic.css'

function Logic() {
    const [backgroundColor, setBackgroundColor] = useState('');


    const fetchRandomColor = () => {
        fetch('https://random-color.onrender.com/colors/random')
            .then(response => response.json())
            .then(data => {
                setBackgroundColor(data.hex);
                console.log(data.hex);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        };
    
        useEffect(() => {
            fetchRandomColor();
        }, []);


    return (
        <div id="changeMe" style = {{ backgroundColor }}>
            <button onClick={fetchRandomColor}> Random Color </button>
        </div>
    );
}

export default Logic;
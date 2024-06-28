import React, { useContext } from 'react';
import { ThemeChange } from './ThemeChanger';

function Footer(props) {

    const { color } = useContext(ThemeChange)

    return (
        <div className={'${color}-theme'} id="footer">
            <h2>How did you like using {color} theme?</h2>
            <p>Please let us know!</p>
        </div>
    );
}

export default Footer;
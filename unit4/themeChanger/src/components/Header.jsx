import React, { useContext } from 'react';
import { ThemeChange } from './ThemeChanger';

function Header(props) {

    const { color } = useContext(ThemeChange)

    return (
        <div className={'${color}-theme'} id="header">
            <h2>Theme Context</h2>
            <h3>You are currently using the {color} theme</h3>
        </div>
    );
}

export default Header;
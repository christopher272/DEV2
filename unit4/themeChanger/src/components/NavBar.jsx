import React, { useContext } from 'react';
import { ThemeChange } from "./ThemeChanger"

function NavBar(props) {

    const { color } = useContext(ThemeChange)

    return (
        <div className={`${color}-theme`} id="navbar">
            <p>page 1</p>
            <p>page 2</p>
            <p>page 3</p>
        </div>
    );
}

export default NavBar; d
import React, { useContext } from "react";
import { ThemeChange } from "./ThemeChanger";

function Button(props) {
    const { color, toggleTheme } = useContext(ThemeChange)

    return (
        <button onClick={toggleTheme} className={`${color}-theme`} id="button">Change Theme</button>
    );
}

export default Button;
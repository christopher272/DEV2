import React, { useState } from "react";

const ThemeChange = React.createContext()

function ThemeChangerProvider(props) {
    const [color, setColor] = useState("dark")
    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }

    return (
        <ThemeChange.Provider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>
            {props.children}
        </ThemeChange.Provider>
    )
}

export { ThemeChange, ThemeChangerProvider }
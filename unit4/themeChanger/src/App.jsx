import React, { useState } from 'react';
import { ThemeChangerProvider } from "./components/ThemeChanger";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import './App.css'

function App(props) {



    return (
        <>
            <ThemeChangerProvider>
                <Header />
                <Button />
                <NavBar />
                <Footer />
            </ThemeChangerProvider>
        </>
    );
}

export default App
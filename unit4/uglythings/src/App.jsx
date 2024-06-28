import './App.css'
import { useEffect, useContext } from 'react'
import Form from './components/Form'
import { FormContext } from './context/contextProvider'
import Submissions from './components/Submissions'


function App() {

    const { getInitialThings } = useContext(FormContext)

 


    return(
        <div className="app">
            <nav>
                <h1>Ugly Things</h1>
            </nav>
            <Form />
            <Submissions />
        </div>
    )
}

export default App
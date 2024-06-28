import { useState } from 'react'
import { getRequest, createRequest, editRequest, deleteRequest } from '../requests/api'


export const useThing = () => {
    const [things, setThings] = useState([])

    const getInitialThings = () => {
        getRequest().then((data) => setThings(data))
    }

    const addThing = (thing) => {
        createRequest(thing).then(data=>setThings(prevThings => [...prevThings, data]))
    }

    const deleteThing = (id) => {
        deleteRequest(id).then(() => setThings(prevThings => prevThings.filter(thing => thing._id !== id)))
    }

    const editThing = (id, update) => {
        console.log(id, update)
        editRequest(id, update).then(data=> setThings(prevThings => prevThings.map(thing => thing._id === id ? data : thing)))
    }


    return {
        things,
        getInitialThings,
        addThing,
        deleteThing,
        editThing
    }
}

export const useForm = (initState) => {
    const [formData, setFormData] = useState(initState)
    const [isFormSeen, setIsFormSeen] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const clearForm = () => {
        setFormData(initState)
    }

    const toggleForm = () => {
        setIsFormSeen(prevIsFormSeen => !prevIsFormSeen)
    }

    return {
        formData,
        isFormSeen,
        handleChange,
        clearForm,
        toggleForm
    }
}
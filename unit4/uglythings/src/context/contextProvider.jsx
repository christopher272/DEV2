import { createContext } from 'react'
import { useThing } from '../hooks/ThingHooks'


export const FormContext = createContext()


export const FormProvider = ({ children }) => {

    const thingAPI = useThing()

    return (
        <FormContext.Provider value={thingAPI}>
            {children}
        </FormContext.Provider>
    )
}
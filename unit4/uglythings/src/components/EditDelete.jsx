import { useForm } from '../hooks/ThingHooks'
import { useContext, useEffect } from 'react'
import { FormContext } from '../context/contextProvider'

const EditDelete = (props) => {



    const { title, description, imgUrl, _id } = props
    const { editThing, deleteThing, getInitialThings } = useContext(FormContext)

    const formState = useForm({
        title,description,imgUrl
    })

    const { formData, handleChange, isFormSeen, toggleForm } = formState;

   
    const handleSubmit = (e) => {
        e.preventDefault();
        editThing(_id, formData);
        toggleForm();
    }

    const handleDelete = () => {
        deleteThing(_id)
    }

    
    return (

        <div className="ugly-Container">
            <img src={imgUrl} alt={title} />
            <h1>Title: {title}</h1>
            <h2>Description: {description}</h2>
            {!isFormSeen && <>
                <button onClick={toggleForm}>Edit This Ugly Thing</button>
                <button onClick={handleDelete}>Delete This Ugly Thing</button>
            </>}

            {isFormSeen && 
                <form
                    onSubmit={handleSubmit}
                    className='ugly-form'
                >
                <input
                name='title'
                value={formData.title}
                onChange={handleChange}
            />
            <input
                name='description'
                value={formData.description}
                onChange={handleChange}
            />
            <input
                name='imgUrl'
                value={formData.imgUrl}
                onChange={handleChange}
            />
            <button type="submit">Finalize Edit</button>
            <button>Cancel Edit</button>
            </form>}
        </div>
    
    );
}

export default EditDelete;
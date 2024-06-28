import { useForm } from '../hooks/ThingHooks';
import { useContext } from 'react';
import { FormContext } from '../context/contextProvider';


const Form = () => {

    const { addThing } = useContext(FormContext);

    const formState = useForm({
        title: "",
        description: "",
        imgUrl: ""
    });

    const { formData, handleChange, clearForm } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        addThing(formData);
        clearForm();
    }

    return (
        <form
            className='ugly-form'
            onSubmit={handleSubmit}
        >
            <h2>Add An Ugly Thing</h2>
            <input
                name='title'
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                name='description'
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                name='imgUrl'
                value={formData.imgUrl}
                onChange={handleChange}
                placeholder="Image URL"
            />
            <button type="submit">Add Your Ugly Thing</button>
        </form>
    );
}

export default Form;
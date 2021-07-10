import './createTodoForm.css'
import {useState} from "react";

export default function CreateTodoForm() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(title, description)


    }

    return (
        <div className='formContainer'>
            <form onSubmit={onSubmit}>
                <input className='input'
                       type="text"
                       placeholder='title'
                       onChange={({target: {value}}) => setTitle}
                       value={title}
                />


                <input className='input'
                       type="text"
                       placeholder='description'
                       onChange={({target: {value}}) => setDescription}
                       value={description}
                />

                <button className='btn' type='submit'>Створити завдання</button>
            </form>
        </div>

    )

}
import React from 'react';
import { useForm } from 'react-hook-form';

// import firebase from 'firebase/app';

function EditTask(props) {
    const { register, handleSubmit } = useForm(); // initialize the hook

    

    const onSubmit = async (data, e) => {
        e.preventDefault();
        props.togglePopup();
        console.log(props.tasksRef);
        await props.tasksRef.doc(props.task.id).update({
            header: data.header,
            text: data.text,
        });
        e.target.reset(); // reset after form submit

    };

    return (
        <section className="add-task">
        <h1>New Task</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Title</label>
            <input name="header" defaultValue={props.task.header} ref={register({ required: true })} /> 
            <label>Notes</label>
            <textarea name="text" defaultValue={props.task.text} ref={register} />
            <input type="submit" />
        </form>
        </section>
    );
}

export default EditTask;
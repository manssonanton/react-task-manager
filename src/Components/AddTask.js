import React from 'react';
import { useForm } from 'react-hook-form';

import firebase from 'firebase/app';

function AddTask(props) {
    const { register, handleSubmit } = useForm(); // initialize the hook
    const onSubmit = async (data, e) => {
        e.preventDefault();
        props.togglePopup();
        const { uid } = props.auth.currentUser;
        await props.tasksRef.add({
            header: data.header,
            text: data.text,
            completed: data.completed,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid
        })
        e.target.reset(); // reset after form submit

    };

    return (
        <section className="add-task">
        <h1>New Task</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Title</label>
            <input name="header" ref={register({ required: true })} /> {/* register an input */}
            <label>Notes</label>
            <textarea name="text" ref={register} />
            <label>Completed
            <input type="checkbox" name="completed" ref={register} />
            </label>
            <input type="submit" />
        </form>
        </section>
    );
}

export default AddTask;

// function AddTask(props) {
//     const dummy = useRef()
//     const tasksRef = props.firestore.collection('tasks');
//     const query = tasksRef.where('uid', '==', props.auth.currentUser.uid);
//     // const batch = props.firestore.batch();

//     const [tasks] = useCollectionData(query, { idField: 'id' });
//     const [formValue, setFormValue] = useState('')

//     const sendTask = async (e) => {
//         e.preventDefault();
//         const { uid } = props.auth.currentUser;

//         await tasksRef.add({
//             text: formValue,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//             uid
//         })
//         setFormValue('');
//         dummy.current.scrollIntoView({ behavior: 'smooth' });
//     }


//     return (
//         <>
//             <form onSubmit={sendTask}>
//                 <input placeholder="Header" value={formValue.header} onChange={(e) => setFormValue(e.target.value)} />
//                 <input placeholder="Username" value={formValue.username} onChange={(e) => setFormValue(e.target.value)} />
//                 <textarea placeholder="Further comments" value={formValue.text} onChange={(e) => setFormValue(e.target.value)} />

//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }


import React, {  useState } from 'react';
import Task from './Task'
import Popup from './Popup'
import AddTask from './AddTask'
import 'firebase/firestore';


import { useCollectionData } from 'react-firebase-hooks/firestore';

function TaskRoom(props) {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const tasksRef = props.firestore.collection('tasks');
    const query = tasksRef.where('uid', '==', props.auth.currentUser.uid);
    const [tasks] = useCollectionData(query, { idField: 'id' });

    return (
        <>
            <main className="task-room">
                {tasks && tasks.map(task => <Task key={task.id} tasksRef={tasksRef} task={task} auth={props.auth} isOpen={isOpen} togglePopup={togglePopup}/>)}
            </main>
            <div>
                {/* <input type="button" value="Click to Open Popup"  /> */}
                <div className="add-task-button">
                    <svg onClick={togglePopup} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
                </div>
                {isOpen && <Popup
                    content={<>
                        <AddTask tasksRef={tasksRef} auth={props.auth} togglePopup={togglePopup} />
                    </>}
                    handleClose={togglePopup}
                />}
            </div>
        </>
    )
}

export default TaskRoom;
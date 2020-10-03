import React, { useRef, useState } from 'react';
import Task from './Task'
import AddTask from './AddTask'
import 'firebase/firestore';


import { useCollectionData } from 'react-firebase-hooks/firestore';

function TaskRoom(props) {
    const tasksRef = props.firestore.collection('tasks');
    const query = tasksRef.where('uid', '==', props.auth.currentUser.uid);
    const [tasks] = useCollectionData(query, { idField: 'id' });

    return (
        <>
            <main className="task-room">
                {tasks && tasks.map(task => <Task key={task.id} tasksRef={tasksRef} task={task} auth={props.auth} />)}
            </main>
            <AddTask tasksRef={tasksRef} auth={props.auth} />
        </>
    )
}

export default TaskRoom;
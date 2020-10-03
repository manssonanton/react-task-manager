import React from 'react';

function Task(props) {
    const { text, header, completed } = props.task;
    const taskCompleted = completed === true ? 'completed' : 'not-completed';
    const deleteTask = async (e) => {
        //    let test = props.tasksRef.where('id', '==', props.task.id);

    }
    const completeTask = async (e) => {
        // let test = props.tasksRef.where('id', '==', props.task.id);

    }
    return (
        <div className={`task ${taskCompleted}`}>
            <h2 className="task-header">{header}</h2>
            <p className="task-text">{text}</p>
            {/* <p>{completed}</p> */}
            <button className="task-button" onClick={completeTask} >Mark Completed</button>
            <button className="task-button" onClick={deleteTask} >Delete</button>
        </div>

    )
}

export default Task;
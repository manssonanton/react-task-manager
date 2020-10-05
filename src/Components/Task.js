import React, { useState } from 'react';
import Popup from './Popup'
import EditTask from './EditTask'

function Task(props) {
    const { text, header } = props.task;

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const deleteTask = async (e) => {
        await props.tasksRef.doc(props.task.id).delete();

    }
    const editTask = async (e) => {
        //    let test = props.tasksRef.where('id', '==', props.task.id);
        togglePopup();

    }
    const completeTask = async (e) => {
        await props.tasksRef.doc(props.task.id).update({ completed: "true" });
    }
    return (
        <div className={`task ${props.task.completed}`}>
            <h2 className="task-header">{header}
            </h2>
            <p className="task-text">{text}</p>
            <div className="task-footer">
                <svg className="task-delete" onClick={deleteTask} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z" /></svg>
                <svg className="task-button" onClick={completeTask} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z" /></svg>
                <svg className="task-edit" task={props.task} onClick={editTask} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.994 12.964l3.106 3.105-4.112.931 1.006-4.036zm9.994-3.764l-5.84 5.921-3.202-3.202 5.841-5.919 3.201 3.2z" /></svg>
                {isOpen && <Popup
                    content={<>
                        <EditTask tasksRef={props.tasksRef} task={props.task} togglePopup={togglePopup} />
                    </>}
                    handleClose={togglePopup}
                />}
            </div>
        </div>

    )
}

export default Task;
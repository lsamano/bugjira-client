import React, { useState } from 'react';

type Props = {
    addNewTask: Function,
}

type Payload = {
    title: string,
    description: string,
}

function NewTaskForm(props: Props) {
    const { addNewTask } = props;
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload: Payload = { title, description };
        createNewTask(payload);
    };

    function createNewTask(newTask: Payload): void {
        fetch(`${process.env.REACT_APP_API_URI}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ task: newTask })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    // TODO: Error handling
                } else {
                    addNewTask(data);
                }
            });
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {       
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder='title' 
                value={title} 
                onChange={handleTitleChange} />
            <input 
                placeholder='description' 
                value={description} 
                onChange={handleDescriptionChange} />
            <input type='submit' />
        </form>
    );
}

export default NewTaskForm;
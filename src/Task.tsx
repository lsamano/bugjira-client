import React from 'react';

type Props = {
    id: number;
    title: string;
    description: string;
    status: string;
}

const Task: React.FC<Props> = (task: Props) => {
    const { id, title, description, status } = task;
    return (
    <div>
        <h1>
            #{id}. {title}
        </h1>
        <p>
            {description}
        </p>
        <p>Status: {status}</p>
    </div>
    );
}

export default Task;
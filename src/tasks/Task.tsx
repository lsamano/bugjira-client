import React from 'react';

type Props = {
    id: number;
    title: string;
    description: string;
    status: string;
}

function Task(props: Props) {
    const { id, title, description, status } = props;
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
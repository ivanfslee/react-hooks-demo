import React, { useState } from 'react'; //useState - part of react Hooks - allows functional based components to use state
import ResourceList from './ResourceList';

const App = () => {
    const [resource, setResource] = useState('posts');
    return (
        <div>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
}

export default App;
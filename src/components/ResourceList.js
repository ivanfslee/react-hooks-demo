import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => { //destructuring props passed in from parent component App.js - resource = props.resource
    const resources = useResources(resource);

    return (
        <ul>{resources.map(record => <li key={record.id}>{record.title}</li> )}</ul>
    );
}

export default ResourceList;
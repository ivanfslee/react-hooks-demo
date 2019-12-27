import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => { //destructuring props passed in from parent component App.js - resource = props.resource
    const [ resources, setResources ] = useState([]); //initialize state to be empty array

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        setResources(response.data); //equivalent to this.setState({resources: response.data})
    };
  
    useEffect(() => {
        fetchResource(resource);
    }, [resource]);

    return (
        <div>
            <h1>{resources.length}</h1>
        </div>
    );
}

export default ResourceList;
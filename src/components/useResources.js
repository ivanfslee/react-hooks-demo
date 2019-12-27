import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
    const [ resources, setResources ] = useState([]); //initialize state to be empty array

    useEffect(
        () => {
            (async (resource) => {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
                setResources(response.data); //equivalent to this.setState({resources: response.data})
            })(resource);
        },
        [resource]
    );
    return resources;
};

export default useResources;
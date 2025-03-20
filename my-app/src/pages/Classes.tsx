import React from 'react';
import { useLocation } from 'react-router';

const ClassPage: React.FC = () => { 
    const location = useLocation(); // returns a immutable location object contains info about current URL, including the pathname, search parameters
    const school = location.state?.school || 'no school selected';

    return (
        <div>
            <h1>Welcome to the class page</h1>
            <p>Your school: {school}</p>
        </div>
    );
}

export default ClassPage;
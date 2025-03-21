import React from 'react';
import { useLocation } from 'react-router';
import Sidebar from '../components/courseCatalog';

const ClassPage: React.FC = () => { 
    const location = useLocation();
    const school = location.state?.school || 'no school selected';

    return (
        <div className="flex h-screen">
            <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold mb-4">{school} Requirements Page</h2>
                <p>Add classes that you have taken below</p>
            </div> 
            <div className="w-64 flex-">
                <Sidebar />
            </div>
        </div>
    );
}

export default ClassPage;

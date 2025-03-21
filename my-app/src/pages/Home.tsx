import React from 'react';
import { useNavigate } from 'react-router';

const HomePage: React.FC = () => {
    const navigate = useNavigate(); // useNavigate returns a function to programatically navigate

    const selectSchool = (school: string) => {
        navigate('/classes', { state: { school } }); // Pass school directly into navigate
    };
  
    return (
        
        <div>
            <h1>CS Requirements Planner</h1>
            <h2 className="text-xl pt-5">Select your school</h2>
            <div className="pt-5">
                <button className="school" onClick={() => selectSchool('McCormick')}>
                McCormick
                </button>
                <button className="school" onClick={() => selectSchool('Weinberg')}>
                Weinberg
                </button>
            </div>
        </div>
    )
}

export default HomePage;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Weather from './components/bai1'; 
import StudentList from './components/StudentList';
import StudentDetail from './components/bai2';
import News from './components/bai3';
import Navigation from './components/menu';

const App: React.FC = () => {
    const appStyle = {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '960px',
        margin: '0 auto',
        padding: '20px'
    };

    return (
        <Router>
            <div style={appStyle}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Navigate to="/weather" />} />
                    
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/students" element={<StudentList />} />
                    <Route path="/students/:id" element={<StudentDetail />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
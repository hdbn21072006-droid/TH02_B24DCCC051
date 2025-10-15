import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    const navStyle = {
        background: '#333',
        padding: '10px',
        marginBottom: '20px',
    };

    const linkStyle = {
        color: 'white',
        margin: '0 15px',
        textDecoration: 'none',
        fontSize: '18px'
    };

    return (
        <nav style={navStyle}>
            <Link to="/weather" style={linkStyle}>Bài 1: Thời tiết</Link>
            <Link to="/students" style={linkStyle}>Bài 2: Sinh viên</Link>
            <Link to="/news" style={linkStyle}>Bài 3: Tin tức</Link>
        </nav>
    );
};

export default Navigation;
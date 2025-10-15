import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Student {
    id: number;
    name: string;
    email: string;
}

const StudentList: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setStudents(response.data);
        };
        fetchStudents();
    }, []);

    return (
        <div>
            <h2>Bài 2: Danh sách sinh viên</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        <Link to={`/students/${student.id}`}>
                            {student.name} - {student.email}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
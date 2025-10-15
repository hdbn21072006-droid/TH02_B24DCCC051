import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


interface StudentDetailInfo {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
    address: {
        street: string;
        city: string;
    };
}

const StudentDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [student, setStudent] = useState<StudentDetailInfo | null>(null);

    useEffect(() => {
        const fetchStudentDetail = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setStudent(response.data);
        };
        fetchStudentDetail();
    }, [id]);

    if (!student) {
        return <div>Đang tải...</div>;
    }

    return (
        <div>
            <h2>Chi tiết sinh viên</h2>
            <p><strong>Họ tên:</strong> {student.name}</p>
            <p><strong>Tên người dùng:</strong> {student.username}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Số điện thoại:</strong> {student.phone}</p>
            <p><strong>Website:</strong> {student.website}</p>
            <p><strong>Công ty:</strong> {student.company.name}</p>
            <p><strong>Địa chỉ:</strong> {student.address.street}, {student.address.city}</p>
            <Link to="/students">Quay lại danh sách</Link>
        </div>
    );
};

export default StudentDetail;
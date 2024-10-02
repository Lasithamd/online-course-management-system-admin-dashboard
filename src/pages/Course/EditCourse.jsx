// src/pages/Student/CreateStudent.js
import React from 'react';
import EditCourseForm from '../../components/Form/Course/EditCourseForm' 
import { useParams } from 'react-router-dom';
import TopHeader from '../../components/Navbar/TopHeader';
import Footer from '../../components/Footer/Footer';

const EditCourse = () => {
    const { id } = useParams();
    console.log(id); 
    return (
        <>
            <TopHeader />
            <div style={{ padding: '20px' }}>
              
                <EditCourseForm  id={id} onClose={() => window.history.back()} /> {/* Optional: Pass a close function */}
            </div>
            <Footer />
        </>
    );
};

export default EditCourse;

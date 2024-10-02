// src/pages/Student/CreateStudent.js
import React from 'react';
import AddCourseForm from '../../components/Form/Course/AddCourseForm' 

import TopHeader from '../../components/Navbar/TopHeader';
import Footer from '../../components/Footer/Footer';

const CreateCourse = () => {
    return (
        <>
            <TopHeader />
            <div style={{ padding: '20px' }}>
              
                <AddCourseForm onClose={() => window.history.back()} /> {/* Optional: Pass a close function */}
            </div>
            <Footer />
        </>
    );
};

export default CreateCourse;

// src/pages/Student/CreateStudent.js
import React from 'react';
import AddStudentForm from '../../components/Form/AddStudentForm';
import EditStudentForm from '../../components/Form/EditStudentForm'
import TopHeader from '../../components/Navbar/TopHeader';
import Footer from '../../components/Footer/Footer';

const EditStudent = () => {
    return (
        <>
            <TopHeader />
            <div style={{ padding: '20px' }}>
              
                <EditStudentForm onClose={() => window.history.back()} /> {/* Optional: Pass a close function */}
            </div>
            <Footer />
        </>
    );
};

export default EditStudent;

// src/pages/Student/CreateStudent.js
import React from 'react';
import AddStudentForm from '../../components/Form/AddStudentForm'; // Import the AddStudentForm component
import TopHeader from '../../components/Navbar/TopHeader';
import Footer from '../../components/Footer/Footer';

const CreateStudent = () => {
    return (
        <>
            <TopHeader />
            <div style={{ padding: '20px' }}>
              
                <AddStudentForm onClose={() => window.history.back()} /> {/* Optional: Pass a close function */}
            </div>
            <Footer />
        </>
    );
};

export default CreateStudent;

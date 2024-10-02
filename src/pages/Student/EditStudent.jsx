// src/pages/Student/CreateStudent.js
import React from 'react';
import { useParams } from 'react-router-dom';
import EditStudentForm from '../../components/Form/EditStudentForm'
import TopHeader from '../../components/Navbar/TopHeader';
import Footer from '../../components/Footer/Footer';

const EditStudent = () => {
    const { id } = useParams(); // Use useParams here to get the student ID from the URL
    console.log(id); 
    
    return (
        <>
            <TopHeader />
           <EditStudentForm id={id} />
            <Footer />
        </>
    );
};

export default EditStudent;

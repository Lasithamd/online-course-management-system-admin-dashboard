import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopHeader from '../../components/Navbar/TopHeader';
import Footer from '../../components/Footer/Footer';
import { Box, Button, Container, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import instance from '../../service/AxiosOrder';
import StudentCourseList from '../../components/Table/Student/StudentCourseList'
import { useNavigate } from 'react-router-dom';


const AddStuCourse = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');
  const { id } = useParams();  // Get the student ID from the URL
  const [selectedCourse, setSelectedCourse] = useState(id || '');

  // Fetch the list of courses
  useEffect(() => {
    instance.get(`/student-course/course/${id}`)
      .then((response) => {
        setCourses(response.data); // Store course list from API
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);  // Empty dependency array means this effect runs once after the component mounts

  // Fetch the student data if the `id` is present
  useEffect(() => {
    if (id) {
      instance.get(`/student/${id}`)
        .then((response) => {
          const student = response.data;
          setName(student[0]?.name || '');  // Use optional chaining in case student data is missing
          setSelectedCourse(student[0]?.course_id || ''); // Assuming the student has a course_id
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    }
  }, [id]);  // This effect runs when `id` changes

  const onSubmit = () => {
    const data = {
      student_id: id,
      course_id: selectedCourse
    };
    instance.post(`/student-course/`, data)
      .then((response) => {
        const respond = response.data;
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  };

  const handleClose = () => {
    navigate(`/student`);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  return (
    <>
      <TopHeader />
      <Container maxWidth="sm">
        <Box component="form" sx={{ marginTop: 2 }}>
          <Typography variant="h6" gutterBottom>
            Add Student to Course
          </Typography>
          <TextField
            name="name"
            label="Name"
            value={name}
            disabled
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Select Course</InputLabel>
            <Select
              value={selectedCourse}
              onChange={handleCourseChange}
              required
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="button" onClick={onSubmit} variant="contained" color="primary">
            Add Course Student
          </Button>
          <Button onClick={() => handleClose()} variant="outlined" color="secondary" sx={{ marginLeft: 1 }}>
            Cancel
          </Button>
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ marginTop: 2 }}>

        <StudentCourseList id={id} />
      </Container>
      <Footer />
    </>
  );
};

export default AddStuCourse;

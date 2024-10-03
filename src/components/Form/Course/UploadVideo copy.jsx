import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Box,
} from '@mui/material';
import instance from '../../../service/AxiosOrder'; // Assuming you're using Axios for API calls
import './Style.css';

export default function VideoForm(id) { // Change `id` to be destructured from props


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null); // State for thumbnail image
  const [video, setVideo] = useState(null); // State for the video file
  const [courses, setCourses] = useState([]); // State to store courses list
  const [selectedCourse, setSelectedCourse] = useState(id || ''); // Set the initial value to the passed course ID

  // Fetch the course list when the component mounts
  useEffect(() => {
    instance.get('/course')
      .then((response) => {
        setCourses(response.data); // Store course list from API
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('thumbnails', thumbnail); // Use the File object
    formData.append('video', video); // Use the File object
    formData.append('course_id', selectedCourse);

    instance.post('/video', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log('Course uploaded successfully:', response.data);
      // Optionally, reset form fields
      setName('');
      setDescription('');
      setThumbnail(null);
      setVideo(null);
      setSelectedCourse(id || ''); // Reset selected course to the initial value
    })
    .catch((error) => {
      console.error('Error uploading course:', error);
    });
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box component="form" onSubmit={onSubmit} noValidate>
          {/* Course Selection Dropdown */}
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

          {/* Course Name */}
          <TextField
            name="name"
            label="Course Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            margin="normal"
          />

          {/* Course Description */}
          <TextField
            name="description"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
            margin="normal"
          />

          {/* File upload input for Thumbnail */}
          <InputLabel>Upload Thumbnails</InputLabel>
          <input
            className='file-input'
            name='thumbnails'
            type="file"
            accept="image/*"  // Accept image files for thumbnails
            onChange={(e) => setThumbnail(e.target.files[0])} // Get the File object
            required
          />
          <br />
          <InputLabel>Upload Video</InputLabel>
          {/* File upload input for Video */}
          <input
            className='file-input'
            name='video'
            type="file"
            accept="video/*"  // Accept video files
            onChange={(e) => setVideo(e.target.files[0])} // Get the File object
            required
          />
          <br />

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Upload Video
          </Button>
        </Box>
      </Container>
    </>
  );
}

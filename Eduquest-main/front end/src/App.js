import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import Assignment from './components/assignment';
import Second from './components/second';
import Contact from './components/Contact';
import Resources from './components/resources';
import Video from './components/video';
import Video1 from './components/video1';
import Todolist from './components/todolist';
import Feedback from './components/Feedback';
import Certificate from './components/certificate';
import Roadmap from './components/roadmap';
import CourseContent from './components/course content';
import Quiz from './components/quiz';


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch images from the backend
    fetch('http://localhost:5000/images')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <div>
        
        <Routes>
        <Route path="/" element={<Home images={images} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/Second' element={<Second/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/assignment' element={<Assignment/>}/>
          <Route path='/Feedback' element={<Feedback/>}/>
          <Route path="/Resources" element={<Resources/>}/>
          <Route path="/Video" element={<Video/>}/>
        <Route path="/Video1" element={<Video1/>}/>
        <Route path="/Todolist" element={<Todolist/>}/>
        <Route path="/Certificate" element={<Certificate/>}/>
        <Route path="/roadmap" element={<Roadmap/>}/>
        <Route path="/CourseContent" element={<CourseContent/>}/>
        <Route path="/Quiz" element={<Quiz/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

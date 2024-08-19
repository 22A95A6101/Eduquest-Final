
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './roadmap.css';

import AI from '../images/AI.jpg';
import MachineLearning from '../images/MachineLearning.webp';
import Python from '../images/Python.jpg';
import Java from '../images/Java.jpg';
import FSD from '../images/FSD.jpg';
import Devops from '../images/Devops.jpg';
import VR_AR from '../images/VR_AR.jpg';
import RedHat from '../images/RedHat.png';
import Data_analyst from '../images/Data_analyst.jpg';
import Data_scientist from '../images/Data_scientist.jpg';

const roadmapData = {
  ai: {
    name: 'Artificial Intelligence',
    description: 'Learn the fundamentals of AI and its applications.',
    image: AI,
  },
  ml: {
    name: 'Machine Learning',
    description: 'Explore the world of machine learning and predictive modeling.',
    image: MachineLearning,
  },
  python: {
    name: 'Python Programming',
    description: 'Master the Python language and its various applications.',
    image: Python,
  },
  java: {
    name: 'Java Programming',
    description: 'Become proficient in Java programming and development.',
    image: Java,
  },
  fullstack: {
    name: 'Full Stack Development',
    description: 'Learn both front-end and back-end development for web applications.',
    image: FSD,
  },
  devops: {
    name: 'DevOps Practices',
    description: 'Explore DevOps principles and practices for efficient development.',
    image: Devops,
  },
  arvr: {
    name: 'Augmented & Virtual Reality',
    description: 'Dive into the world of AR and VR technologies and applications.',
    image: VR_AR,
  },
  redhat: {
    name: 'Red Hat Certification',
    description: 'Prepare for Red Hat certification exams and become a Linux pro.',
    image: RedHat,
  },
  dataanalyst: {
    name: 'Data Analyst',
    description: 'Learn data analysis and visualization techniques for data-driven decisions.',
    image: Data_analyst,
  },
  datascience: {
    name: 'Data Science',
    description: 'Master data science tools and techniques for data-driven insights.',
    image: Data_scientist,
  },
};

const Roadmap = ({ selectedCourse }) => {
  const course = roadmapData[selectedCourse];

  if (!course) {
    return null;
  }

  return (
    <div className="division">
      <Row>
        <Col md={6}>
          <br /><br /><br />
          <Card className="course-card">
            <Card.Img variant="top" src={course.image} className="course-image" />
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div className="additional-content">
            <h3 className='heading3'>Why Choose {course.name}?</h3>
            <p className='para'>
              {course.name} is a fascinating field that offers numerous opportunities in various industries. By mastering {course.name}, you can unlock a wide range of career prospects and make a significant impact in the world of technology.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Roadmap;

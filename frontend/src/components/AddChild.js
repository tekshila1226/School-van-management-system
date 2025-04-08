import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaArrowLeft, FaCalendarAlt, FaChild, FaSave, FaSchool } from 'react-icons/fa';
import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddChild = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Form validation
    if (!name || !age || !schoolName) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    // Get token from local storage
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You need to be logged in.');
      setIsLoading(false);
      return;
    }

    try {
      // API request to add child details
      const response = await axios.post(
        'http://localhost:4000/api/child/add-child', 
        { name, age, schoolName, grade },
        {
          headers: { token },
        }
      );

      setSuccess('Child added successfully');
      setName('');
      setAge('');
      setSchoolName('');
      setGrade('');
    } catch (err) {
      setError('Failed to add child. Please try again later.');
      console.error('Error adding child:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="my-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white">
          <div className="d-flex align-items-center">
            <FaChild className="me-2" size={20} />
            <h4 className="mb-0">Add Child</h4>
          </div>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="childName" className="mb-3">
                  <Form.Label>Child Name</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaChild />
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="Enter child's full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group controlId="childAge" className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter child's age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    min="3"
                    max="18"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="childSchool" className="mb-3">
                  <Form.Label>School Name</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaSchool />
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="Enter child's school name"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group controlId="childGrade" className="mb-3">
                  <Form.Label>Grade/Class</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter child's grade or class"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-between mt-4">
              <Button 
                variant="secondary" 
                onClick={() => navigate('/parent-dashboard')}
                className="d-flex align-items-center"
              >
                <FaArrowLeft className="me-2" /> Back to Dashboard
              </Button>
              
              <Button 
                variant="primary" 
                type="submit" 
                disabled={isLoading}
                className="d-flex align-items-center"
              >
                <FaSave className="me-2" /> {isLoading ? 'Adding...' : 'Add Child'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddChild;
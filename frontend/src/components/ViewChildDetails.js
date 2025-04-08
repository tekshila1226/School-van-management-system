import { Alert, Badge, Button, Card, Container, ListGroup, Spinner } from 'react-bootstrap';
import { FaArrowLeft, FaBus, FaChild, FaEdit, FaSchool, FaTrash } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewChildDetails = () => {
  const navigate = useNavigate();
  const [children, setChildren] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChildren();
  }, []);

  const fetchChildren = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You need to be logged in.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        'http://localhost:4000/api/child/get-children', 
        {
          headers: { token },
        }
      );
      setChildren(response.data.data);
    } catch (err) {
      setError('Failed to fetch children. Please try again later.');
      console.error('Error fetching children:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditChild = (childId) => {
    navigate(`/edit-child/${childId}`);
  };

  const handleDeleteChild = async (childId) => {
    if (window.confirm('Are you sure you want to remove this child?')) {
      const token = localStorage.getItem('authToken');
      try {
        await axios.delete(
          `http://localhost:4000/api/child/delete-child/${childId}`,
          {
            headers: { token },
          }
        );
        fetchChildren(); // Refresh list
      } catch (err) {
        setError('Failed to delete child. Please try again.');
      }
    }
  };

  const getBadgeColor = (age) => {
    if (age < 7) return 'danger';
    if (age < 12) return 'warning';
    return 'success';
  };

  return (
    <Container className="my-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-info text-white">
          <div className="d-flex align-items-center">
            <FaChild className="me-2" size={20} />
            <h4 className="mb-0">View Children</h4>
          </div>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          
          {loading ? (
            <div className="text-center my-4">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2">Loading children details...</p>
            </div>
          ) : children.length > 0 ? (
            <ListGroup variant="flush">
              {children.map((child) => (
                <ListGroup.Item key={child.id} className="border-bottom py-3">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="mb-1">
                        <FaChild className="me-2 text-primary" /> {child.name}
                        <Badge 
                          bg={getBadgeColor(child.age)} 
                          className="ms-2"
                        >
                          {child.age} years
                        </Badge>
                      </h5>
                      
                      <div className="d-flex flex-column mt-2">
                        <div className="mb-2">
                          <FaSchool className="me-2 text-secondary" /> 
                          <span className="text-muted">School:</span> {child.school_name}
                        </div>
                        
                        {child.bus_route && (
                          <div className="mb-2">
                            <FaBus className="me-2 text-secondary" /> 
                            <span className="text-muted">Bus Route:</span> {child.bus_route}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Button 
                        variant="outline-primary" 
                        size="sm" 
                        className="me-2"
                        onClick={() => handleEditChild(child.id)}
                      >
                        <FaEdit /> Edit
                      </Button>
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => handleDeleteChild(child.id)}
                      >
                        <FaTrash /> Remove
                      </Button>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <div className="text-center my-4">
              <FaChild size={50} className="text-muted mb-3" />
              <h5>No children registered yet</h5>
              <p className="text-muted">Add your child's details to get started</p>
              <Button 
                variant="primary" 
                onClick={() => navigate('/add-child')}
              >
                Add Child
              </Button>
            </div>
          )}
        </Card.Body>
        <Card.Footer className="bg-light">
          <Button 
            variant="secondary" 
            onClick={() => navigate('/parent-dashboard')}
            className="d-flex align-items-center"
          >
            <FaArrowLeft className="me-2" /> Back to Dashboard
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ViewChildDetails;
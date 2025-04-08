import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {
  FaBars,
  FaCalendarAlt,
  FaChild,
  FaHome,
  FaList,
  FaSchool,
  FaSignOutAlt,
  FaTimes,
  FaUserPlus
} from 'react-icons/fa';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Navigation functions
  const navigateTo = (path) => {
    navigate(path);
  };

  // Logout function
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    // You can remove other auth-related items if needed
    localStorage.removeItem('user');
    
    // Navigate to home page and refresh
    window.location.href = '/';
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`bg-dark text-white ${sidebarOpen ? 'w-64' : 'w-16'}`} style={{ 
        minHeight: '100vh', 
        width: sidebarOpen ? '250px' : '60px',
        transition: 'width 0.3s ease',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="p-3 d-flex justify-content-between align-items-center">
          {sidebarOpen && <h5 className="m-0">Bus Tracker</h5>}
          <Button 
            variant="link" 
            className="text-white p-0" 
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </Button>
        </div>
        
        <hr className="bg-secondary my-2" />
        
        <div className="nav flex-column flex-grow-1">
          <Button 
            variant="link" 
            className="text-white text-start py-3 d-flex align-items-center text-decoration-none" 
            onClick={() => navigateTo('/')}
          >
            <FaHome className="me-3" />
            {sidebarOpen && 'Home'}
          </Button>
          
          <Button 
            variant="link" 
            className="text-white text-start py-3 d-flex align-items-center text-decoration-none" 
            onClick={() => navigateTo('/add-child')}
          >
            <FaUserPlus className="me-3" />
            {sidebarOpen && 'Add Child'}
          </Button>
          
          <Button 
            variant="link" 
            className="text-white text-start py-3 d-flex align-items-center text-decoration-none" 
            onClick={() => navigateTo('/view-child-details')}
          >
            <FaList className="me-3" />
            {sidebarOpen && 'View Children'}
          </Button>
          
          <Button 
            variant="link" 
            className="text-white text-start py-3 d-flex align-items-center text-decoration-none" 
            onClick={() => navigateTo('/bus-schedule')}
          >
            <FaCalendarAlt className="me-3" />
            {sidebarOpen && 'Bus Schedule'}
          </Button>
          
          {/* Spacer to push logout to bottom */}
          <div className="flex-grow-1"></div>
          
          {/* Logout button */}
          <Button 
            variant="link" 
            className="text-white text-start py-3 d-flex align-items-center text-decoration-none mt-auto mb-3" 
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-3" />
            {sidebarOpen && 'Logout'}
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div style={{ 
        marginLeft: sidebarOpen ? '250px' : '60px',
        width: '100%',
        transition: 'margin-left 0.3s ease'
      }}>
        <Container className="my-4 py-3">
          <Row className="mb-4">
            <Col>
              <h1>Parent Dashboard</h1>
              <p className="text-muted">Monitor your child's school bus transportation</p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={6} md={6} sm={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary p-3 rounded-circle text-white me-3">
                      <FaUserPlus size={24} />
                    </div>
                    <Card.Title className="mb-0">Add Child</Card.Title>
                  </div>
                  <Card.Text className="flex-grow-1">
                    Register your child's details to the school bus tracking system.
                  </Card.Text>
                  <Button 
                    variant="primary" 
                    onClick={() => navigateTo('/add-child')}
                    className="align-self-start"
                  >
                    <FaUserPlus className="me-2" /> Add Child
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6} md={6} sm={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-info p-3 rounded-circle text-white me-3">
                      <FaList size={24} />
                    </div>
                    <Card.Title className="mb-0">View Children</Card.Title>
                  </div>
                  <Card.Text className="flex-grow-1">
                    View and manage your children's bus routes, schedules and transportation details.
                  </Card.Text>
                  <Button 
                    variant="info" 
                    onClick={() => navigateTo('/view-child-details')}
                    className="text-white align-self-start"
                  >
                    <FaList className="me-2" /> View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success p-3 rounded-circle text-white me-3">
                      <FaSchool size={24} />
                    </div>
                    <Card.Title className="mb-0">School Information</Card.Title>
                  </div>
                  <Card.Text className="flex-grow-1">
                    Access important information about your child's school and transportation policies.
                  </Card.Text>
                  <Button 
                    variant="success" 
                    onClick={() => navigateTo('/school-info')}
                    className="align-self-start"
                  >
                    <FaSchool className="me-2" /> School Info
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning p-3 rounded-circle text-white me-3">
                      <FaCalendarAlt size={24} />
                    </div>
                    <Card.Title className="mb-0">Bus Schedule</Card.Title>
                  </div>
                  <Card.Text className="flex-grow-1">
                    Check the daily bus schedule and track your child's bus in real-time.
                  </Card.Text>
                  <Button 
                    variant="warning" 
                    onClick={() => navigateTo('/bus-schedule')}
                    className="text-white align-self-start"
                  >
                    <FaCalendarAlt className="me-2" /> View Schedule
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ParentDashboard;
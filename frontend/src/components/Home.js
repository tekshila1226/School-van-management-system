import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaBell, FaBus, FaMapMarkedAlt, FaShieldAlt, FaUserFriends } from 'react-icons/fa';

import React from 'react';

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '3rem 0'
    }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50' }}>
              Welcome to School Bus Management System
            </h1>
            <p className="lead fs-4" style={{ color: '#7f8c8d' }}>
              Manage your school transportation operations efficiently and securely
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {/* For Parents */}
          <Col lg={5} className="mb-4">
            <Card className="h-100 shadow-lg border-0" style={{ 
              borderRadius: '15px',
              transition: 'transform 0.3s ease',
              background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)'
            }}>
              <Card.Body className="p-4 d-flex flex-column">
                <div className="text-center mb-4">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <FaUserFriends size={32} color="white" />
                  </div>
                  <Card.Title className="fw-bold fs-3 mb-3" style={{ color: '#2c3e50' }}>
                    For Parents
                  </Card.Title>
                  <Card.Text className="fs-5" style={{ color: '#7f8c8d' }}>
                    Track your child's bus in real-time, receive notifications, and manage transportation details.
                  </Card.Text>
                </div>
                <Button 
                  variant="primary" 
                  href="/login" 
                  className="mt-auto align-self-center"
                  style={{
                    borderRadius: '50px',
                    padding: '10px 30px',
                    fontWeight: '600',
                    background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
                    border: 'none',
                    fontSize: '1.1rem'
                  }}
                >
                  Login as Parent
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* For Van Drivers */}
          <Col lg={5} className="mb-4">
            <Card className="h-100 shadow-lg border-0" style={{ 
              borderRadius: '15px',
              transition: 'transform 0.3s ease',
              background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)'
            }}>
              <Card.Body className="p-4 d-flex flex-column">
                <div className="text-center mb-4">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f46b45 0%, #eea849 100%)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <FaBus size={32} color="white" />
                  </div>
                  <Card.Title className="fw-bold fs-3 mb-3" style={{ color: '#2c3e50' }}>
                    For Van Drivers
                  </Card.Title>
                  <Card.Text className="fs-5" style={{ color: '#7f8c8d' }}>
                    Manage routes, schedules, and student information with our intuitive dashboard.
                  </Card.Text>
                </div>
                <Button 
                  variant="warning" 
                  href="/login" 
                  className="mt-auto align-self-center"
                  style={{
                    borderRadius: '50px',
                    padding: '10px 30px',
                    fontWeight: '600',
                    background: 'linear-gradient(to right, #f46b45 0%, #eea849 100%)',
                    border: 'none',
                    fontSize: '1.1rem'
                  }}
                >
                  Login as Driver
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="mt-5 pt-5">
          <Col className="text-center">
            <h2 className="fw-bold mb-4" style={{ color: '#2c3e50' }}>Key Features</h2>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4}>
            <div className="p-4 text-center" style={{ 
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              height: '100%'
            }}>
              <div className="mb-3" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaMapMarkedAlt size={24} color="#2575fc" />
              </div>
              <h5 className="fw-bold" style={{ color: '#2c3e50' }}>Real-Time Tracking</h5>
              <p style={{ color: '#7f8c8d' }}>Track school buses in real-time with our advanced GPS system.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 text-center" style={{ 
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              height: '100%'
            }}>
              <div className="mb-3" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaBell size={24} color="#f46b45" />
              </div>
              <h5 className="fw-bold" style={{ color: '#2c3e50' }}>Instant Notifications</h5>
              <p style={{ color: '#7f8c8d' }}>Receive alerts for delays, arrivals, and important updates.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 text-center" style={{ 
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              height: '100%'
            }}>
              <div className="mb-3" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaShieldAlt size={24} color="#1d976c" />
              </div>
              <h5 className="fw-bold" style={{ color: '#2c3e50' }}>Secure Access</h5>
              <p style={{ color: '#7f8c8d' }}>Enterprise-grade security to protect your data and privacy.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
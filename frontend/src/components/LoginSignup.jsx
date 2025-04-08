import { Alert, Button, Card, Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap';
import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '', role: 'parent' });
  const [registerData, setRegisterData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '', 
    tel_num: '', 
    address: '', 
    role: 'parent' 
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const validateRegister = () => {
    const newErrors = {};
    
    if (!registerData.name.trim()) newErrors.name = 'Name is required';
    if (!validator.isEmail(registerData.email)) newErrors.email = 'Invalid email address';
    if (registerData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (registerData.password !== registerData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!/^\d{10}$/.test(registerData.tel_num)) newErrors.tel_num = 'Invalid phone number (10 digits required)';
    if (!registerData.address.trim()) newErrors.address = 'Address is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setApiError('');
    
    try {
      const response = await axios.post('http://localhost:4000/api/user/login', loginData);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify({
          id: response.data.userId,
          email: loginData.email,
          role: loginData.role
        }));
        navigate(loginData.role === 'parent' ? '/parent-dashboard' : '/driver-dashboard');
      }
    } catch (error) {
      setApiError(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateRegister()) return;
    
    setLoading(true);
    setApiError('');
    
    try {
      const { confirmPassword, ...dataToSend } = registerData;
      const response = await axios.post('http://localhost:4000/api/user/register', dataToSend);
      
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify({
          id: response.data.userId,
          email: registerData.email,
          role: registerData.role
        }));
        navigate(registerData.role === 'parent' ? '/parent-dashboard' : '/driver-dashboard');
      }
    } catch (error) {
      setApiError(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem 0'
    }}>
      <Container className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col md={8} lg={6} xl={5}>
            <Card className="shadow-lg border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <Card.Body className="p-0">
                <div style={{
                  background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
                  color: 'white',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <h2 className="mb-0">School Transport System</h2>
                  <p className="mb-0">Manage your child's transportation with ease</p>
                </div>
                
                <Tabs
                  activeKey={activeTab}
                  onSelect={(k) => {
                    setActiveTab(k);
                    setApiError('');
                    setErrors({});
                  }}
                  className="mb-0"
                  fill
                  variant="pills"
                  style={{ 
                    padding: '0 2rem',
                    backgroundColor: '#000000'
                  }}
                >
                  <Tab eventKey="login" title="Login" className="p-4">
                    <Form onSubmit={handleLogin}>
                      {apiError && activeTab === 'login' && (
                        <Alert variant="danger" className="mt-3">{apiError}</Alert>
                      )}
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">I am a</Form.Label>
                        <div className="d-flex gap-3">
                          <Form.Check
                            type="radio"
                            label="Parent"
                            name="role"
                            value="parent"
                            checked={loginData.role === 'parent'}
                            onChange={handleLoginChange}
                            id="login-parent"
                          />
                          <Form.Check
                            type="radio"
                            label="Van Driver"
                            name="role"
                            value="van_driver"
                            checked={loginData.role === 'van_driver'}
                            onChange={handleLoginChange}
                            id="login-driver"
                          />
                        </div>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={loginData.email}
                          onChange={handleLoginChange}
                          required
                          placeholder="Enter your email"
                          style={{ borderRadius: '8px', padding: '12px' }}
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          required
                          placeholder="Enter your password"
                          style={{ borderRadius: '8px', padding: '12px' }}
                        />
                      </Form.Group>
                      
                      <div className="d-grid gap-2 mb-3">
                        <Button 
                          variant="primary" 
                          type="submit" 
                          disabled={loading}
                          style={{
                            borderRadius: '8px',
                            padding: '12px',
                            fontWeight: '600',
                            background: 'linear-gradient(to right, #2575fc 0%, #6a11cb 100%)',
                            border: 'none'
                          }}
                        >
                          {loading ? 'Logging in...' : 'Login'}
                        </Button>
                      </div>
                    </Form>
                  </Tab>
                  
                  <Tab eventKey="signup" title="Sign Up" className="p-4">
                    <Form onSubmit={handleRegister}>
                      {apiError && activeTab === 'signup' && (
                        <Alert variant="danger" className="mt-3">{apiError}</Alert>
                      )}
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">I am a</Form.Label>
                        <div className="d-flex gap-3">
                          <Form.Check
                            type="radio"
                            label="Parent"
                            name="role"
                            value="parent"
                            checked={registerData.role === 'parent'}
                            onChange={handleRegisterChange}
                            id="register-parent"
                          />
                          <Form.Check
                            type="radio"
                            label="Van Driver"
                            name="role"
                            value="van_driver"
                            checked={registerData.role === 'van_driver'}
                            onChange={handleRegisterChange}
                            id="register-driver"
                          />
                        </div>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={registerData.name}
                          onChange={handleRegisterChange}
                          isInvalid={!!errors.name}
                          required
                          placeholder="Enter your full name"
                          style={{ borderRadius: '8px', padding: '12px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={registerData.email}
                          onChange={handleRegisterChange}
                          isInvalid={!!errors.email}
                          required
                          placeholder="Enter your email"
                          style={{ borderRadius: '8px', padding: '12px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={registerData.password}
                          onChange={handleRegisterChange}
                          isInvalid={!!errors.password}
                          required
                          placeholder="Enter your password"
                          style={{ borderRadius: '8px', padding: '12px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={registerData.confirmPassword}
                          onChange={handleRegisterChange}
                          isInvalid={!!errors.confirmPassword}
                          required
                          placeholder="Confirm your password"
                          style={{ borderRadius: '8px', padding: '12px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.confirmPassword}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="tel_num"
                          value={registerData.tel_num}
                          onChange={handleRegisterChange}
                          isInvalid={!!errors.tel_num}
                          required
                          placeholder="Enter your phone number"
                          style={{ borderRadius: '8px', padding: '12px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.tel_num}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="address"
                          value={registerData.address}
                          onChange={handleRegisterChange}
                          isInvalid={!!errors.address}
                          required
                          placeholder="Enter your address"
                          style={{ borderRadius: '8px', padding: '12px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.address}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <div className="d-grid gap-2 mb-3">
                        <Button 
                          variant="success" 
                          type="submit" 
                          disabled={loading}
                          style={{
                            borderRadius: '8px',
                            padding: '12px',
                            fontWeight: '600',
                            background: 'linear-gradient(to right, #1d976c 0%, #93f9b9 100%)',
                            border: 'none'
                          }}
                        >
                          {loading ? 'Registering...' : 'Register'}
                        </Button>
                      </div>
                    </Form>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginSignup
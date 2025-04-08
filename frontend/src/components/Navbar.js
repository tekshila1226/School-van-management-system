import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { FaBus, FaHome, FaSignInAlt, FaUserCircle, FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const NavigationBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (token) {
      setIsAuthenticated(true);
      if (user && user.role) {
        setUserRole(user.role);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUserRole('');
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark" style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #1a2533 100%)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      padding: '0.8rem 0'
    }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" style={{
          fontWeight: '700',
          fontSize: '1.5rem',
          letterSpacing: '0.5px'
        }}>
          <FaBus className="me-2" size={28} style={{ color: '#4ecca3' }} />
          <span style={{ color: '#ffffff' }}>School</span>
          <span style={{ color: '#4ecca3' }}>Transit</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border: 'none' }}>
          <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="nav-link-custom mx-2"
              style={{
                color: '#ffffff',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                borderRadius: '6px'
              }}
              activeStyle={{
                backgroundColor: 'rgba(78, 204, 163, 0.2)',
                color: '#4ecca3'
              }}
            >
              <FaHome className="me-1" /> Home
            </Nav.Link>

            {isAuthenticated && userRole === 'parent' && (
              <Nav.Link 
                as={Link} 
                to="/parent-dashboard" 
                className="nav-link-custom mx-2"
                style={{
                  color: '#ffffff',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px'
                }}
                activeStyle={{
                  backgroundColor: 'rgba(78, 204, 163, 0.2)',
                  color: '#4ecca3'
                }}
              >
                Parent Dashboard
              </Nav.Link>
            )}

            {isAuthenticated && userRole === 'van_driver' && (
              <Nav.Link 
                as={Link} 
                to="/driver-dashboard" 
                className="nav-link-custom mx-2"
                style={{
                  color: '#ffffff',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px'
                }}
                activeStyle={{
                  backgroundColor: 'rgba(78, 204, 163, 0.2)',
                  color: '#4ecca3'
                }}
              >
                Driver Dashboard
              </Nav.Link>
            )}

            {isAuthenticated ? (
              <Dropdown className="ms-3">
                <Dropdown.Toggle 
                  variant="link" 
                  id="dropdown-profile" 
                  className="d-flex align-items-center profile-toggle"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: '500',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem'
                  }}
                >
                  <div className="d-flex align-items-center">
                    <FaUserCircle size={20} className="me-2" style={{ color: '#4ecca3' }} />
                    <span>My Account</span>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu 
                  className="dropdown-menu-custom" 
                  style={{
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                    padding: '0.5rem 0',
                    background: '#2c3e50'
                  }}
                >
                  <Dropdown.Item 
                    as={Link} 
                    to="/profile" 
                    className="dropdown-item-custom"
                    style={{
                      color: '#ffffff',
                      padding: '0.5rem 1.5rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item 
                    as={Link} 
                    to="/settings" 
                    className="dropdown-item-custom"
                    style={{
                      color: '#ffffff',
                      padding: '0.5rem 1.5rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Divider style={{ borderColor: '#3a4b5c' }} />
                  <Dropdown.Item 
                    onClick={handleLogout} 
                    className="dropdown-item-custom"
                    style={{
                      color: '#ff6b6b',
                      padding: '0.5rem 1.5rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Nav.Link 
                  as={Link} 
                  to="/login" 
                  className="nav-link-custom mx-2"
                  style={{
                    color: '#ffffff',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px'
                  }}
                  activeStyle={{
                    backgroundColor: 'rgba(78, 204, 163, 0.2)',
                    color: '#4ecca3'
                  }}
                >
                  <FaSignInAlt className="me-1" /> Login
                </Nav.Link>
                <Button 
                  as={Link} 
                  to="/register" 
                  variant="success" 
                  className="ms-2 register-btn"
                  style={{
                    background: '#4ecca3',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.5rem 1.5rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FaUserPlus className="me-1" /> Register
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
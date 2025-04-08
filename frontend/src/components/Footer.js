import { Col, Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaSchool, FaTwitter } from 'react-icons/fa';

import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#121212',
    color: '#e0e0e0',
    paddingTop: '2rem',
    paddingBottom: '1rem',
  };

  const headingStyle = { color: '#ffffff', marginBottom: '1rem' };
  const textStyle = { color: '#b0b0b0', fontSize: '0.95rem' };
  const linkStyle = { color: '#b0b0b0', textDecoration: 'none', transition: 'color 0.3s ease' };
  const iconLinkStyle = {
    color: '#ffffff',
    backgroundColor: '#1f1f1f',
    padding: '0.5rem',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };
  const iconTextStyle = { color: '#4dabf7', marginRight: '0.5rem' };
  const inputStyle = {
    padding: '0.5rem',
    borderRadius: '4px',
    border: 'none',
    marginRight: '0.5rem',
    width: '100%',
    maxWidth: '220px',
  };
  const buttonStyle = {
    backgroundColor: '#4dabf7',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="g-4">
          {/* About Section */}
          <Col lg={4} md={6}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <FaSchool size={28} style={iconTextStyle} />
              <h4 style={{ marginBottom: 0, color: '#ffffff' }}>School Bus Management</h4>
            </div>
            <p style={textStyle}>
              Providing safe and reliable transportation solutions for schools and parents since 2023.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" style={iconLinkStyle}><FaFacebook size={20} /></a>
              <a href="#" style={iconLinkStyle}><FaTwitter size={20} /></a>
              <a href="#" style={iconLinkStyle}><FaInstagram size={20} /></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 style={headingStyle}>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="/" style={linkStyle}>Home</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/about" style={linkStyle}>About Us</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/services" style={linkStyle}>Services</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/contact" style={linkStyle}>Contact</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/privacy" style={linkStyle}>Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h5 style={headingStyle}>Contact Us</h5>
            <ul style={{ listStyle: 'none', padding: 0, color: '#b0b0b0' }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <FaMapMarkerAlt style={iconTextStyle} />
                No. 123, Main Street, Colombo
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <FaPhone style={iconTextStyle} />
                +94 77 123 4567
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <FaEnvelope style={iconTextStyle} />
                info@schoolbus.lk
              </li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col lg={3} md={6}>
            <h5 style={headingStyle}>Stay Updated</h5>
            <p style={textStyle}>Subscribe to our newsletter to get the latest updates and offers.</p>
            <div style={{ display: 'flex', marginTop: '0.5rem' }}>
              <input type="email" placeholder="Your email" style={inputStyle} />
              <button type="button" style={buttonStyle}>Subscribe</button>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#777', fontSize: '0.85rem' }}>
           <hr></hr> 
          © {new Date().getFullYear()} School Bus Management. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

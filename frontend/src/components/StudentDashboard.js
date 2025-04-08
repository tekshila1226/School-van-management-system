import { Card, Col, Container, Row } from 'react-bootstrap';

import React from 'react';

const StudentDashboard = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col>
          <h1>Student Dashboard</h1>
          <p>View your bus schedule and details.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Bus Schedule</Card.Title>
              <Card.Text>Your bus arrives at 8:00 AM.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Bus Route</Card.Title>
              <Card.Text>Route: Main Street to School.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentDashboard;
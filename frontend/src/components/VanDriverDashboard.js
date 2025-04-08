import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import React from 'react';

const VanDriverDashboard = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col>
          <h1>Van Driver Dashboard</h1>
          <p>Manage your van and routes.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Van Details</Card.Title>
              <Card.Text>Van Number: VN1234</Card.Text>
              <Button variant="primary">Update Van</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Route Management</Card.Title>
              <Card.Text>Current Route: Main Street to School.</Card.Text>
              <Button variant="info">Update Route</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VanDriverDashboard;
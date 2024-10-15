import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import './NavBar.css'; // Custom CSS for additional styling

function NavBar() {
  const [activeTab, setActiveTab] = useState('Start Renewal');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      {/* Bootstrap Navbar with custom background */}
      <Navbar expand="lg" className="navbar-custom shadow-sm p-3 mb-5 bg-white rounded">
        <Container>
          {/* First Row with Title and Logout */}
          <Row className="w-100">
            <Col md={8}>
              <Navbar.Brand href="#home" className="text-primary fs-4">
                Renewal Processing System
              </Navbar.Brand>
            </Col>
            <Col md={4} className="d-flex justify-content-end align-items-center">
              <span className="me-3">Welcome, User1</span>
              <Button variant="outline-primary">Logout</Button>
            </Col>
          </Row>

          {/* Second Row with Tabs */}
          <Row className="w-100 mt-2">
            <Col md={12}>
              <Nav className="justify-content-start">
                <Nav.Link
                  href="#start"
                  className={activeTab === 'Start Renewal' ? 'active text-primary' : ''}
                  onClick={() => handleTabClick('Start Renewal')}
                >
                  Start Renewal
                </Nav.Link>
                <Nav.Link
                  href="#show"
                  className={activeTab === 'Show Differences' ? 'active text-primary' : ''}
                  onClick={() => handleTabClick('Show Differences')}
                >
                  Show Differences
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Tab Content based on the selected tab
      <div className="tab-content p-3">
        {activeTab === 'Start Renewal' && (
          <div>
            <h5>Start Renewal Content</h5>
            <p>This is where the Start Renewal content will go.</p>
          </div>
        )}
        {activeTab === 'Show Differences' && (
          <div>
            <h5>Show Differences Content</h5>
            <p>This is where the Show Differences content will go.</p>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default NavBar;

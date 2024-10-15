import React, { useState } from 'react';
import { Accordion, Form, Button, Row, Col, Container } from 'react-bootstrap';
import PlanTable from './PlanTable'; 
import './searchForm.css'; // Custom CSS for search form styling

function SearchForm() {
  const [contractCode, setContractCode] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [state, setState] = useState('');
  const [marketSegment, setMarketSegment] = useState('');

  return (
    <Container className="mt-4">
      <Accordion defaultActiveKey="0">
        {/* Search Criteria Accordion */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Renewal Search Criteria</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Row>
                <Col md={3}>
                  <Form.Group controlId="contractCode">
                    <Form.Label>Contract Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Contract Code"
                      value={contractCode}
                      onChange={(e) => setContractCode(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="effectiveDate">
                    <Form.Label>Effective Date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Effective Date"
                      value={effectiveDate}
                      onChange={(e) => setEffectiveDate(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="marketSegment">
                    <Form.Label>Market Segment</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Market Segment"
                      value={marketSegment}
                      onChange={(e) => setMarketSegment(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        {/* Plan Differences Accordion */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Plan Differences</Accordion.Header>
          <Accordion.Body>
           <p>Details related to Plan Differences go here.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* Medical Benefit Differences Accordion */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Medical Benefit Differences</Accordion.Header>
          <Accordion.Body>
          <PlanTable/ >
            {/* <p>Details related to Medical Benefit Differences go here.</p> */}
          </Accordion.Body>
        </Accordion.Item>

        {/* Pharmacy Plan Data Accordion */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Pharmacy Plan Data</Accordion.Header>
          <Accordion.Body>
            <p>Details related to Pharmacy Plan Data go here.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Search Button */}
      <Row className="mt-4">
        <Col md={{ span: 3, offset: 9 }}>
          <Button variant="primary" type="submit" className="w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;

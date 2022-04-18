import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container py-5' >
            <h2 className='mb-5'>Question and Answer</h2>
            <div className="row" style={{textAlign:'left'}}>
        <div className="col-md-6">
        <Card>
  <Card.Body>
    <Card.Title>Difference between authorization and authentication</Card.Title>
    <Card.Text>
      <h4>Authentication</h4>
      <p>-Verifies you are who you say are</p>
      <p>-Methods:</p>
      <ol>
          <li>Login form</li>
          <li>HTTP authentication</li>
          <li>HTTP digest</li>
          <li>Custom authentication method</li>
      </ol>
      <h4>Authorization</h4>
      <p>-Decides if you have permission to access a resource</p>
      <p>-Methods:</p>
      <ol>
          <li>Access controls for URLs</li>
          <li>Secure object and methods </li>
          <li>HTTP digest</li>
          <li>Access control lists (ACLs)</li>
      </ol>
    </Card.Text>
  </Card.Body>
</Card>
        </div>
        <div className="col-md-6">
        <Card>
  <Card.Body>
    <Card.Title>What other services does firebase provide other than authentication</Card.Title>
    <Card.Text>
      <ol>
          <li>Parse – Open Source Backend Platform</li>
          <li>Back4app – Parse Hosting Platform</li>
          <li>Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise</li>
          <li>Backendless – Mobile Backend and API Services Platform</li>
          <li>Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects</li>
          <li>Pubnub – Real-time APIs and Global Messaging</li>
          <li>Kumulos – App Performance Management</li>
      </ol>
    </Card.Text>
  </Card.Body>
</Card>
        </div>
            </div>
        </div>
    );
};

export default Blog;
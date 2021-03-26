import React, { useState } from "react";
import { Card, Button, Alert, Col, Image } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import './Box.css';

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout, imageUrl } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch(error) {
      setError("Failed to log out", error);
    }
  }

  return (
    <>
    <div className='profile-page'>
      <br></br><br></br><br></br>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Col xs={6} md={4}>
            <Image src={imageUrl} style={{width: '17rem'}} roundedCircle/>
          </Col>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
          <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
          </div>
      </Card>      
      </div>
    </>
  )
}
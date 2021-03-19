import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Success = () => {
    
    return (
        <div>
            <h1>
                Congratulations, you won 1,000 Bitcoin!
            </h1>
            <button>
                <Link to={`/`}>
                    <Nav.Link href="#update">Home</Nav.Link>
                </Link>
            </button>

        </div>
      );
}
 
export default Success;
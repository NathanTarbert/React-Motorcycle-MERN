import React from 'react';
import { Card } from 'react-bootstrap';
import './Box.css';

const About = () => {
    return (
        <div className='container' style={{ backgroundColor: 'rgb(189, 156, 149)', height: '300px', marginBottom: '770px', borderRadius: '20px'}}>
            <h1 style={{color: 'white'}}>About Page</h1>
             <Card className="text-right" style={{ backgroundColor: 'Scrollbar', borderRadius: '20px'}}>
            <blockquote className="blockquote mb-0 card-body">
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over  2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

             he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
             <footer className="blockquote-footer">
             <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
              </footer>
            </blockquote>
            </Card>
            
            
        </div>
      );
}
 
export default About;
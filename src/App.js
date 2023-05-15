import React from 'react';
import { Badge, Card, CardGroup } from 'react-bootstrap';

function App() {
  const pageStyle = {
    height: '100vh',
    backgroundColor: '#0d1117',
    fontFamily: 'Helvetica',
    color: 'white',
    margin: 0   
  }

  const inputStyle = {
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px",
    backgroundColor: '#161b22',
    border: '1px solid #7d8590',
    borderRadius: '6px'
  };

  const frameStyle = {
    width: "100%",
    height: "100%",
    padding:"6px",
    backgroundColor: '#0d1117',
  };

  return (
    <div className="App" style={pageStyle} >
      <div className="container pt-4 h-100">
        <div className="row">
          <div className="col text-center">
            <h1 className='text-align-center'>
              Markdown Previewer
            </h1>
          </div>
        </div>
        <CardGroup className="row mt-4 xs={1} md={2} h-75">
          <Card className="col-md-6 p-0">
            <Card.Header className='bg-dark'>Markdown Input</Card.Header>
            <Card.Body className="mark-input" style={frameStyle}>
              <textarea
                className="input text-white"
                style={inputStyle}
                >
              </textarea>
            </Card.Body>
          </Card>
          <Card className="col-md-6 p-0">
          <Card.Header className='bg-dark'>Markdown Preview</Card.Header>
          <Card.Body style={frameStyle}>
            <div></div>
          </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default App;

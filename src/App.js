import React, { useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { marked } from 'marked';

marked.use({
  gfm: true,
  breaks: true
});

const App = () => {
  const placeholder = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg)
  `;

  const [ markdown, setMarkdown ] = useState(placeholder);

  //Styling
  const pageStyle = {
    minHeight: '100vh',
    height: '100%',
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

  const updateMarkdown = (markdown) => {
    setMarkdown(markdown)
  }

  return (
    <div className="App" style={pageStyle}>
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
                id='editor'
                className="input text-white"
                style={inputStyle}
                value={markdown}
                onChange={(e) => {
                  updateMarkdown(e.target.value);
                }}
                >
                  {console.log(markdown)}
              </textarea>
            </Card.Body>
          </Card>
          <Card className="col-md-6 p-0">
          <Card.Header className='bg-dark'>Markdown Preview</Card.Header>
          <Card.Body style={frameStyle}>
            <div 
              id='preview'
              dangerouslySetInnerHTML={{
                __html: marked(markdown)
            }}></div>
          </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );

}

export default App;

import React from "react";
import Header from "./Header";
import TweetList from "./TweetList";
import Profile from "./Profile";
import AboutMe from "./AboutMe";
import SuggestedList from "./SuggestedList";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function App(){
  return (
    <React.Fragment>
      <Header />
      <hr/>
      <Row>
        <Col>
          <Profile />
          <AboutMe />
        </Col>
        <Col xs={6}>
          <TweetList />
        </Col>
        <Col>
          <SuggestedList />
        </Col>
      </Row>
      
    </React.Fragment>
  );
}

export default App;

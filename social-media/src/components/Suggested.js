import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button'

function Suggested(props){
  return (
    <React.Fragment>
      <h3>{props.userName}</h3>
      <Button variant="outline-dark">Follow</Button>{' '}
      <hr/>      
    </React.Fragment>
  );
}




  Suggested.propTypes = {
    userName: PropTypes.string.isRequired
  }

export default Suggested
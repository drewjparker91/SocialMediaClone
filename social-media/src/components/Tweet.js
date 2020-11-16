import React from "react";
import PropTypes from "prop-types";

function Tweet(props){
  return (
    <React.Fragment>
      <h3>{props.userName}</h3>
      <h3>{props.tweetBody}</h3>
      <h6>{props.tweetDate}</h6>
      <hr/>
      <h6>{props.tweetLink}</h6>
      <hr/>
    </React.Fragment>
  );
}

Tweet.propTypes = {
  userName: PropTypes.string.isRequired,
  tweetBody: PropTypes.string.isRequired,
  tweetDate: PropTypes.string.isRequired,
  tweetLink: PropTypes.string
}

export default Tweet
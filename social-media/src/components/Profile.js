import React from "react";
import PropTypes from "prop-types";


function Profile(props){
  return (
    <div className = "container">
      <React.Fragment>
        <h3>@Prof.OAK</h3>
        <p>Tweets &nbsp;| Followers &nbsp;| Following</p> 
        <p> &nbsp; &nbsp; 194 &nbsp; &nbsp;  |&nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; 492</p>
        <hr/>
      </React.Fragment> 
    </div>
    
  );
}

Profile.propTypes = {
  userName: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number
}

export default Profile;

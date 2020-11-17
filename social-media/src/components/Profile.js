import React from "react";
import PropTypes from "prop-types";


function Profile(props){
  return (
    <div className = "container">
      <React.Fragment>
        <img src = "https://giantbomb1.cbsistatic.com/uploads/square_medium/8/84561/1465705-professor_oak_anime.png" alt = "" width = "75 px" height = "100px" float = "left"></img>
        <div className="profile-content">
          <h3>@Prof.OAK</h3>
          <p>Tweets &nbsp;| Followers &nbsp;| Following</p> 
          <p> &nbsp; &nbsp; 194 &nbsp; &nbsp;  |&nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; 492</p>
        </div>
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

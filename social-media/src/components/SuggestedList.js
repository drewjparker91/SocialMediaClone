import React from "react";
import Suggested from "./Suggested";

const masterSuggestedList = [
  {
    userName: "@CharizardFireBreath"
  },
  {
    userName: "@Brock34Stone"
  },
  {
    userName: "@Poliwrath"
  }
]

function SuggestedList() {
  return (    
    <React.Fragment>
      <hr />
      {masterSuggestedList.map((suggested, index) =>
        <Suggested userName={suggested.userName}
          key={index} />
      )}
    </React.Fragment>    
  );
}

export default SuggestedList;
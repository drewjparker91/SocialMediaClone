import React from "react";
import Tweet from "./Tweet";

const masterTweetList = [
  {
    userName: 'PikachuDaGoat',
    tweetBody: ' @venusaur69 I will zap the shit out of you',
    tweetDate: '4/10/2000'
  },
  {
    userName: '@venusaur69',
    tweetBody: 'try me you un-evolved shrimp',
    tweetDate: '4/10/2000'
  },
  {
    userName: '@AshKetchumIfYouKan',
    tweetBody: ' @venusaur69 @PikachuDaGoat will you guys shut up?',
    tweetDate: '4/11/2000',
    tweetLink: 'https://pokedex.poke'
  },
  {
    userName: '@Dragonite420',
    tweetBody: 'Puff the magic Dragon',
    tweetDate:'4/20/2000'
  }
];


function TweetList() {
  return (  
    <React.Fragment>   
          <hr />
          {masterTweetList.map((tweet, index) =>
            <div className = "card"> 
              <div className = "container">
                <Tweet userName={tweet.userName}
                  tweetBody={tweet.tweetBody}
                  tweetDate={tweet.tweetDate}
                  tweetLink={tweet.tweetLink}
                  key={index} />
              </div>
            </div>
          )}
    </React.Fragment> 
  );
}

export default TweetList;
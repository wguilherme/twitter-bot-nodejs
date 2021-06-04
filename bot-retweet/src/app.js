const config = require('./config')
const twit = require('twit')
const Tweet = new twit(config)

function retweet(searchText) {
   let params = {
      q: searchText + '',
      result_type: 'mixed',
      count: 25
   }

   Tweet.get('search/tweets', params, (err, data, res) => {

      let tweets = data.statuses
      if (!err) {

         let tweetIDList = []
         for (let tweet of tweets) {
            tweetIDList.push(tweet.id_str)
         }

         for (let tweetID of tweetIDList) {
            Tweet.post('statuses/retweet/:id', { id: tweetID }, function (err, data, res) {
               if (!err) {
                  console.log("Retweeted ID - " + tweetID)
               }
               else {
                  console.log("Error in ", tweetID)
                  console.log("Error ", err)
               }
            })
         }

         console.log(data)
      }
      else {
         return console.log('Error while searching' + err)
      }
   })
}

setInterval(() => { reweet('#Javascript OR #100daysofcode') }, 60000)
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
         console.log(data)
      }
      else {
         return console.log('Error while searching' + err)

      }

   })

}

// run every 1min
setInterval(() => { reweet('#Javascript OR #100daysofcode') }, 60000)
var axios = require('axios');

var helper = {
    runQuery: function(term, begin, end) {

        var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

        var qs = '?api-key=2434876726a64f759a34973f3c928f7e&q=' + term;

        if (begin) {
            qs += '&begin_date=' + begin + '0101';
        }

        if (end) {
            qs += '&end_date=' + end + '1231';
        }

        return axios.get(queryURL + qs).then(function(response) {
            if (response.data.response.docs.length > 0) {
                var responses = [];

                for (var i = 0; i < 5; i++) {
                    var doc = response.data.response.docs[i];
                    var articleID = doc._id;
                    var article = {
                        title: doc.headline.main,
                        url: doc.web_url,
                        date: doc.pub_date.split('T')[0],
                        articleID: articleID
                    };

                    responses.push(article);
                }
                return responses;

            } else {
                return false;
            }
        });
    },
    getSaved: function() {
        return axios.get("/api/saved");
    },
    postSaved: function(article) {
        return axios.post('/api/saved', article);
    },
    deleteSaved: function(articleID) {
        return axios.delete('/api/saved/' + articleID);
    }
};

module.exports = helper;
var elasticsearch = require('elasticsearch');
 
 
var client = new elasticsearch.Client({
    host: 'localhost:9200'
});

client.index({
  index: 'sample',
  type: 'document',
  id: '1',
  body: {
          name: 'Reliability',
          text: 'eliability is improved if multiple redundant sites are used, which makes well-designed cloud computing suitable for business continuity.'
  }
}, function (error, response) {
  console.log("index done");
  console.log(error, response);
});

client.search({
        index: 'sample',
        type: 'document',
        body: {
            query: {
                query_string:{
                   query:"Reliability"
                }
            }
        }
    }).then(function (resp) {
        console.log(resp.hits.hits);
        console.log(resp);
    }, function (err) {
        console.log("err", err.message);
    });


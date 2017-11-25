### run 

    docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.0.0

### log
    
    dengwei@RMBAP:~/projects/github/es$ node app.js
    [ { _index: 'sample',
        _type: 'document',
        _id: '1',
        _score: 0.2876821,
        _source:
         { name: 'reliability',
           text: 'eliability is improved if multiple redundant sites are used, which makes well-designed cloud computing suitable for business continuity.' } } ]
    { took: 8,
      timed_out: false,
      _shards: { total: 5, successful: 5, skipped: 0, failed: 0 },
      hits: { total: 1, max_score: 0.2876821, hits: [ [Object] ] } }
    index done
    undefined { _index: 'sample',
      _type: 'document',
      _id: '1',
      _version: 3,
      result: 'updated',
      _shards: { total: 2, successful: 1, failed: 0 },

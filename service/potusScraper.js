const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';


function scrap(count) {
	
	return rp(url)
	  .then(function(html){
	    //success!
	    const wikiUrls = [];
	    for (let i = 0; i < count; i++) {
	      wikiUrls.push($('big > a', html)[i].attribs.href);
	    }
	    
	    return wikiUrls;
	  })
	  .catch(function(err){
		  return err;
	  });
}

module.exports = { scrap };
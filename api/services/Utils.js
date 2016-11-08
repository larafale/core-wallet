module.exports = {

	string: {

	  random: function(len, lowercase){ 
	    var pos, charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', random  = '';
	    if(lowercase) charSet = charSet.toLowerCase() 
	    for (var i = 0; i < (len||6); i++){ 
	      pos = Math.floor(Math.random() * charSet.length)
	      random += charSet.substring(pos, pos+1)
	    } 
	    return random
	  },
	  
	  token: function(prefix){ 
	    return (prefix || '') + require('crypto').createHash('md5').update(module.exports.string.random(8)).digest("hex") 
	  },

	  cardize: function(card, mask){
	  	mask = mask || '0'
	  	return card.substr(0,6) + _.repeat(mask, 4) + card.substr(11, 4)
	  }
		
	}

}
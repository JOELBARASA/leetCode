/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var urlMapper = new Map();
var encode = function(longUrl) {  
    urlMapper.set(longUrl+"*",longUrl);   
    return longUrl+"*";
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {    
    return urlMapper.get(shortUrl);   
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

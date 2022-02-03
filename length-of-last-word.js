/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    console.log(s);
    s = s.trim();
    if(typeof s!=='string' ){
        return "\nIvalid Entry. Only valid strings are allowed!";
    }
    else if(s.length ==0 ){
        return 0;
    }
    else{        
        return s.split(" ")[s.split(" ").length - 1].length;
    }    
};

var hammingWeight = function(n) {
    // 1. First option   
    // return n.toString(2).split('').filter(x => x === '1').length;
    
    // 2. Second option
    let processedString = n.toString(2);
    let count = 0, position = processedString.indexOf('1');
    
    while(position !== -1){
        position = processedString.indexOf('1', position + 1);
        count++;
    }    
    return count;   
};

var truncateSentence = function (s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') {
        return -1;
    }
    else {
        // let sArray = s.split(" ").slice(0,k);
        return s.trim().split(" ").splice(0, k).join(' ');

    }
};

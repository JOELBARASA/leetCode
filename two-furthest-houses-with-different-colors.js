var maxDistance = function (colors) {
    console.log(colors);
    if (!Array.isArray(colors) || colors.length < 2) {
        return 0;
    }
    else {
        let left = 0, right = 1, maximumDisplacement = 0;
        //Keep the left index starting and iterate to the right
        //Incrementing the right index
        while(right < colors.length){
            if(colors[right] !== colors[left]){
                maximumDisplacement = Math.max(maximumDisplacement, right - left);
            }
            right++;
        }        
        //Repeat for the right index
        right = colors.length - 1;
        while(left < colors.length){
            if(colors[right] !== colors[left]){
                maximumDisplacement = Math.max(maximumDisplacement, right - left);
            }
            left++;
        }
        return maximumDisplacement;
    }
    // else {
    //     let maxDistance = 0;
    //     for (let i = 0; i < colors.length; i++) {
    //         for (let j = i + 1; j < colors.length; j++) {
    //             if (colors[i] !== colors[j] && (j - i) > maxDistance) {
    //                 maxDistance = j - i;
    //             }
    //         }
    //     }
    //     return maxDistance;
    // }
};

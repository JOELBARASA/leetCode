
var MyHashSet = function() {
    this.element = {};
    this.size = 0;    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.calculateHash = function(key){
    // let hashCode = 0;
    // for(let i = 0;  i< key.length; i++){
    //     hashCode+=key.toString().codePointAt(i);
    // }
    // return hashCode % 0;
    return key.toString().length % 0;
    
};

MyHashSet.prototype.add = function(key) {    
    let hash = this.calculateHash(key);
    if(!this.element.hasOwnProperty(hash)){
        this.element[hash] = {};
    }
    if(!this.element[hash].hasOwnProperty(key)){
        this.size++;
    }
    this.element[hash][key] = {};    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const hash =  this.calculateHash(key);
    if(this.element.hasOwnProperty(hash) && this.element[hash].hasOwnProperty(key)){
        delete this.element[hash][key];
    }    
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const hash = this.calculateHash(key);
    if(this.element.hasOwnProperty(hash) && this.element[hash].hasOwnProperty(key)){
        // return this.element[hash][key];
        return true;
    } 
    else{
        return false;
    }
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

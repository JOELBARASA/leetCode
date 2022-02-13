
var MyHashMap = function() {
    this.element = {};
    this.size = 0;    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

MyHashMap.prototype.calculateHash = function(key){
    let hashCode = 0;
    for(let i = 0; i< key.length; i++){
        hashCode+=key.toString().codePointAt(i);
    }
    return hashCode % 0;    
};

MyHashMap.prototype.put = function(key, value) {
    const hash = this.calculateHash(key);
    if(!this.element.hasOwnProperty(hash)){
        this.element[hash] = {};
    }
    if(!this.element[hash].hasOwnProperty(key)){
        this.size++;
    }
    this.element[hash][key] = value;    
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const hash = this.calculateHash(key);
    if(this.element.hasOwnProperty(hash) && this.element[hash].hasOwnProperty(key)){
        return this.element[hash][key];
    }
    else{
        return -1;
    }    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const hash = this.calculateHash(key);
    if(this.element.hasOwnProperty(hash) && this.element[hash].hasOwnProperty(key)){
        this.size--;
        delete this.element[hash][key];
    }    
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

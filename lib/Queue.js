/**
 * Queue Class
 * -----------------------------
 * A Queue data structure implemented as an ES6 class
 *
 * A queue is a data structure in which the first element is inserted from one end called
 * REAR (also called tail), and the deletion of existing element takes place from the other
 * end called as FRONT (also called head).  This makes queue a FIFO (first in first out), or
 * the element that is inserted first will always be the first to be removed.
 * You will be using an Object as an internal datastore.  Do not use an Array!
 *
 * There should be a constructor method with no arguments.
 *
 * Note that the _storage Object is OPTIONAL as there is a way to implement this exercise
 * without the _storage Object.
 *
 * @private {object} _storage              Default value should be an empty object. (Optional)
 * @private {number} _front                Default value should be set null.
 * @private {number} _back                 Default value should be set null.
 *
 */
class Queue{
    constructor(){
        this._storage = {};
        this._front = null;
        this._back = null;
    }  

  /**
   * Queue Class Method => size()
   * -----------------------------
   * Returns the size of the queue.
   *
   * @name size
   * @return {Number}
   */
  size(){
    if(this._back === null){
        let sizeQueue = 0;
        return sizeQueue;
    }

 }
  /**
   * Queue Class Method => enqueue(item)
   * -----------------------------
   * Puts an item in the queue.
   *
   * @name enqueue
   * @param item
   * @return {Number} returns the new size
   */
  enqueue(item){

    if(this._back === null){
        this._back = 0; //Set the new queue to start from 0
        this._front = this._back; //Set the front/head element to be the first element that enters
    }
    this._storage[this._back] = item;
    this._back++;
}

dequeue(){
    if(this._front === null){
        return null;
    }
    else{
        let itemDequeued = this._storage[this._front];
        //Set the new front/head to be the element behind the first element to be removed. Decrease the size of the queue by 1 
        this._front++;
        this._back--;
        return itemDequeued;
    }
}

peek(){
    if(this._back === null){
        return null;
    }
    else{
       let peekItem = this._storage[this._front];
       return peekItem;
    }
}  
}
module.exports = Queue;
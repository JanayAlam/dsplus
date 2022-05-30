import SingleNode from './.internal/SingleNode.js';

/**
 * Single Linked List class.
 * @author Md Janay Alam
 */
class SinglyLinkedList {
    /**
     * Create a SinglyLinkedList instance. It takes the initial
     *  values as arguments.
     */
    constructor() {
        this.__size__ = 0;
        this.__head__ = null;

        if (arguments.length > 0) {
            for (let i = 0; i < arguments.length; ++i) {
                this.pushBack(arguments[i]);
            }
        }
    }

    /**
     * Get the value of the first node.
     * @returns {any} the value of the head node
     */
    getHeadValue = () => {
        return this.__head__.getData();
    };

    /**
     * Insert element at the first position of the single linked list.
     * - Time Complexity: BigO(1).
     * @param {any} data the element which will be stored in the list
     */
    pushFront = (data) => {
        if (!this.__head__) {
            this.__head__ = new SingleNode(data);
        } else {
            let newNode = new SingleNode(data);
            newNode.setNext(this.__head__);
            this.__head__ = newNode;
        }
        this.__size__++;
    };

    /**
     * Insert element at the last position of the single linked list.
     * - Time Complexity: BigO(n).
     * @param {any} data the element which will be stored in the list
     */
    pushBack = (data) => {
        if (!this.__head__) {
            this.__head__ = new SingleNode(data);
        } else {
            let newNode = new SingleNode(data);
            let temp = this.__head__;
            while (temp.getNext()) {
                temp = temp.getNext();
            }
            temp.setNext(newNode);
        }
        this.__size__++;
    };

    /**
     * Given a 'key', delete the first occurrence of this key in the linked list.
     * - Time Complexity: BigO(n).
     * @param {any} key the item that will be deleted
     */
    pop = (key) => {
        let temp = this.__head__;
        let prev = null;

        // check the element is in the first position
        if (temp && temp.getData() === key) {
            this.__head__.setNext(this.__head__.getNext());
            return;
        }

        // searching for the element
        // break the while loop if the desire element was found
        while (temp && temp.getData() !== key) {
            prev = temp;
            temp = temp.getNext();
        }

        // the element was not found
        if (!temp) return;

        // unlinking the element from the chain
        prev.setNext(temp.getNext());
        this.__size__--;
    };

    /**
     * Get the size of the list.
     * @returns the size of the linked list
     */
    getSize = () => {
        return this.__size__;
    };

    /**
     * Returns the whole list as a string
     * @returns {string} the string of the list items
     */
    toString = () => {
        if (!this.__head__) return '[]';
        let str = '[';
        let temp = this.__head__;
        while (temp.getNext()) {
            str +=
                typeof temp.getData() === 'string'
                    ? ` '${temp.getData()}',`
                    : ` ${temp.getData()},`;
            temp = temp.getNext();
        }
        str +=
            typeof temp.getData() === 'string'
                ? ` '${temp.getData()}' ]`
                : ` ${temp.getData()} ]`;
        return str;
    };
}

const ll = new SinglyLinkedList(1, 5, 10);
ll.pushBack({ name: 'Alam', age: 21 });
ll.pushFront(0);
ll.pop({ name: 'Alam', age: 21 });
console.log('Size: ', ll.getSize());
console.log(ll.toString());

export default SinglyLinkedList;


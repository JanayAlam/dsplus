/**
 * The node class of a single node.
 * @author Md Janay Alam
 */
class SingleNode {
    /**
     * A single linked node.
     *
     * @param {any} data The value which will be stored.
     */
    constructor(data) {
        this.__data__ = data;
        this.__next__ = null;
    }

    /**
     * Set the next node.
     *
     * @param {SingleNode} next The next node reference.
     */
    setNext = (next) => {
        this.__next__ = next;
    };

    /**
     * Getting the next node.
     *
     * @returns The next node reference.
     */
    getNext = () => {
        return this.__next__;
    };

    /**
     * Getting the data of the node.
     *
     * @returns The data.
     */
    getData = () => {
        return this.__data__;
    };
}

export default SingleNode;


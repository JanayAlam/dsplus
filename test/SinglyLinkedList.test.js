import assert from 'assert';
import SinglyLinkedList from '../SinglyLinkedList.js';

describe('singly linked list', function () {
    it('toString() should return a valid string', function () {
        const obj = { num: 3, value: '3' };
        const arr = [1, 2, 3, 5];
        const sll = new SinglyLinkedList(1, 2, obj, 'Hello', arr);
        assert.strictEqual(
            sll.toString(),
            `[ 1, 2, ${JSON.stringify(obj)}, "Hello", ${JSON.stringify(arr)} ]`
        );
    });
});

